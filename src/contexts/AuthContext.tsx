"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { useRouter } from "next/navigation";
import { supabase, type AuthUser } from "@/lib/supabase";
import { User } from "@supabase/supabase-js";

interface AuthContextType {
  isAuthenticated: boolean;
  user: AuthUser | null;
  login: (username: string, password: string) => Promise<boolean>;
  loginWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Session duration: 1 hour in milliseconds
const SESSION_DURATION = 60 * 60 * 1000; // 1 hour

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Check authentication on app load
    checkAuthStatus();

    // Listen for Supabase auth changes (for Google OAuth)
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === "SIGNED_IN" && session?.user) {
        await checkGoogleAdminAccess(session.user);
      } else if (event === "SIGNED_OUT") {
        setIsAuthenticated(false);
        setUser(null);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const checkAuthStatus = async () => {
    try {
      // First check local auth (test/1234)
      const localAuth = checkLocalAuth();
      if (localAuth) {
        setIsLoading(false);
        return;
      }

      // Then check Supabase auth (Google)
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (session?.user) {
        await checkGoogleAdminAccess(session.user);
      } else {
        setIsAuthenticated(false);
        setUser(null);
      }
    } catch (error) {
      console.error("Error checking auth status:", error);
      setIsAuthenticated(false);
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  const checkLocalAuth = () => {
    try {
      const authData = localStorage.getItem("mAIscam_admin_auth");
      if (authData) {
        const { timestamp, type } = JSON.parse(authData);
        const now = Date.now();

        if (type === "local" && now - timestamp < SESSION_DURATION) {
          setIsAuthenticated(true);
          setUser({
            id: "local",
            email: "test@admin.local",
            name: "Test Admin",
          });
          return true;
        } else {
          localStorage.removeItem("mAIscam_admin_auth");
        }
      }
    } catch (error) {
      localStorage.removeItem("mAIscam_admin_auth");
    }
    return false;
  };

  const checkGoogleAdminAccess = async (user: User) => {
    try {
      // Check if user has admin access in Supabase
      const { data: adminUser, error } = await supabase
        .from("admin_users")
        .select("*")
        .eq("email", user.email)
        .eq("is_active", true)
        .single();

      if (error || !adminUser) {
        // User doesn't have admin access
        setIsAuthenticated(false);
        setUser(null);
        await supabase.auth.signOut();
        alert(
          "You do not have admin access. Please contact the administrator."
        );
        return;
      }

      // User has admin access
      setIsAuthenticated(true);
      setUser({
        id: user.id,
        email: user.email || "",
        name: user.user_metadata?.full_name || user.user_metadata?.name,
        avatar_url: user.user_metadata?.avatar_url,
      });

      // Store session data
      const authData = {
        timestamp: Date.now(),
        type: "google",
        userId: user.id,
        email: user.email,
      };
      localStorage.setItem("mAIscam_admin_auth", JSON.stringify(authData));
    } catch (error) {
      console.error("Error checking admin access:", error);
      setIsAuthenticated(false);
      setUser(null);
    }
  };

  const login = async (
    username: string,
    password: string
  ): Promise<boolean> => {
    // Local test/1234 authentication
    if (username === "test" && password === "1234") {
      const authData = {
        timestamp: Date.now(),
        type: "local",
        username: username,
      };

      setIsAuthenticated(true);
      setUser({ id: "local", email: "test@admin.local", name: "Test Admin" });
      localStorage.setItem("mAIscam_admin_auth", JSON.stringify(authData));

      // Set up automatic logout after 1 hour
      setTimeout(() => {
        logout();
      }, SESSION_DURATION);

      return true;
    }
    return false;
  };

  const loginWithGoogle = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${window.location.origin}/admin`,
        },
      });

      if (error) {
        console.error("Google login error:", error);
        alert("Failed to sign in with Google. Please try again.");
      }
    } catch (error) {
      console.error("Google login error:", error);
      alert("Failed to sign in with Google. Please try again.");
    }
  };

  const logout = async () => {
    try {
      // Check if user is logged in via Google
      const authData = localStorage.getItem("mAIscam_admin_auth");
      if (authData) {
        const { type } = JSON.parse(authData);
        if (type === "google") {
          await supabase.auth.signOut();
        }
      }
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      // Clear all auth data
      setIsAuthenticated(false);
      setUser(null);
      localStorage.removeItem("mAIscam_admin_auth");
      router.push("/login");
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        login,
        loginWithGoogle,
        logout,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

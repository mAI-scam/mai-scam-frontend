"use client";

import {
  Inbox,
  Star,
  Clock,
  Send,
  FileText,
  Trash2,
  Mail,
  Edit,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const sidebarItems = [
  { icon: Inbox, label: "Inbox", count: 3, active: true },
  { icon: Star, label: "Starred" },
  { icon: Clock, label: "Snoozed" },
  { icon: Send, label: "Sent" },
  { icon: FileText, label: "Drafts" },
  { icon: Trash2, label: "Trash" },
];

export function GmailSidebar() {
  return (
    <aside className="w-64 bg-background border-r h-full flex-shrink-0">
      <div className="p-4">
        <Button
          className="w-full justify-start gap-3 rounded-2xl"
          size="lg"
          variant="secondary"
        >
          <Edit className="h-5 w-5" />
          <span className="font-medium">Compose</span>
        </Button>
      </div>

      <nav className="px-2">
        {sidebarItems.map((item) => (
          <Button
            key={item.label}
            variant="ghost"
            className={cn(
              "w-full justify-between rounded-r-full",
              item.active &&
                "bg-destructive/10 text-destructive hover:bg-destructive/20 font-medium"
            )}
          >
            <div className="flex items-center space-x-3">
              <item.icon className="h-5 w-5" />
              <span className="text-sm">{item.label}</span>
            </div>
            {item.count && (
              <span className="text-sm font-medium">{item.count}</span>
            )}
          </Button>
        ))}
      </nav>
    </aside>
  );
}

export default function Footer() {
  return (
    <footer className="container mx-auto px-6 py-8 mt-16 border-t">
      <div className="text-center text-muted-foreground">
        <p>
          © {new Date().getFullYear()} mAIscam Web Extension Demo. Showcasing
          browser-based scam protection for Southeast Asia.
        </p>
        <p className="text-sm mt-2">
          This demo website simulates the actual Chrome extension functionality.
        </p>
      </div>
    </footer>
  );
}

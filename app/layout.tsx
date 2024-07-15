import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/ThemeProvider";
import FooterSimple from "@/components/FooterSimple";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Ayoungh Dev",
  description: "The personal website of Ayoungh Dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background text-foreground font-sans antialiased bg-theme-light dark:bg-theme-dark",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <FooterSimple />
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Agent Friendly Network (AFN)",
    default: "Agent Friendly Network (AFN) - Building an Agent-Friendly Internet",
  },
  description:
    "Agent Friendly Network connects developers, projects and companies building software, APIs, CLIs and ecosystems designed for AI agents.",
  keywords: [
    "Agent-Friendly",
    "AI Agents",
    "Agent Native Internet",
    "MCP",
    "CLI Automation",
    "AI Infrastructure",
    "Open Standards",
    "AFN",
  ],
  authors: [{ name: "Agent Friendly Network Consortium" }],
  openGraph: {
    title: "Agent Friendly Network (AFN)",
    description: "Building an Agent-Friendly Internet for AI Agents and Autonomous Software.",
    url: "https://agentfriendly.network",
    siteName: "Agent Friendly Network",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Agent Friendly Network (AFN)",
    description: "Building an Agent-Friendly Internet.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} dark`}>
      <body className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans selection:bg-zinc-800 selection:text-white">
        <Header />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import QueryProvider from "@/components/Providers/QueryProvider";
import links from "@/public/utils/links.json";

export const metadata: Metadata = {
  title: "ALBAIK | البيك",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background">
        <QueryProvider>
          <Header navItems={links.navItems} />
          {children}
          <Footer navItems={links.navItems} policyLinks={links.policyLinks} />
        </QueryProvider>
      </body>
    </html>
  );
}

// TODO: Fetch data from backend and pass it to menu components using tRPC
// TODO: Refactor

// TODO: Create Orders Page
// TODO: Create Order Details Component
// TODO: Create Checkout Page

// TODO: Tracking Order
// TODO: Profile Page
// TODO: Finish Cart Logic and Shared states

// TODO: Demo Options prompt to browse all pages without backend
// TODO: Change Language

// TODO: Simulate Backend

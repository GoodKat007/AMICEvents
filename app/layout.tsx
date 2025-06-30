import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AMIC Events - Premium Event Apparel",
  description: "Custom apparel solutions for events that demand excellence",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "energies",
  description: "Created with energies",
  generator: "john",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

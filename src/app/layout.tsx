import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hypex — A Complete Marketing Solution",
  description:
    "Brands grow faster when everything works together. Strategy, creative, performance marketing and automation.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

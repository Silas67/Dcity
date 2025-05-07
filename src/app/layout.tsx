import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Dominion City Abuja Headquaters",
  description: "A church website",
  icons: [{ url: "/icon.png", sizes: "180x180", type: "image/png" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={``}>{children}</body>
    </html>
  );
}

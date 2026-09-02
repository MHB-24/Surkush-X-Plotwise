import type { Metadata } from "next";
import CustomCursor from "@/components/CustomCursor";
import "./globals.css";

export const metadata: Metadata = {
  title: "Surkush — Creative Systems for DTC Brands",
  description:
    "A complete creative system, built in ten days. Research, scripts, and the workspace where your creative operation runs.",
  icons: {
    icon: "/surkush-logo.svg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="antialiased">
      <body>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}

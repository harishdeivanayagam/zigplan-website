import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zigplan | AI Native Backoffice for General Contractors",
  description:
    "Zigplan is the AI native backoffice for general contractors. Quantity takeoff, estimating, and procurement — so your team stays on the job, not the spreadsheet.",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

import AuthProvider from "@providers/AuthProvider";
import Navbar from "@components/Navbar";
import "@styles/globals.css";

import type { Metadata } from "next";
import { Fira_Mono } from "next/font/google";

const Font = Fira_Mono({
  subsets: ["latin-ext"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "devNote",
  description: "Share your thoughts to others.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <body className={`${Font_Inter.className} bg-gray-900 text-slate-200`}> */}
      <body className={`${Font.className} bg-zinc-950 text-slate-200`}>
        <AuthProvider>
          <main className="container mx-auto py-10">
            <Navbar />
            {children}
          </main>
        </AuthProvider>
      </body>
    </html>
  );
}

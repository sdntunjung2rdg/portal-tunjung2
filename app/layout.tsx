import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

// CSS WAJIB
import "bootstrap/dist/css/bootstrap.min.css";
import "admin-lte/dist/css/adminlte.min.css";

import "./globals.css";

// Client loader AdminLTE
import AdminLTEProvider from "./components/AdminLTEProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portal Sekolah",
  description: "Admin Panel",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body
        className={`
          hold-transition
          sidebar-mini
          layout-fixed
          ${geistSans.variable}
          ${geistMono.variable}
          antialiased
        `}
      >
        {/* WAJIB: AdminLTE JS di Client Component */}
        <AdminLTEProvider>
          {children}
        </AdminLTEProvider>
      </body>
    </html>
  );
}

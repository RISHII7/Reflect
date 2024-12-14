import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Reflect",
  description: "Your very own private journal",
  icons: {
    icon: "/logo.png"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}`}
      >
        <div className="bg-[url('/bg.jpg')] opacity-50 fixed -z-10 inset-0" />
        {/* header */}
        <main className="min-h-screen">{children}</main>
        <footer className="bg-orange-300 py-12 bg-opacity-10">
          <div className="mx-auto px-4 text-center text-gray-900">
            <p>Made by RISHII</p>
          </div>
        </footer>
      </body>
    </html>
  );
}

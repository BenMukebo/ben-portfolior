import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider"

import { Header } from "@/components/layout/header/Header";
import { Footer } from "@/components/layout/footer/Footer";
import { Toaster } from "@/components/ui/toaster"

import { Themes } from "@/enums/shared.enum";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ben Mukebo",
  description: "I am here to help bring your digital ideas to life with a passion for turning concepts into impactful digital experiences. Whether it's building product features or creating dynamic websites, I'm here to make it happen.",
  icons: ['favicon.ico', 'favicon.svg', 'favicon-16x16.png', 'favicon-32x32.png'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme={Themes.Dark}
          // enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col h-full">
            <Header />
            <main className="flex-1 pt-72 overflow-x-hidden">
              {children}
            </main>
            <Footer />
            <Toaster />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
// min-h-screen

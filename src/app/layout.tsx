import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider"

import { Header } from "@/components/layout/header/Header";
import { Footer } from "@/components/layout/footer/Footer";
import { Toaster } from "@/components/ui/toaster"

import { Themes } from "@/enums/shared.enum";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Ben Mukebo | Full-Stack Developer",
    template: "%s | Ben Mukebo",
  },
  description: "Full-Stack Developer with a strong affinity for mobile-friendly, responsive design and remote work. With over 4 years of industry experience.",
  twitter: {
    card: "summary_large_image",
    site: "@benmukebo",
    creator: "@benmukebo",
  },

  icons: ['favicon.ico', 'favicon.svg', 'favicon-16x16.png', 'favicon-32x32.png'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google tag (gtag.js) */}
        <Script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}></Script>
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
          `}
        </Script>
      </head>
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
    </html >
  );
}
// min-h-screen

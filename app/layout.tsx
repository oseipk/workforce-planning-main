import type React from "react"
import type { Metadata } from "next"
// import { Inter } from "next/font/google" // ⛔️ Temporarily disabled
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { AppSidebar } from "@/components/layout/app-sidebar"
import { AppHeader } from "@/components/layout/app-header"
import { Toaster } from "@/components/ui/toaster"
import {Chatbot} from "@/components/chatbot"
import { EnvironmentalProvider } from "@/context/EnvironmentalContext"
import { FAQProvider } from "@/context/FAQContext"
import { WorkforceProvider } from "@/components/supply-gap-analysis/workforce-context"

// const inter = Inter({ subsets: ["latin"] }) // ⛔️ Disabled

export const metadata: Metadata = {
  title: "Strategic Workforce Planning",
  description: "Proactive strategic planning aligned with business objectives.",
  generator: "Nestle",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body /* className={inter.className} */>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <EnvironmentalProvider>
            <FAQProvider>
              <WorkforceProvider>
              <div className="flex min-h-screen w-full flex-col bg-background">
                <AppSidebar />
                <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14 lg:pl-56">
                  <AppHeader />
                  <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                    {children}
                  </main>
                </div>
                <Chatbot />
                <Toaster />
              </div>
              </WorkforceProvider>
            </FAQProvider>
          </EnvironmentalProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

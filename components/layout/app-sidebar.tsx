"use client"

import Link from "next/link"
import { ClipboardList, GanttChart, HelpCircle, Home, LineChart, Settings, Users } from "lucide-react"
import { usePathname } from "next/navigation"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"
import { CompanyLogo } from "./company-logo"

const sidebarNavItems = [
  { href: "/dashboard", icon: Home, label: "Dashboard" },
  { href: "/strategic-foundation", icon: GanttChart, label: "Strategic Foundation" },
  { href: "/analytics-forecasting", icon: LineChart, label: "Analytics & Forecasting" },
  { href: "/supply-gap-analysis", icon: Users, label: "Supply & Gap Analysis" },
  { href: "/action-planning", icon: ClipboardList, label: "Action Planning" },
]

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-card sm:flex lg:w-56">
      <div className="flex h-14 items-center border-b px-4 lg:px-6">
        <Link href="/">
          <CompanyLogo />
          <span className="sr-only">Nestle People Analytics</span>
        </Link>
      </div>
      <nav className="flex flex-col items-center gap-2 px-2 py-4 lg:items-stretch lg:px-4">
        <TooltipProvider>
          {sidebarNavItems.map((item) => (
            <Tooltip key={item.href} delayDuration={0}>
              <TooltipTrigger asChild>
                <Link
                  href={item.href}
                  className={cn(
                    "flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8 lg:h-auto lg:w-auto lg:justify-start lg:p-2",
                    pathname.startsWith(item.href) && "bg-accent text-accent-foreground",
                  )}
                >
                  <item.icon className="h-5 w-5" />
                  <span className="sr-only lg:not-sr-only lg:ml-2">{item.label}</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" className="lg:hidden">
                {item.label}
              </TooltipContent>
            </Tooltip>
          ))}
        </TooltipProvider>
      </nav>
      <nav className="mt-auto flex flex-col items-center gap-2 px-2 py-4 lg:items-stretch lg:px-4">
        <TooltipProvider>
          <Tooltip delayDuration={0}>
            <TooltipTrigger asChild>
              <Link
                href="/faq"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8 lg:h-auto lg:w-auto lg:justify-start lg:p-2"
              >
                <HelpCircle className="h-5 w-5" />
                <span className="sr-only lg:not-sr-only lg:ml-2">FAQ</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right" className="lg:hidden">
              FAQ
            </TooltipContent>
          </Tooltip>
          <Tooltip delayDuration={0}>
            <TooltipTrigger asChild>
              <Link
                href="/settings"
                className={cn(
                  "flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8 lg:h-auto lg:w-auto lg:justify-start lg:p-2",
                  pathname.startsWith("/settings") && "bg-accent text-accent-foreground",
                )}
              >
                <Settings className="h-5 w-5" />
                <span className="sr-only lg:not-sr-only lg:ml-2">Settings</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right" className="lg:hidden">
              Settings
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </nav>
    </aside>
  )
}

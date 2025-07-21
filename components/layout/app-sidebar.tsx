"use client"

import Link from "next/link"
import {
  ClipboardList,
  GanttChart,
  HelpCircle,
  Home,
  LineChart,
  Settings,
  Users,
} from "lucide-react"
import { usePathname } from "next/navigation"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
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
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-white text-gray-800 sm:flex lg:w-56">
      <div className="flex h-14 items-center border-b border-gray-200 px-4 lg:px-6">
        <Link href="/">
          <CompanyLogo />
          <span className="sr-only">Nestle People Analytics</span>
        </Link>
      </div>

      <nav className="flex flex-col items-center gap-2 px-2 py-4 lg:items-stretch lg:px-4">
        <TooltipProvider>
          {sidebarNavItems.map((item) => {
            const isActive = pathname.startsWith(item.href)
            return (
              <Tooltip key={item.href} delayDuration={0}>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex h-9 w-9 items-center justify-center rounded-lg transition-colors duration-150 md:h-8 md:w-8 lg:h-auto lg:w-auto lg:justify-start lg:p-2",
                      isActive
                        ? "bg-[#a78bfa]/20 text-[#7c3aed] font-medium"
                        : "text-gray-500 hover:bg-gray-100 hover:text-gray-800"
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
            )
          })}
        </TooltipProvider>
      </nav>

      <nav className="mt-auto flex flex-col items-center gap-2 px-2 py-4 lg:items-stretch lg:px-4">
        <TooltipProvider>
          {[
            { href: "/faq", label: "FAQ", icon: HelpCircle },
            { href: "/settings", label: "Settings", icon: Settings },
          ].map((item) => {
            const isActive = pathname.startsWith(item.href)
            return (
              <Tooltip key={item.href} delayDuration={0}>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex h-9 w-9 items-center justify-center rounded-lg transition-colors duration-150 md:h-8 md:w-8 lg:h-auto lg:w-auto lg:justify-start lg:p-2",
                      isActive
                        ? "bg-[#a78bfa]/20 text-[#7c3aed] font-medium"
                        : "text-gray-500 hover:bg-gray-100 hover:text-gray-800"
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
            )
          })}
        </TooltipProvider>
      </nav>
    </aside>
  )
}

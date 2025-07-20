"use client"

import * as React from "react"
import { usePathname, useRouter } from "next/navigation"
import Link from "next/link"
import {
  Bell,
  ChevronRight,
  Menu,
  PanelLeft,
  Search,
  Settings,
  User,
  RefreshCcw,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Input } from "@/components/ui/input"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useToast } from "@/components/ui/use-toast"

export function AppHeader() {
  const pathname = usePathname()
  const [open, setOpen] = React.useState(false)
  const router = useRouter()
  const { toast } = useToast()

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const pathSegments = pathname.split("/").filter(Boolean)

  const handleRefresh = () => {
    toast({
      title: "Data Refreshing...",
      description: "Fetching the latest data from all sources.",
    })
    setTimeout(() => {
      toast({
        title: "Data Refreshed!",
        description: "All data is now up to date.",
      })
    }, 2000)
  }

  return (
    <header className="sticky top-0 z-30 flex flex-wrap sm:flex-nowrap h-auto sm:h-14 items-center gap-4 border-b bg-background px-4 py-2 sm:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline" className="sm:hidden bg-transparent">
            <PanelLeft className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="sm:max-w-xs">
          {/* Sidebar nav content if needed */}
        </SheetContent>
      </Sheet>

      <Breadcrumb className="hidden md:flex">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/dashboard">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          {pathSegments.map((segment, index) => (
            <React.Fragment key={segment}>
              <BreadcrumbSeparator>
                <ChevronRight className="h-4 w-4" />
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                {index === pathSegments.length - 1 ? (
                  <BreadcrumbPage className="capitalize">
                    {segment.replace(/-/g, " ")}
                  </BreadcrumbPage>
                ) : (
                  <BreadcrumbLink asChild>
                    <Link
                      href={`/${pathSegments.slice(0, index + 1).join("/")}`}
                      className="capitalize"
                    >
                      {segment.replace(/-/g, " ")}
                    </Link>
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </React.Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>

      {/* Title */}
      <div className="w-full text-xl font-semibold text-foreground sm:text-2xl md:ml-6">
        Strategic Workforce Planning & Skills Intelligence
      </div>

      <div className="relative ml-auto flex items-center gap-2 md:grow-0">
        <Button
          variant="ghost"
          size="icon"
          className="hidden sm:inline-flex"
          onClick={handleRefresh}
        >
          <RefreshCcw className="w-5 h-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <Search className="w-5 h-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <Bell className="w-5 h-5" />
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full">
              <User className="h-5 w-5" />
              <span className="sr-only">User Menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}

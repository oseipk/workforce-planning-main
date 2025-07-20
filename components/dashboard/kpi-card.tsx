import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

type KpiCardProps = {
  title: string
  metric: string
  change: string
  changeType: "positive" | "negative"
  icon: React.ReactNode
}

export function KpiCard({ title, metric, change, changeType, icon }: KpiCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{metric}</div>
        <p
          className={cn("text-xs text-muted-foreground", changeType === "positive" ? "text-swp-green" : "text-swp-red")}
        >
          {change} from last period
        </p>
      </CardContent>
    </Card>
  )
}

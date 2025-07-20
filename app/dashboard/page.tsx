"use client"

import { WorkforceProvider } from "@/components/supply-gap-analysis/workforce-context"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { KpiCard } from "@/components/dashboard/kpi-card"
import { TrendsChart } from "@/components/dashboard/trends-chart"
import { Activity, DollarSign, Users } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { alertsData, kpiData } from "@/lib/mock-data"
import { ScenarioComparison } from "@/components/dashboard/scenario-comparison"
import { RecentActivity } from "@/components/dashboard/recent-activity"
import { GlobalFilters } from "@/components/layout/global-filters"

export default function DashboardPage() {
  return (
    <WorkforceProvider>
      <div className="space-y-4">
        <GlobalFilters />
        <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
            <KpiCard {...kpiData.totalWorkforce} icon={<Users className="h-6 w-6 text-muted-foreground" />} />
            <KpiCard {...kpiData.hiringNeeds} icon={<Users className="h-6 w-6 text-muted-foreground" />} />
            <KpiCard {...kpiData.budget} icon={<DollarSign className="h-6 w-6 text-muted-foreground" />} />
            <KpiCard {...kpiData.gaps} icon={<Activity className="h-6 w-6 text-muted-foreground" />} />
          </div>
          <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
            <Card className="xl:col-span-2">
              <CardHeader>
                <CardTitle>Workforce Trends</CardTitle>
                <CardDescription>Historical and projected headcount across key functions.</CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <TrendsChart />
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="px-7">
                <CardTitle>Critical Alerts</CardTitle>
                <CardDescription>Urgent workforce gaps and risks requiring attention.</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Role</TableHead>
                      <TableHead className="hidden sm:table-cell">Risk</TableHead>
                      <TableHead className="text-right">Gap</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {alertsData.map((alert) => (
                      <TableRow key={alert.role}>
                        <TableCell>
                          <div className="font-medium">{alert.role}</div>
                          <div className="hidden text-sm text-muted-foreground md:inline">{alert.department}</div>
                        </TableCell>
                        <TableCell className="hidden sm:table-cell">
                          <Badge className="text-xs" variant={alert.risk === "High" ? "destructive" : "warning"}>
                            {alert.risk}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">{alert.gap}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
            <ScenarioComparison />
            <RecentActivity />
          </div>
        </div>
      </div>
    </WorkforceProvider>
  )
}

"use client"

import { useState, useMemo } from "react"
import {
  generateDemandForecast,
  generateSupplyForecast,
  getForecastYears,
} from "@/lib/statistical-models"
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip as RechartsTooltip,
  XAxis,
  YAxis,
} from "recharts"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Info } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { useWorkforce } from "@/components/supply-gap-analysis/workforce-context"
import { cn } from "@/lib/utils"

const scenarios = {
  baseline: { revenue: 5, customers: 10, production: 8 },
  growth: { revenue: 15, customers: 20, production: 12 },
  recession: { revenue: -2, customers: 2, production: -5 },
}

type GapAnalysisDashboardProps = {
  onScenarioChange: (scenario: string) => void
}

export function GapAnalysisDashboard({
  onScenarioChange,
}: GapAnalysisDashboardProps) {
  const [activeScenario, setActiveScenario] =
    useState<keyof typeof scenarios>("baseline")

  const {
    attritionRate,
    retirementEligibility,
    internalMobility,
  } = useWorkforce()

  const forecastYears = useMemo(() => getForecastYears(), [])

  const chartData = useMemo(() => {
    const demand = generateDemandForecast(scenarios[activeScenario])
    const supply = generateSupplyForecast(
      attritionRate,
      retirementEligibility,
      internalMobility
    )

    return forecastYears.map((year, i) => ({
      year,
      Demand: demand[i],
      Supply: supply[i],
      Gap: demand[i] - supply[i],
    }))
  }, [
    activeScenario,
    forecastYears,
    attritionRate,
    retirementEligibility,
    internalMobility,
  ])

  const handleTabChange = (value: string) => {
    const scenarioKey = value as keyof typeof scenarios
    setActiveScenario(scenarioKey)
    onScenarioChange(scenarioKey)
  }

  const tabConfig = [
    {
      key: "baseline",
      label: "Baseline",
      tooltip: (
        <>
          <p><strong>Scenario:</strong> Steady state market and demand growth.</p>
          <p><strong>Assumptions:</strong></p>
          <ul className="ml-4 list-disc">
            <li>Revenue Growth: 5%</li>
            <li>Customer Growth: 10%</li>
            <li>Production Growth: 8%</li>
          </ul>
        </>
      ),
    },
    {
      key: "growth",
      label: "Aggressive Growth",
      tooltip: (
        <>
          <p><strong>Scenario:</strong> High growth projection due to expansion.</p>
          <p><strong>Assumptions:</strong></p>
          <ul className="ml-4 list-disc">
            <li>Revenue Growth: 15%</li>
            <li>Customer Growth: 20%</li>
            <li>Production Growth: 12%</li>
          </ul>
        </>
      ),
    },
    {
      key: "recession",
      label: "Recession",
      tooltip: (
        <>
          <p><strong>Scenario:</strong> Economic downturn with reduced activity.</p>
          <p><strong>Assumptions:</strong></p>
          <ul className="ml-4 list-disc">
            <li>Revenue Growth: -2%</li>
            <li>Customer Growth: 2%</li>
            <li>Production Growth: -5%</li>
          </ul>
        </>
      ),
    },
  ]

  return (
    <TooltipProvider>
      <Card>
        <CardHeader>
          <CardTitle>Multi-Scenario Gap Analysis</CardTitle>
        </CardHeader>

        <CardContent>
          <Tabs
            defaultValue="baseline"
            onValueChange={handleTabChange}
          >
            <TabsList className="grid w-full grid-cols-3">
              {tabConfig.map((tab) => (
                <div key={tab.key} className="flex items-center justify-center gap-1">
                  <TabsTrigger
                    value={tab.key}
                    className={cn("flex items-center gap-1", {
                      "text-primary": activeScenario === tab.key,
                    })}
                  >
                    {tab.label}
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Info className="w-4 h-4 text-muted-foreground cursor-pointer" />
                      </TooltipTrigger>
                      <TooltipContent className="max-w-sm text-sm text-muted-foreground">
                        {tab.tooltip}
                      </TooltipContent>
                    </Tooltip>
                  </TabsTrigger>
                </div>
              ))}
            </TabsList>
          </Tabs>

          <div className="mt-6">
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="year" />
                <YAxis />
                <RechartsTooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    borderColor: "hsl(var(--border))",
                  }}
                />
                <Legend />
                <Bar dataKey="Demand" fill="#3b82f6" name="Demand" />
                <Bar dataKey="Supply" fill="#10b981" name="Supply" />
                <Bar dataKey="Gap" fill="#ef4444" name="Gap" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </TooltipProvider>
  )
}

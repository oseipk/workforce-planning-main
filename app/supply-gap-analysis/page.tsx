"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { InternalSupply } from "@/components/supply-gap-analysis/internal-supply"
import { GapAnalysisDashboard } from "@/components/supply-gap-analysis/gap-analysis-dashboard"
import { FinancialImpact } from "@/components/supply-gap-analysis/financial-impact"
import { GlobalFilters } from "@/components/layout/global-filters"
import { BaseSupplyDemandChart } from "@/components/supply-gap-analysis/base-supply-demand-chart"

export default function SupplyGapAnalysisPage() {
  const [activeScenario, setActiveScenario] = useState("baseline")

  return (
    <div className="flex-1 space-y-4">
      <GlobalFilters />
      <h1 className="text-3xl font-bold tracking-tight">Supply & Gap Analysis</h1>
      <p className="text-muted-foreground">
        Forecast internal talent supply and compare it against demand to identify critical workforce gaps.
      </p>
      <Tabs defaultValue="gap-analysis" className="space-y-4">
        <TabsList>
          <TabsTrigger value="gap-analysis">Gap Analysis</TabsTrigger>
          <TabsTrigger value="financial-impact">Financial & Risk Impact</TabsTrigger>
          <TabsTrigger value="skills-inventory">Skills Inventory</TabsTrigger>
        </TabsList>
        <TabsContent value="gap-analysis">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="md:col-span-1">
              <InternalSupply />
            </div>
            <div className="md:col-span-2">
              <GapAnalysisDashboard onScenarioChange={setActiveScenario} />
            </div>
          </div>
          <div className="mt-4">
            <BaseSupplyDemandChart activeScenario={activeScenario} />
          </div>
        </TabsContent>
        <TabsContent value="financial-impact">
          <FinancialImpact />
        </TabsContent>
        <TabsContent value="skills-inventory">
          <p className="text-muted-foreground">Skills inventory and mobility pathing will be visualized here.</p>
        </TabsContent>
      </Tabs>
    </div>
  )
}

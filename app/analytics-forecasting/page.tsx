import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DriverAnalysis } from "@/components/analytics-forecasting/driver-analysis"
import { ScenarioPlanner } from "@/components/analytics-forecasting/scenario-planner"

export default function AnalyticsForecastingPage() {
  return (
    <div className="flex-1 space-y-4">
      <h1 className="text-3xl font-bold tracking-tight">Analytics & Forecasting</h1>
      <p className="text-muted-foreground">
        Analyze business drivers, model future scenarios, and forecast workforce demand.
      </p>
      <Tabs defaultValue="planner" className="space-y-4">
        <TabsList>
          <TabsTrigger value="planner">Scenario Planner & Demand Forecasting</TabsTrigger>
          <TabsTrigger value="analysis">Driver Analysis & Elasticity</TabsTrigger>
        </TabsList>
        <TabsContent value="planner" className="space-y-4">
          <ScenarioPlanner />
        </TabsContent>
        <TabsContent value="analysis" className="space-y-4">
          <DriverAnalysis />
        </TabsContent>
      </Tabs>
    </div>
  )
}

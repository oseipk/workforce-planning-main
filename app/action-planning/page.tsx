import { Recommendations } from "@/components/action-planning/recommendations"
import { ActionPlanTracker } from "@/components/action-planning/action-plan-tracker"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RecruitmentPlan } from "@/components/action-planning/recruitment-plan"
import { DevelopmentPlan } from "@/components/action-planning/development-plan"

export default function ActionPlanningPage() {
  return (
    <div className="flex-1 space-y-4">
      <h1 className="text-3xl font-bold tracking-tight">Action Planning</h1>
      <p className="text-muted-foreground">
        Turn insights into action. Get recommendations to close workforce gaps and track your strategic initiatives.
      </p>
      <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-3">
        <div className="lg:col-span-1">
          <Recommendations />
        </div>
        <div className="lg:col-span-2">
          <ActionPlanTracker />
        </div>
      </div>
      <Tabs defaultValue="recruitment" className="space-y-4">
        <TabsList>
          <TabsTrigger value="recruitment">12-Month Recruitment Plan</TabsTrigger>
          <TabsTrigger value="development">12-Month Development Plan</TabsTrigger>
        </TabsList>
        <TabsContent value="recruitment">
          <RecruitmentPlan />
        </TabsContent>
        <TabsContent value="development">
          <DevelopmentPlan />
        </TabsContent>
      </Tabs>
    </div>
  )
}

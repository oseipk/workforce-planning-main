import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { OkrManagement } from "@/components/strategic-foundation/okr-management"
import { BusinessDrivers } from "@/components/strategic-foundation/business-drivers"
import  EnvironmentalScanning  from "@/components/strategic-foundation/environmental-scanning"

console.log("OkrManagement:", typeof OkrManagement)


export default function StrategicFoundationPage() {
  return (
    <div className="flex-1 space-y-4">
      <h1 className="text-3xl font-bold tracking-tight">Strategic Foundation</h1>
      <p className="text-muted-foreground">
        Define objectives, track business drivers, and scan the external environment to build a solid foundation for
        your workforce plan.
      </p>
      <Tabs defaultValue="okr" className="space-y-4">
        <TabsList>
          <TabsTrigger value="okr">OKR Management</TabsTrigger>
          <TabsTrigger value="drivers">Business Drivers</TabsTrigger>
          <TabsTrigger value="scanning">Environmental Scanning</TabsTrigger>
        </TabsList>
        <TabsContent value="okr" className="space-y-4">
          <OkrManagement />
        </TabsContent>
        <TabsContent value="drivers" className="space-y-4">
          <BusinessDrivers />
        </TabsContent>
        <TabsContent value="scanning" className="space-y-4">
          <EnvironmentalScanning />
        </TabsContent>
      </Tabs>
    </div>
  )
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DataSources } from "@/components/settings/data-sources"
import { UserManagement } from "@/components/settings/user-management"

export default function SettingsPage() {
  return (
    <div className="flex-1 space-y-4">
      <h1 className="text-3xl font-bold tracking-tight">Settings & Administration</h1>
      <p className="text-muted-foreground">Manage users, data sources, and application settings.</p>
      <Tabs defaultValue="users" className="space-y-4">
        <TabsList>
          <TabsTrigger value="users">User Management</TabsTrigger>
          <TabsTrigger value="datasources">Data Sources</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
        </TabsList>
        <TabsContent value="users">
          <UserManagement />
        </TabsContent>
        <TabsContent value="datasources">
          <DataSources />
        </TabsContent>
        <TabsContent value="notifications">
          <p className="text-muted-foreground">Notification settings will be configured here.</p>
        </TabsContent>
      </Tabs>
    </div>
  )
}

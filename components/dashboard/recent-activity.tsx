import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const activityData = [
  { user: "TS", action: "Updated the 'Aggressive Growth' scenario.", time: "2 hours ago" },
  { user: "NR", action: "Created a new action plan for 'AI/ML Engineer' gap.", time: "5 hours ago" },
  { user: "BB", action: "Completed analysis on driver elasticity.", time: "1 day ago" },
  { user: "System", action: "External labor market data has been updated.", time: "2 days ago" },
]

export function RecentActivity() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Latest updates and analyses across the platform.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {activityData.map((item, index) => (
          <div key={index} className="flex items-start gap-4">
            <Avatar>
              <AvatarFallback>{item.user}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">{item.action}</p>
              <p className="text-xs text-muted-foreground">{item.time}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

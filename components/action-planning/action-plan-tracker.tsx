import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { actionPlansData } from "@/lib/mock-data"
import { Button } from "../ui/button"
import { PlusCircle } from "lucide-react"

export function ActionPlanTracker() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Action Plan Tracker</CardTitle>
            <CardDescription>Monitor the progress of your workforce initiatives.</CardDescription>
          </div>
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            New Action Plan
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Initiative</TableHead>
              <TableHead>Strategy</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Progress</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {actionPlansData.map((plan) => (
              <TableRow key={plan.id}>
                <TableCell className="font-medium">{plan.title}</TableCell>
                <TableCell>
                  <Badge variant="outline">{plan.strategy}</Badge>
                </TableCell>
                <TableCell>{plan.status}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Progress value={plan.progress} className="w-24" />
                    <span>{plan.progress}%</span>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

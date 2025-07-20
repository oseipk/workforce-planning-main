import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "../ui/button"
import { PlusCircle } from "lucide-react"
import { dataSourcesData } from "@/lib/mock-data"

export function DataSources() {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Data Source Connections</CardTitle>
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Add Source
          </Button>
        </div>
        <CardDescription>Manage integrations with HRIS, ATS, and other systems.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Last Sync</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {dataSourcesData.map((source) => (
              <TableRow key={source.id}>
                <TableCell className="font-medium">{source.name}</TableCell>
                <TableCell>{source.type}</TableCell>
                <TableCell>
                  <Badge variant={source.status === "Connected" ? "default" : "destructive"}>{source.status}</Badge>
                </TableCell>
                <TableCell>{source.lastSync}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

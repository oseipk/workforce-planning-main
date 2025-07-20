"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { FileUp, PlusCircle } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"

type Driver = {
  name: string
  source: string
  frequency: string
  status: string
  historicalData?: Record<string, number> // Year -> Value
}

const initialDrivers: Driver[] = [
  { name: "Revenue Growth (%)", source: "Finance API", frequency: "Quarterly", status: "Active" },
  { name: "Customer Acquisition", source: "CRM", frequency: "Monthly", status: "Active" },
  { name: "Production Units", source: "ERP", frequency: "Weekly", status: "Active" },
  { name: "Market Expansion (New Countries)", source: "Manual Upload", frequency: "Annually", status: "Paused" },
]

export function BusinessDrivers() {
  const [drivers, setDrivers] = useState<Driver[]>(initialDrivers)
  const [newDriver, setNewDriver] = useState<Partial<Driver>>({})
  const [fileName, setFileName] = useState("")

  const currentYear = new Date().getFullYear()
  const expectedYears = [currentYear - 1, currentYear - 2, currentYear - 3, currentYear - 4]

  const handleAddDriver = () => {
    if (newDriver.name && newDriver.source && newDriver.frequency && newDriver.status) {
      setDrivers([...drivers, newDriver as Driver])
      setNewDriver({})
    }
  }

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setFileName(file.name)

    const text = await file.text()
    let parsed: any[] = []

    try {
      if (file.name.endsWith(".csv")) {
        parsed = text
          .split("\n")
          .map((line) => line.split(","))
          .slice(1)
          .map(([name, year, value]) => ({
            name: name.trim(),
            year: parseInt(year),
            value: parseFloat(value),
          }))
      } else if (file.name.endsWith(".json")) {
        parsed = JSON.parse(text)
      }

      const newDrivers = [...drivers]
      parsed.forEach((entry) => {
        const match = newDrivers.find((d) => d.name === entry.name)
        if (match && expectedYears.includes(entry.year)) {
          if (!match.historicalData) match.historicalData = {}
          match.historicalData[entry.year] = entry.value
        }
      })

      setDrivers(newDrivers)
    } catch (err) {
      console.error("Failed to parse file:", err)
    }
  }

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {/* Main Table */}
      <Card className="md:col-span-2">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Business Drivers</CardTitle>
              <CardDescription>Manage the key business metrics that influence workforce demand.</CardDescription>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button>
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Add Driver
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add New Driver</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-2">
                  <div className="grid gap-2">
                    <Label>Name</Label>
                    <Input
                      value={newDriver.name || ""}
                      onChange={(e) => setNewDriver({ ...newDriver, name: e.target.value })}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label>Source</Label>
                    <Input
                      value={newDriver.source || ""}
                      onChange={(e) => setNewDriver({ ...newDriver, source: e.target.value })}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label>Frequency</Label>
                    <Input
                      value={newDriver.frequency || ""}
                      onChange={(e) => setNewDriver({ ...newDriver, frequency: e.target.value })}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label>Status</Label>
                    <Input
                      value={newDriver.status || ""}
                      onChange={(e) => setNewDriver({ ...newDriver, status: e.target.value })}
                    />
                  </div>
                </div>
                <Button onClick={handleAddDriver}>Save Driver</Button>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Driver Name</TableHead>
                <TableHead>Data Source</TableHead>
                <TableHead>Frequency</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Historical Data</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {drivers.map((driver) => (
                <TableRow key={driver.name}>
                  <TableCell className="font-medium">{driver.name}</TableCell>
                  <TableCell>{driver.source}</TableCell>
                  <TableCell>{driver.frequency}</TableCell>
                  <TableCell>
                    <Badge variant={driver.status === "Active" ? "default" : "outline"}>{driver.status}</Badge>
                  </TableCell>
                  <TableCell>
                    {expectedYears.map((y) => (
                      <div key={y}>
                        {y}: {driver.historicalData?.[y] ?? "N/A"}
                      </div>
                    ))}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Upload Section */}
      <Card>
        <CardHeader>
          <CardTitle>Data Ingestion</CardTitle>
          <CardDescription>
            Upload historical data (last 4 years only) for your business drivers.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center space-y-4 border-2 border-dashed rounded-lg p-10">
          <FileUp className="h-12 w-12 text-muted-foreground" />
          <p className="text-center text-sm text-muted-foreground">Drag & drop files here or</p>
          <Input type="file" accept=".csv,.json" onChange={handleFileUpload} />
          <p className="text-xs text-muted-foreground">
            Supports CSV (name,year,value) or JSON [{`{ name, year, value }`}]
          </p>
          {fileName && <p className="text-sm text-muted-foreground">Uploaded: {fileName}</p>}
        </CardContent>
      </Card>
    </div>
  )
}

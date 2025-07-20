"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useFilterStore } from "@/store/filters"
import { filterOptions } from "@/lib/mock-data"

export function GlobalFilters() {
  const { setFilter } = useFilterStore()

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:flex lg:items-center gap-4 mb-4">
      <Select onValueChange={(value) => setFilter("zone", value)} defaultValue="all">
        <SelectTrigger>
          <SelectValue placeholder="Zone" />
        </SelectTrigger>
        <SelectContent>
          {filterOptions.zones.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select onValueChange={(value) => setFilter("market", value)} defaultValue="all">
        <SelectTrigger>
          <SelectValue placeholder="Markets" />
        </SelectTrigger>
        <SelectContent>
          {filterOptions.markets.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select onValueChange={(value) => setFilter("country", value)} defaultValue="all">
        <SelectTrigger>
          <SelectValue placeholder="Country" />
        </SelectTrigger>
        <SelectContent>
          {filterOptions.countries.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Select onValueChange={(value) => setFilter("func", value)} defaultValue="all">
        <SelectTrigger>
          <SelectValue placeholder="Function" />
        </SelectTrigger>
        <SelectContent>
          {filterOptions.functions.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      
      <Select onValueChange={(value) => setFilter("role", value)} defaultValue="all">
        <SelectTrigger>
          <SelectValue placeholder="Role" />
        </SelectTrigger>
        <SelectContent>
          {filterOptions.roles.map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

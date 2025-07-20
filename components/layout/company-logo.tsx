import { Layers3 } from "lucide-react"

export function CompanyLogo({ className }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 font-semibold ${className}`}>
      <div className="p-2 bg-primary/20 rounded-lg">
        <Layers3 className="h-6 w-6 text-primary" />
      </div>
      <span className="hidden lg:inline-block">Nestle People Analytics</span>
    </div>
  )
}

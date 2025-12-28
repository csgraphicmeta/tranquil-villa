import type { LucideIcon } from "lucide-react"

interface ExperienceCardProps {
  icon: LucideIcon
  title: string
  description: string
  image: string
}

export function ExperienceCard({ icon: Icon, title, description, image }: ExperienceCardProps) {
  return (
    <div className="group relative rounded-md overflow-hidden bg-card border border-border hover:border-primary transition-all duration-500">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <Icon className="text-primary" size={24} />
          <h3 className="text-xl font-serif text-primary">{title}</h3>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

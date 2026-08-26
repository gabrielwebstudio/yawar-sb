import { cn } from "@/lib/utils"

export default function SectionTitle({children, variant = "h2", className = ""}) {

  const variantClasses = {
    h1: "text-4xl md:text-5xl",
    h2: "text-3xl md:text-4xl",
  }
  return (
    <h2 className={cn("font-title font-semibold tracking-tight text-heading mb-6", variantClasses[variant], className)}>{children}</h2>
  )
}

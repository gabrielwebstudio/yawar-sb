import { cn } from "@/lib/utils"

export default function Section({children, className = ""}) {
  return (
    <section className={cn('py-24 border-border', className)}>
        <div className="container px-4 mx-auto">
            {children}
        </div>
    </section>
  )
}

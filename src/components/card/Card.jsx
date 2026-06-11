import { cn } from "@/lib/utils"

export default function Card({ variant, align, size, elevation, children, className }) {

  const alignClasses = {
    left: "items-start text-left",
    center: "items-center text-center",
    centerToLeft: "items-center text-center md:items-start md:text-left",
  }
  const variantClasses = {
    default: "border border-border bg-card",
    outline: "border border-border",
    ghost: "bg-transparent border-none",
    filled: "bg-card",
  }

  const sizeClasses = {
    sm: "p-3",
    md: "p-4",
    lg: "p-6",
    xl: "p-8",
  }

  const elevationClasses = {
    none: "",
    sm: "shadow-sm",
    md: "shadow-md",
  }

  return (
    <div className={cn("flex flex-col rounded-md relative",
      variantClasses[variant],
      alignClasses[align],
      sizeClasses[size],
      elevationClasses[elevation],
      className,
    )}>
      {children}
    </div>
  )
}


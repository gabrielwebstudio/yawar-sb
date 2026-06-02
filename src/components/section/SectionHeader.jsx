import { cn } from "@/lib/utils"

const variants = {
  start: {
    wrapper: "justify-center md:justify-start",
    inner: "items-center text-center md:items-start md:text-left",
  },
  center: {
    wrapper: "justify-center",
    inner: "items-center text-center",
  },
  end: {
    wrapper: "justify-center md:justify-end",
    inner: "items-center text-center md:items-end md:text-right",
  },
}

export default function SectionHeader({ children, variant = "start" }) {
  const currentVariant = variants[variant] || variants.start

  return (
    <div className={cn("flex mb-16", currentVariant.wrapper)}>
      <div className={cn("mb-12 flex max-w-xl flex-col", currentVariant.inner)}>
        {children}
      </div>
    </div>
  )
}
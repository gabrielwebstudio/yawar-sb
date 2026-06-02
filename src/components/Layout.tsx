import { ReactNode } from "react"

type LayoutProps = {
    children: ReactNode
}

export default function Layout({children} : LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col pt-20">
        {children}
    </div>
  )
}

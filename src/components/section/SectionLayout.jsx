import React from 'react'

export default function SectionLayout({children}) {
  return (
    <div className='grid md:grid-cols-2 gap-16 items-center'>
        {children}
    </div>
  )
}

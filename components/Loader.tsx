'use client'
import { useEffect, useState } from 'react'

export default function Loader() {
  const [hidden, setHidden] = useState(false)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setHidden(true), 600)
    const t2 = setTimeout(() => setVisible(false), 1200)
    return () => { clearTimeout(t); clearTimeout(t2) }
  }, [])

  if (!visible) return null

  return (
    <div
      className={`fixed inset-0 bg-[#0a1428] flex items-center justify-center z-[9999] transition-opacity duration-500 ${
        hidden ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="flex flex-col items-center gap-4">
        <span className="text-white text-4xl font-black tracking-[4px] loader-pulse">EJS</span>
        <div className="w-12 h-[2px] bg-white/30 rounded overflow-hidden">
          <div className="h-full bg-white rounded animate-[loading_1s_ease_infinite]" style={{ width: '60%' }} />
        </div>
      </div>
    </div>
  )
}

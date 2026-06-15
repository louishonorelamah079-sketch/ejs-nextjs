'use client'
import { useEffect, useRef } from 'react'

const STATS = [
  { target: 33, suffix: '+', label: "Années d'excellence" },
  { target: 18, suffix: '', label: 'Chefs de projets' },
  { target: 150, suffix: '+', label: 'Missions réalisées' },
]

export default function Hero() {
  const statsRef = useRef<HTMLDivElement>(null)
  const counted = useRef(false)

  useEffect(() => {
    const revealEls = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.1 }
    )
    revealEls.forEach((el) => observer.observe(el))

    const counterObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting && !counted.current) {
          counted.current = true
          document.querySelectorAll<HTMLElement>('[data-target]').forEach((el) => {
            const target = Number(el.dataset.target)
            const suffix = el.dataset.suffix || ''
            const step = target / (1800 / 16)
            let current = 0
            const timer = setInterval(() => {
              current += step
              if (current >= target) { current = target; clearInterval(timer) }
              el.textContent = Math.floor(current) + suffix
            }, 16)
          })
        }
      },
      { threshold: 0.5 }
    )
    if (statsRef.current) counterObserver.observe(statsRef.current)

    return () => { observer.disconnect(); counterObserver.disconnect() }
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Dark background with gradient */}
      <div className="absolute inset-0 bg-[#0a1428]" />
      <div className="absolute inset-0 hero-overlay" />

      {/* Subtle geometric decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] opacity-10">
        <div className="absolute top-20 right-20 w-72 h-72 border border-white/20 rounded-full" />
        <div className="absolute top-40 right-10 w-96 h-96 border border-white/10 rounded-full" />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-5 md:px-10 w-full py-32">
        <div className="max-w-[680px]">
          <div className="reveal">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 px-5 py-2 rounded-full text-[12px] font-semibold mb-8 tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-[#3b82c4] animate-pulse" />
              Junior-Entreprise de l&apos;ENSEA — Abidjan
            </div>
          </div>

          <h1 className="reveal delay-1 text-[36px] md:text-[56px] lg:text-[64px] font-black leading-[1.05] text-white mb-8 tracking-tight">
            La Junior-Entreprise<br />
            de la <span className="text-[#5b9bd5]">1<sup className="text-[0.6em]">ère</sup> école<br />
            de statistique</span><br />
            d&apos;Afrique
          </h1>

          <p className="reveal delay-2 text-[16px] md:text-[18px] leading-[1.8] text-white/60 mb-10 max-w-[520px]">
            Depuis 1992, nos étudiants-consultants transforment vos données
            en décisions stratégiques. Statistique, data science, économétrie.
          </p>

          <div className="reveal delay-3 flex gap-4 flex-wrap">
            <a
              href="#contact"
              className="px-8 py-4 bg-white text-[#0a1428] rounded-lg font-bold text-[15px] hover:-translate-y-0.5 hover:shadow-2xl transition-all"
            >
              Demander un devis
            </a>
            <a
              href="#services"
              className="px-8 py-4 bg-transparent text-white border border-white/30 rounded-lg font-semibold text-[15px] hover:bg-white/10 transition-all"
            >
              Nos prestations
            </a>
          </div>
        </div>

        {/* Stats bar */}
        <div ref={statsRef} className="reveal delay-4 mt-20 flex gap-12 md:gap-20 flex-wrap">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <div
                className="text-[42px] md:text-[52px] font-black text-white"
                data-target={stat.target}
                data-suffix={stat.suffix}
              >
                0{stat.suffix}
              </div>
              <div className="text-[13px] text-white/40 font-medium mt-1 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

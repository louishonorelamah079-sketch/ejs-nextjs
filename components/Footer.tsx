'use client'
import { useEffect, useState } from 'react'

export default function Footer() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <footer className="bg-[#060e1a] px-5 md:px-10 pt-16 pb-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="text-[22px] font-black text-white mb-4">
                EJS <span className="text-[#5b9bd5] font-medium">| ENSEA</span>
              </div>
              <p className="text-[13px] leading-[1.8] text-white/40">
                Junior-Entreprise de l&apos;ENSEA. 33 ans d&apos;excellence statistique au service
                des entreprises et institutions.
              </p>
              <div className="flex gap-3 mt-6">
                <a href="#" className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="LinkedIn">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="Twitter">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white text-[13px] font-bold uppercase tracking-wider mb-5">Navigation</h4>
              {[
                ['Accueil', '#'],
                ['À propos', '#about'],
                ['Prestations', '#services'],
                ['Méthodologie', '#approach'],
                ['Contact', '#contact'],
              ].map(([label, href]) => (
                <a key={label} href={href} className="block text-white/40 text-[13px] mb-3 hover:text-white transition-colors no-underline">
                  {label}
                </a>
              ))}
            </div>

            <div>
              <h4 className="text-white text-[13px] font-bold uppercase tracking-wider mb-5">Expertises</h4>
              {['Statistique', 'Informatique', 'Économétrie', 'Data Science', 'Études de marché'].map((e) => (
                <a key={e} href="#services" className="block text-white/40 text-[13px] mb-3 hover:text-white transition-colors no-underline">
                  {e}
                </a>
              ))}
            </div>

            <div>
              <h4 className="text-white text-[13px] font-bold uppercase tracking-wider mb-5">Contact</h4>
              <div className="space-y-3">
                <a href="tel:+2250777451375" className="block text-white/40 text-[13px] hover:text-white transition-colors no-underline">
                  +225 07 77 45 13 75
                </a>
                <a href="mailto:contact@ejservices.ci" className="block text-white/40 text-[13px] hover:text-white transition-colors no-underline">
                  contact@ejservices.ci
                </a>
                <span className="block text-white/40 text-[13px]">ENSEA, Abidjan</span>
                <span className="block text-white/40 text-[13px]">Côte d&apos;Ivoire</span>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <span className="text-[12px] text-white/30">
              © {new Date().getFullYear()} ENSEA Junior Services (EJS) — Tous droits réservés.
            </span>
            <div className="flex gap-6">
              <a href="#" className="text-[12px] text-white/30 hover:text-white/60 transition-colors no-underline">Mentions légales</a>
              <a href="#" className="text-[12px] text-white/30 hover:text-white/60 transition-colors no-underline">Politique de confidentialité</a>
            </div>
          </div>
        </div>
      </footer>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-8 right-8 w-11 h-11 bg-[#0a1428] text-white rounded-lg text-[18px] border border-white/10 cursor-pointer shadow-lg hover:bg-[#3b82c4] hover:border-[#3b82c4] transition-all z-50 ${
          showTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5 pointer-events-none'
        }`}
        aria-label="Retour en haut"
      >
        ↑
      </button>
    </>
  )
}

'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

const NAV_LINKS = [
  { label: 'Accueil', href: '#' },
  {
    label: 'Nos prestations',
    href: '#services',
    dropdown: [
      { label: 'Informatique & Statistique', href: '#services-info' },
      { label: 'Marketing & Études', href: '#services-mkt' },
    ],
  },
  { label: 'Notre expertise', href: '#approach' },
  {
    label: 'À propos',
    href: '#about',
    dropdown: [
      { label: 'Qui sommes-nous', href: '#about' },
      { label: 'Témoignages', href: '#testimonials' },
    ],
  },
  { label: 'Publications', href: '#blog' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMobileOpen(false)

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white shadow-md py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 flex justify-between items-center">
          <Link href="/" className="text-[22px] font-black no-underline">
            <span className={scrolled ? 'text-[#0a1428]' : 'text-white'}>EJS</span>
            <span className={`font-medium ${scrolled ? 'text-[#3b82c4]' : 'text-white/70'}`}> | ENSEA</span>
          </Link>

          <ul className="hidden lg:flex gap-8 list-none items-center">
            {NAV_LINKS.map((link) =>
              link.dropdown ? (
                <li key={link.label} className="relative group">
                  <a
                    href={link.href}
                    className={`text-[14px] font-medium transition-colors flex items-center gap-1 ${
                      scrolled ? 'text-gray-600 hover:text-[#0a1428]' : 'text-white/80 hover:text-white'
                    }`}
                  >
                    {link.label}
                    <svg className="w-3 h-3 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 12 12" stroke="currentColor" strokeWidth="2">
                      <path d="M3 5l3 3 3-3" />
                    </svg>
                  </a>
                  <div className="hidden group-hover:block absolute top-[calc(100%+8px)] left-[-16px] bg-white min-w-[240px] rounded-lg shadow-2xl py-2 border border-gray-100 dropdown-enter z-50">
                    {link.dropdown.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="block px-5 py-3 text-[13px] text-gray-600 hover:bg-gray-50 hover:text-[#0a1428] transition-colors font-medium"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </li>
              ) : (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className={`text-[14px] font-medium transition-colors ${
                      scrolled ? 'text-gray-600 hover:text-[#0a1428]' : 'text-white/80 hover:text-white'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              )
            )}
            <li>
              <a
                href="#contact"
                className={`px-6 py-2.5 rounded-lg text-[13px] font-semibold transition-all hover:-translate-y-px ${
                  scrolled
                    ? 'bg-[#0a1428] text-white hover:bg-[#162a4a]'
                    : 'bg-white text-[#0a1428] hover:bg-white/90'
                }`}
              >
                Demander un devis
              </a>
            </li>
          </ul>

          <button
            className="lg:hidden flex flex-col gap-[5px] bg-transparent border-none cursor-pointer p-2"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Menu"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={`block w-[22px] h-0.5 rounded transition-all ${scrolled ? 'bg-[#0a1428]' : 'bg-white'} ${
                  mobileOpen && i === 0 ? 'rotate-45 translate-y-[7px]' : ''
                } ${mobileOpen && i === 1 ? 'opacity-0' : ''} ${
                  mobileOpen && i === 2 ? '-rotate-45 -translate-y-[7px]' : ''
                }`}
              />
            ))}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed top-14 left-0 right-0 bottom-0 bg-white z-40 flex flex-col overflow-y-auto px-6 py-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={closeMenu}
              className="block py-4 text-[16px] font-medium text-gray-700 border-b border-gray-100 no-underline"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={closeMenu}
            className="mt-6 bg-[#0a1428] text-white text-center py-3.5 rounded-lg font-semibold text-[15px]"
          >
            Demander un devis
          </a>
        </div>
      )}
    </>
  )
}

const BADGES = [
  { num: '1992', label: 'Création' },
  { num: 'Abidjan', label: 'Siège' },
  { num: '400+', label: 'Membres' },
]

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-5 md:px-10 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Visual */}
          <div className="reveal relative">
            <div className="bg-[#0a1428] rounded-2xl aspect-[4/3] flex items-center justify-center overflow-hidden">
              <div className="text-center">
                <span className="block text-[100px] md:text-[140px] font-black text-white/5 leading-none select-none">EJS</span>
                <span className="block text-white/20 text-sm font-semibold tracking-[6px] uppercase mt-2">Depuis 1992</span>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#3b82c4] text-white px-8 py-5 rounded-xl shadow-xl">
              <div className="text-3xl font-black">33+</div>
              <div className="text-xs font-medium text-white/80 mt-0.5">ans d&apos;expérience</div>
            </div>
          </div>

          {/* Content */}
          <div className="reveal delay-2">
            <span className="text-[#3b82c4] text-[13px] font-bold uppercase tracking-[3px]">
              Qui sommes-nous
            </span>
            <h2 className="text-[30px] md:text-[42px] font-black text-[#0a1428] mt-4 mb-6 leading-tight tracking-tight">
              La Junior-Entreprise<br />de l&apos;ENSEA
            </h2>
            <p className="text-[16px] leading-[1.85] text-gray-500 mb-4">
              L&apos;ENSEA Junior Services (EJS), née en <strong className="text-gray-700">1992</strong>, est la Junior-Entreprise
              des étudiants de l&apos;ENSEA. Nous transformons les données en outils d&apos;impact
              pour les entreprises et institutions.
            </p>
            <p className="text-[16px] leading-[1.85] text-gray-500 mb-4">
              Basés à <strong className="text-gray-700">Abidjan</strong>, nous mobilisons des étudiants experts pour offrir
              des solutions sur mesure en <strong className="text-gray-700">statistique, informatique et économétrie</strong>.
            </p>
            <p className="text-[16px] leading-[1.85] text-gray-500 mb-10">
              Notre mission : former des statisticiens opérationnels et accompagner
              entreprises et institutions vers la réussite.
            </p>

            <div className="flex gap-4 flex-wrap">
              {BADGES.map((b) => (
                <div
                  key={b.label}
                  className="flex-1 min-w-[100px] text-center py-5 px-3 border border-gray-200 rounded-xl hover:border-[#3b82c4]/30 transition-colors"
                >
                  <div className="text-[22px] font-black text-[#0a1428]">{b.num}</div>
                  <div className="text-[11px] text-gray-400 mt-1 uppercase tracking-wider font-semibold">{b.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

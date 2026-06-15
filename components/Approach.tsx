const STEPS = [
  {
    num: '01',
    title: 'Prise de contact',
    desc: 'Analyse de votre besoin, de vos enjeux et de vos objectifs.',
  },
  {
    num: '02',
    title: "Recherche d'intervenants",
    desc: 'Sélection des consultants experts pour votre projet.',
  },
  {
    num: '03',
    title: "Proposition d'intervention",
    desc: 'Offre sur mesure avec budget, planning et méthodologie.',
  },
  {
    num: '04',
    title: "Suivi régulier de l'étude",
    desc: "Nos chefs de projet assurent un suivi rigoureux de l'avancement.",
  },
  {
    num: '05',
    title: 'Remise des livrables',
    desc: 'Livraison finale et accompagnement pour votre satisfaction.',
  },
]

export default function Approach() {
  return (
    <section id="approach" className="py-24 md:py-32 px-5 md:px-10 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center reveal mb-20">
          <span className="text-[#3b82c4] text-[13px] font-bold uppercase tracking-[3px]">
            Notre méthodologie
          </span>
          <h2 className="text-[30px] md:text-[42px] font-black text-[#0a1428] mt-4 mb-5 tracking-tight">
            Un processus éprouvé
          </h2>
          <p className="text-[16px] text-gray-500 leading-relaxed max-w-[540px] mx-auto">
            5 étapes claires pour garantir la réussite de chaque mission.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {STEPS.map((step, i) => (
            <div key={step.num} className={`reveal delay-${i + 1} relative text-center group`}>
              {/* Connector line */}
              {i < STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-[60%] right-[-40%] h-px bg-gray-200 z-0" />
              )}

              <div className="relative z-10 w-12 h-12 rounded-full bg-[#0a1428] text-white flex items-center justify-center text-[14px] font-bold mx-auto mb-5 group-hover:bg-[#3b82c4] transition-colors duration-300">
                {step.num}
              </div>
              <h3 className="text-[15px] font-bold text-[#0a1428] mb-2">{step.title}</h3>
              <p className="text-[13px] text-gray-400 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

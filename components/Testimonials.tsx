const TESTIMONIALS = [
  {
    text: "EJS a réalisé une étude de marché d'une qualité remarquable. Rigueur, professionnalisme et respect des délais. Je recommande vivement.",
    initial: 'A',
    name: 'Amadou K.',
    role: 'Directeur Marketing',
  },
  {
    text: "L'automatisation de nos tableaux Excel par l'équipe EJS nous a fait gagner un temps considérable. Un travail précis et bien documenté.",
    initial: 'M',
    name: 'Marie-Claire D.',
    role: 'Responsable Data',
  },
  {
    text: "Nous avons confié à EJS la conception de notre base de données. Le résultat dépasse nos attentes. Des étudiants compétents et engagés.",
    initial: 'J',
    name: 'Jean-Paul M.',
    role: 'Chef de projet IT',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 px-5 md:px-10 bg-[#0a1428]">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center reveal mb-16">
          <span className="text-[#5b9bd5] text-[13px] font-bold uppercase tracking-[3px]">
            Témoignages
          </span>
          <h2 className="text-[30px] md:text-[42px] font-black text-white mt-4 mb-5 tracking-tight">
            Ils nous font confiance
          </h2>
          <p className="text-[16px] text-white/50 leading-relaxed max-w-[540px] mx-auto">
            Retours d&apos;expérience de nos clients et partenaires.
          </p>
        </div>

        <div className="reveal grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-white/20 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex gap-1 text-[#5b9bd5] mb-5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-[15px] leading-[1.8] text-white/70 mb-6">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-3 pt-5 border-t border-white/10">
                <div className="w-10 h-10 rounded-full bg-[#3b82c4] flex items-center justify-center text-white font-bold text-[14px]">
                  {t.initial}
                </div>
                <div>
                  <div className="text-[14px] font-semibold text-white">{t.name}</div>
                  <div className="text-[12px] text-white/40">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

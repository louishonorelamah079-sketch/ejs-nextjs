const PARTNERS = [
  'ENSEA', 'INS', 'BAD', 'Banque Mondiale', 'PNUD', 'OMS', 'UNICEF', 'AFD',
]

export default function TrustBar() {
  const doubled = [...PARTNERS, ...PARTNERS]
  return (
    <div className="py-8 bg-white border-b border-gray-100 overflow-hidden">
      <p className="text-center text-[11px] font-semibold text-gray-400 uppercase tracking-[3px] mb-6">
        Ils nous font confiance
      </p>
      <div className="flex items-center gap-16 trust-animate">
        {doubled.map((item, i) => (
          <span key={i} className="text-[15px] font-bold text-gray-300 tracking-widest uppercase whitespace-nowrap select-none">
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

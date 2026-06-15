'use client'
import { useState, useRef, FormEvent } from 'react'
import emailjs from '@emailjs/browser'

type FormState = { name: string; email: string; phone: string; subject: string; message: string }
type Status = 'idle' | 'sending' | 'success' | 'error'

const INITIAL: FormState = { name: '', email: '', phone: '', subject: '', message: '' }

export default function CTA() {
  const [form, setForm] = useState<FormState>(INITIAL)
  const [status, setStatus] = useState<Status>('idle')
  const formRef = useRef<HTMLFormElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current!,
        { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! }
      )
      setStatus('success')
      setForm(INITIAL)
    } catch {
      setStatus('error')
    }
  }

  const inputBase = 'w-full px-4 py-3.5 rounded-lg bg-gray-50 border border-gray-200 text-gray-800 text-[14px] placeholder-gray-400 focus:outline-none focus:border-[#3b82c4] focus:ring-1 focus:ring-[#3b82c4]/20 transition-all'

  return (
    <section id="contact" className="py-24 md:py-32 px-5 md:px-10 bg-white">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left */}
          <div className="reveal">
            <span className="text-[#3b82c4] text-[13px] font-bold uppercase tracking-[3px]">
              Contact
            </span>
            <h2 className="text-[30px] md:text-[42px] font-black text-[#0a1428] mt-4 mb-6 tracking-tight">
              Un projet ?<br />Parlons-en.
            </h2>
            <p className="text-[16px] text-gray-500 leading-[1.85] mb-10">
              Confiez-nous votre besoin et recevez une offre personnalisée sous 48h.
              Notre équipe est à votre écoute.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#0a1428]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[13px] text-gray-400 font-medium">Téléphone</div>
                  <div className="text-[15px] font-semibold text-[#0a1428]">+225 07 77 45 13 75</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#0a1428]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <div className="text-[13px] text-gray-400 font-medium">Email</div>
                  <div className="text-[15px] font-semibold text-[#0a1428]">contact@ejservices.ci</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#0a1428]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[13px] text-gray-400 font-medium">Adresse</div>
                  <div className="text-[15px] font-semibold text-[#0a1428]">ENSEA, Abidjan — Côte d&apos;Ivoire</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="reveal delay-2">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="bg-gray-50 rounded-2xl p-8 md:p-10 border border-gray-100"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-[12px] font-semibold text-gray-500 uppercase tracking-wider mb-2">Nom complet *</label>
                  <input name="name" value={form.name} onChange={handleChange} required placeholder="Votre nom" className={inputBase} />
                </div>
                <div>
                  <label className="block text-[12px] font-semibold text-gray-500 uppercase tracking-wider mb-2">Email *</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="votre@email.com" className={inputBase} />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-[12px] font-semibold text-gray-500 uppercase tracking-wider mb-2">Téléphone</label>
                  <input name="phone" value={form.phone} onChange={handleChange} placeholder="+225 XX XX XX XX" className={inputBase} />
                </div>
                <div>
                  <label className="block text-[12px] font-semibold text-gray-500 uppercase tracking-wider mb-2">Prestation *</label>
                  <select name="subject" value={form.subject} onChange={handleChange} required className={`${inputBase} appearance-none`}>
                    <option value="" disabled>Choisir...</option>
                    <option value="statistique">Traitement statistique</option>
                    <option value="enquete">Enquête & Collecte</option>
                    <option value="automatisation">Automatisation</option>
                    <option value="marche">Étude de marché</option>
                    <option value="dashboard">Tableaux de bord</option>
                    <option value="bdd">Base de données</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-[12px] font-semibold text-gray-500 uppercase tracking-wider mb-2">Message *</label>
                <textarea
                  name="message" value={form.message} onChange={handleChange} required rows={4}
                  placeholder="Décrivez votre projet, vos besoins et vos délais..."
                  className={`${inputBase} resize-none`}
                />
              </div>

              {status === 'success' && (
                <div className="mb-5 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm text-center">
                  Message envoyé avec succès ! Nous vous répondrons sous 48h.
                </div>
              )}
              {status === 'error' && (
                <div className="mb-5 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm text-center">
                  Erreur lors de l&apos;envoi. Contactez-nous directement par téléphone.
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-4 bg-[#0a1428] text-white font-bold text-[15px] rounded-lg hover:bg-[#162a4a] transition-all disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? 'Envoi en cours...' : 'Envoyer ma demande'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

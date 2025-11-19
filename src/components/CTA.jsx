import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="contact" className="relative py-24">
      {/* Background accent */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-80 w-[90%] rounded-full bg-gradient-to-r from-cyan-500/10 via-blue-600/10 to-transparent blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          <div className="lg:col-span-2">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Ready to accelerate?</h2>
            <p className="mt-3 text-slate-300 max-w-2xl">Tell us about your targets for reliability and delivery speed. We'll reply within one business day with a tailored plan.</p>
            <form onSubmit={(e) => e.preventDefault()} className="mt-8 grid sm:grid-cols-2 gap-4">
              <input required className="rounded-xl bg-white/5 ring-1 ring-white/10 px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/40" placeholder="Your name" />
              <input required type="email" className="rounded-xl bg-white/5 ring-1 ring-white/10 px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/40" placeholder="Work email" />
              <input className="sm:col-span-2 rounded-xl bg-white/5 ring-1 ring-white/10 px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/40" placeholder="Company" />
              <textarea rows={4} className="sm:col-span-2 rounded-xl bg-white/5 ring-1 ring-white/10 px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/40" placeholder="What are you aiming to achieve?" />
              <button className="sm:col-span-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-white shadow-[0_10px_40px_rgba(59,130,246,0.45)] sheen">Request proposal</button>
            </form>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 relative overflow-hidden"
          >
            <div className="absolute inset-0 grid-mask opacity-30" />
            <div className="relative text-slate-300 text-sm">Response time</div>
            <div className="relative mt-1 text-3xl font-semibold text-white">Under 1 hour</div>
            <p className="relative mt-3 text-slate-300">Our team monitors requests 24/7. You'll hear from us quickly with next steps.</p>
            <div className="relative mt-6 text-slate-300 text-sm">Success rate</div>
            <div className="relative mt-1 text-3xl font-semibold text-white">99.95%</div>
            <p className="relative mt-3 text-slate-300">We pursue reliability and velocity together, supported by rigorous SRE practice.</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

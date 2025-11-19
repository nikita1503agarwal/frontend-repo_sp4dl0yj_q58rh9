import { motion } from 'framer-motion'

const logos = [
  'aws', 'gcp', 'azure', 'github', 'kubernetes', 'terraform'
]

export default function Showcase() {
  return (
    <section id="work" className="relative py-20">
      {/* Aurora backgrounds */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-20 h-80 w-80 rounded-full bg-cyan-500/20 aurora" />
        <div className="absolute -bottom-28 -right-24 h-96 w-96 rounded-full bg-blue-600/20 aurora" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 overflow-hidden">
          <div className="absolute inset-0 grid-mask opacity-40" />

          <div className="relative text-center">
            <h3 className="text-white font-semibold text-lg">Certified & Partnered</h3>
            <p className="text-slate-300 mt-1">Deep experience across the modern cloud-native stack.</p>
          </div>

          {/* Animated marquee of partner tiles */}
          <div className="relative mt-8 overflow-hidden rounded-xl">
            <div className="marquee gap-6 pr-6">
              {[...Array(2)].map((_, loop) => (
                <div key={loop} className="flex gap-6">
                  {logos.map((name, i) => (
                    <motion.div
                      key={`${name}-${loop}-${i}`}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.04 }}
                      className="min-w-[160px] aspect-[3/1] rounded-xl bg-white/5 ring-1 ring-white/10 grid place-items-center text-slate-300 hover:bg-white/10 sheen"
                    >
                      <span className="uppercase tracking-widest text-xs">{name}</span>
                    </motion.div>
                  ))}
                </div>
              ))}
            </div>
            {/* subtle gradient edges */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-950 to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-950 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'

const logos = [
  'aws', 'gcp', 'azure', 'github', 'kubernetes', 'terraform'
]

export default function Showcase() {
  return (
    <section id="work" className="relative py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
          <div className="text-center">
            <h3 className="text-white font-semibold text-lg">Certified & Partnered</h3>
            <p className="text-slate-300 mt-1">Deep experience across the modern cloud-native stack.</p>
          </div>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 items-center">
            {logos.map((name, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="aspect-[3/1] rounded-xl bg-white/5 ring-1 ring-white/10 grid place-items-center text-slate-300"
              >
                <span className="uppercase tracking-widest text-xs">{name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'

const steps = [
  {
    title: 'Assess',
    points: [
      'Reliability + velocity baseline',
      'Architecture, code, and org scan',
      'Quick wins within 2 weeks',
    ],
  },
  {
    title: 'Engineer',
    points: [
      'Design paved roads / golden paths',
      'IaC, CI/CD, and observability as code',
      'Security controls embedded',
    ],
  },
  {
    title: 'Operate',
    points: [
      'SRE on-call and incident practice',
      'Continuous improvement to SLOs',
      'Knowledge transfer + enablement',
    ],
  },
]

export default function Process() {
  return (
    <section id="process" className="relative py-20 sm:py-28">
      {/* Decorative orbs */}
      <div className="absolute -top-10 right-10 h-24 w-24 bg-cyan-500/20 rounded-full blur-2xl animate-floaty" />
      <div className="absolute bottom-0 left-6 h-28 w-28 bg-blue-600/20 rounded-full blur-2xl animate-floaty" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">How we work</h2>
          <p className="mt-3 text-slate-300">A pragmatic, outcomes-first approach that meets you where you are.</p>
        </div>

        <div className="mt-10 grid lg:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="relative rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 overflow-hidden"
            >
              <div className="absolute inset-0 grid-mask opacity-30" />
              <div className="relative text-white font-semibold text-lg">{s.title}</div>
              <ul className="relative mt-3 space-y-2">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-2 text-slate-300 text-sm">
                    <CheckCircle2 className="text-cyan-400 mt-0.5" size={16} />
                    {p}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="relative mt-5 inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200">
                Explore this phase <ArrowRight size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

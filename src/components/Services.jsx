import { Shield, Rocket, Workflow, Cloud, Gauge, Boxes } from 'lucide-react'
import { motion } from 'framer-motion'

const services = [
  {
    icon: Rocket,
    title: 'Platform Engineering',
    desc: 'Design golden paths, internal developer platforms, and paved roads for fast, safe delivery.',
  },
  {
    icon: Cloud,
    title: 'Cloud Infrastructure',
    desc: 'AWS, Azure, GCP architectures with IaC, autoscaling, and cost observability baked-in.',
  },
  {
    icon: Workflow,
    title: 'CI/CD & Automation',
    desc: 'Pipelines that cut lead time from idea to production using GitHub Actions, Argo, and more.',
  },
  {
    icon: Shield,
    title: 'Security & Compliance',
    desc: 'Shift-left security, zero trust networking, and SOC2-ready controls as code.',
  },
  {
    icon: Gauge,
    title: 'SRE & Reliability',
    desc: 'SLIs/SLOs, progressive delivery, and incident response that protects velocity.',
  },
  {
    icon: Boxes,
    title: 'Kubernetes & Microservices',
    desc: 'Multi-cluster strategies, service meshes, and production-grade observability.',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-20 sm:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/20 to-slate-950 pointer-events-none" />
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 h-60 w-[80%] bg-cyan-500/10 blur-3xl rounded-full" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">What we do</h2>
          <p className="mt-3 text-slate-300">Battle-tested capabilities that unlock quality and speed simultaneously.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: idx * 0.05 }}
              className="group rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 hover:bg-white/[0.07] transition relative overflow-hidden sheen"
            >
              <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-cyan-500/10 blur-2xl group-hover:bg-cyan-500/15" />
              <div className="h-11 w-11 rounded-xl grid place-items-center bg-gradient-to-br from-cyan-400 to-blue-600 text-white shadow-[0_10px_30px_rgba(59,130,246,0.35)]">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm text-slate-300">{desc}</p>
              <div className="mt-4 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <div className="mt-3 text-xs text-slate-400">Engagements start in 2 weeks</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

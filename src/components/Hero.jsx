import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative pt-28 pb-12 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-28 overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlay to improve contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/50 to-slate-950"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white"
            >
              DevOps at the speed of opportunity
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="mt-5 text-lg text-slate-200 max-w-xl"
            >
              Alar Capital architects, automates, and operates cloud infrastructure so your teams ship faster with confidence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a href="#contact" className="group inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-white shadow-[0_10px_40px_rgba(59,130,246,0.45)]">
                Get a proposal
              </a>
              <a href="#services" className="inline-flex items-center justify-center rounded-2xl px-6 py-3 text-slate-100 bg-white/5 ring-1 ring-white/15 hover:bg-white/10">
                Our services
              </a>
            </motion.div>

            <div className="mt-6 flex items-center gap-6 text-sm text-slate-300">
              <div className="flex -space-x-2">
                {['/avatars/1.png','/avatars/2.png','/avatars/3.png','/avatars/4.png'].map((src, i) => (
                  <img key={i} src={src} alt="client" className="h-8 w-8 rounded-full ring-2 ring-slate-900" />
                ))}
              </div>
              <div>Trusted by high-growth product teams</div>
            </div>
          </div>

          <div className="lg:col-span-6 lg:block hidden" />
        </div>
      </div>

      {/* bottom faint grid */}
      <div className="pointer-events-none absolute -bottom-40 left-1/2 -translate-x-1/2 w-[140%] h-80 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.25),transparent_60%)] blur-3xl" />
    </section>
  )
}

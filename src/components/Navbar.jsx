import { useState } from 'react'
import { Menu, X, Zap, Rocket } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'Work', href: '#work' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur-xl bg-white/5 ring-1 ring-white/10 rounded-2xl">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <a href="#" className="flex items-center gap-2">
              <div className="relative h-9 w-9 grid place-items-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 text-white shadow-[0_10px_30px_rgba(56,189,248,0.35)]">
                <Rocket size={18} />
              </div>
              <div className="leading-tight">
                <div className="text-white font-semibold text-lg">Alar Capital</div>
                <div className="text-xs text-cyan-300/80">DevOps. Relentlessly fast.</div>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((n) => (
                <a key={n.href} href={n.href} className="text-sm text-slate-200/90 hover:text-white transition-colors">
                  {n.label}
                </a>
              ))}
              <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 text-white shadow-[0_10px_30px_rgba(59,130,246,0.35)]">
                <Zap size={16} /> Start a project
              </a>
            </nav>

            <button onClick={() => setOpen(!open)} className="md:hidden text-white p-2 rounded-lg bg-white/10">
              {open ? <X /> : <Menu />}
            </button>
          </div>

          {open && (
            <div className="md:hidden px-4 pb-4">
              <div className="grid gap-2">
                {navItems.map((n) => (
                  <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 bg-white/5 text-slate-200 hover:bg-white/10">
                    {n.label}
                  </a>
                ))}
                <a href="#contact" onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
                  Start a project
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Process from './components/Process'
import Showcase from './components/Showcase'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white relative">
      {/* Background texture */}
      <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_-10%,rgba(56,189,248,0.15),transparent_60%)]" />
      <div className="relative">
        <Navbar />
        <Hero />
        <Services />
        <Process />
        <Showcase />
        <CTA />
        <footer className="py-10 text-center text-slate-400">
          © {new Date().getFullYear()} Alar Capital • Built for velocity and quality
        </footer>
      </div>
    </div>
  )
}

export default App

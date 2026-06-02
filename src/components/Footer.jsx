import { Activity } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.05] px-6 py-10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-indigo-500/15 border border-indigo-500/25 flex items-center justify-center">
            <Activity className="w-3.5 h-3.5 text-indigo-400" />
          </div>
          <span className="text-white/40 text-sm font-medium">MedAI</span>
        </div>
        <p className="text-white/25 text-xs text-center">
          Universitärer Forschungsprototyp · Nicht für den klinischen Einsatz · {new Date().getFullYear()}
        </p>
        <p className="text-white/20 text-xs">
          KI-gestützte Patientensuche
        </p>
      </div>
    </footer>
  )
}

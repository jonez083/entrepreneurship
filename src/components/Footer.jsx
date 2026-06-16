
export default function Footer() {
  return (
    <footer className="border-t border-white/[0.05] px-6 py-10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center">
          <span className="text-white/40 text-sm font-medium">MedSearch</span>
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

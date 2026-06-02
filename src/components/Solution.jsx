import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { MessageSquare, Table2, Upload, Pill, Brain, Zap } from 'lucide-react'

const steps = [
  {
    icon: Upload,
    title: 'Patientendaten hochladen',
    desc: 'Patientenakten einfach per Excel importieren. Kein aufwändiges Setup – einfach hochladen und loslegen.',
    accent: 'rgba(99,102,241,0.15)',
    iconColor: 'text-indigo-400',
  },
  {
    icon: MessageSquare,
    title: 'In natürlicher Sprache fragen',
    desc: 'Anfragen stellen wie bei ChatGPT – kein SQL, keine Filter, einfach normal formulieren.',
    accent: 'rgba(34,211,238,0.12)',
    iconColor: 'text-cyan-400',
  },
  {
    icon: Brain,
    title: 'KI findet die Zusammenhänge',
    desc: 'Die KI versteht Medikamentenbeziehungen, erkennt Wechselwirkungen und identifiziert relevante Muster sofort.',
    accent: 'rgba(167,139,250,0.12)',
    iconColor: 'text-purple-400',
  },
  {
    icon: Table2,
    title: 'Strukturierte Ergebnisse erhalten',
    desc: 'Ergebnisse werden in übersichtlichen Tabellen dargestellt. Mit einem Klick zurück nach Excel exportieren.',
    accent: 'rgba(52,211,153,0.12)',
    iconColor: 'text-emerald-400',
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
}

export default function Solution() {
  const [ref, inView] = useInView()

  return (
    <section id="solution" className="relative py-32 px-6 overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-[0.06] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(99,102,241,0.9) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-medium text-indigo-400 uppercase tracking-widest mb-6">
              Die Lösung
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
              Patientendaten durchsuchen<br />
              <span className="gradient-text">wie im Internet suchen</span>
            </h2>
            <p className="text-white/45 text-lg leading-relaxed mb-8">
              MedAI bringt die Leistungsfähigkeit großer Sprachmodelle direkt in den Praxisalltag.
              Tausende Patientenakten auf Deutsch abfragen – und strukturierte, handlungsrelevante Ergebnisse in Sekunden erhalten.
            </p>

            {/* Capabilities chips */}
            <div className="flex flex-wrap gap-2">
              {['Natürliche Sprache', 'Medikamentenfokus', 'Excel-Import', 'Wechselwirkungen erkennen', 'Schneller Export', 'Semantische Suche'].map(cap => (
                <span
                  key={cap}
                  className="px-3 py-1.5 rounded-full text-xs font-medium glass border border-white/[0.08] text-white/60"
                >
                  {cap}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right: step cards */}
          <motion.div
            variants={container}
            initial="hidden"
            animate={inView ? 'show' : 'hidden'}
            className="flex flex-col gap-4"
          >
            {steps.map(({ icon: Icon, title, desc, accent, iconColor }, i) => (
              <motion.div
                key={title}
                variants={item}
                className="glass card-hover rounded-2xl p-5 flex gap-4 items-start border border-white/[0.07]"
              >
                {/* Step number + icon */}
                <div className="flex-shrink-0 flex flex-col items-center gap-2">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center border border-white/[0.08]"
                    style={{ background: accent }}
                  >
                    <Icon className={`w-5 h-5 ${iconColor}`} />
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-px h-6 bg-white/[0.06]" />
                  )}
                </div>
                <div className="pt-1.5">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[10px] font-bold text-white/20 uppercase tracking-widest">
                      Schritt {i + 1}
                    </span>
                  </div>
                  <h3 className="text-white/90 font-semibold mb-1">{title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

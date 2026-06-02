import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { Brain, Upload, Pill, Download, Sparkles, Filter } from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: 'KI-Suche',
    desc: 'Das Sprachmodell versteht klinische Fachbegriffe und semantische Zusammenhänge.',
    gradient: 'from-indigo-500 to-indigo-600',
    glow: 'rgba(99,102,241,0.3)',
  },
  {
    icon: Upload,
    title: 'Excel-Upload',
    desc: 'Patientenakten direkt aus .xlsx-Dateien importieren – keine Datenmigration nötig.',
    gradient: 'from-emerald-500 to-emerald-600',
    glow: 'rgba(52,211,153,0.25)',
  },
  {
    icon: Pill,
    title: 'Medikamentenanalyse',
    desc: 'Nicht verfügbare Medikamente erkennen, Wechselwirkungen markieren, Alternativen vorschlagen.',
    gradient: 'from-rose-500 to-rose-600',
    glow: 'rgba(244,63,94,0.25)',
  },
  {
    icon: Download,
    title: 'Export nach Excel',
    desc: 'Gefilterte Ergebnisse mit einem Klick als strukturierte Excel-Datei herunterladen.',
    gradient: 'from-cyan-500 to-cyan-600',
    glow: 'rgba(34,211,238,0.25)',
  },
  {
    icon: Sparkles,
    title: 'Semantisches Verstehen',
    desc: 'Erkennt automatisch Synonyme, Handelsnamen und klinische Abkürzungen.',
    gradient: 'from-purple-500 to-purple-600',
    glow: 'rgba(168,85,247,0.25)',
  },
  {
    icon: Filter,
    title: 'Schnelles Filtern',
    desc: 'Tausende Einträge nach beliebigen Kriterien in Millisekunden eingrenzen.',
    gradient: 'from-amber-500 to-amber-600',
    glow: 'rgba(245,158,11,0.25)',
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const item = {
  hidden: { opacity: 0, scale: 0.95, y: 16 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } },
}

export default function Features() {
  const [ref, inView] = useInView()

  return (
    <section id="features" className="relative py-32 px-6 overflow-hidden">
      {/* Decorative gradient */}
      <div
        className="absolute left-0 bottom-0 w-[500px] h-[500px] rounded-full opacity-[0.05] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(34,211,238,0.8) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-medium text-cyan-400 uppercase tracking-widest mb-6">
            Funktionen
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-5">
            Alles, was Ärzte brauchen –{' '}
            <span className="gradient-text-subtle">nichts, was sie nicht brauchen</span>
          </h2>
          <p className="text-white/45 text-lg max-w-2xl mx-auto leading-relaxed">
            Gezielt für das Medikationsmanagement in Arztpraxen entwickelt. Kein Overhead, keine Einarbeitung nötig.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {features.map(({ icon: Icon, title, desc, gradient, glow }) => (
            <motion.div
              key={title}
              variants={item}
              className="glass card-hover rounded-2xl p-6 border border-white/[0.07] group"
            >
              <div className="mb-5">
                <div
                  className={`w-11 h-11 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center`}
                  style={{ boxShadow: `0 0 20px ${glow}` }}
                >
                  <Icon className="w-5 h-5 text-white" />
                </div>
              </div>
              <h3 className="text-white/90 font-semibold text-base mb-2">{title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

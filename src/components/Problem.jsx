import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { Clock, AlertTriangle, FileX, Search } from 'lucide-react'

const problems = [
  {
    icon: FileX,
    stat: '∞',
    label: 'spellings, one medication',
    desc: 'The same drug is recorded in countless ways across patients and staff — making any consistent search unreliable.',
    color: 'from-red-500/20 to-red-600/5',
    iconColor: 'text-red-400',
    border: 'border-red-500/15',
  },
  {
    icon: Clock,
    stat: 'Minutes',
    label: 'for a simple query',
    desc: 'Who is currently on a specific medication? Without AI that means manual scrolling, filtering, and comparing — for every patient.',
    color: 'from-amber-500/20 to-amber-600/5',
    iconColor: 'text-amber-400',
    border: 'border-amber-500/15',
  },
  {
    icon: AlertTriangle,
    stat: 'Missed',
    label: 'due to inconsistent data',
    desc: 'Critical drug interactions or unavailable medications go undetected because conventional search simply fails to match entries.',
    color: 'from-orange-500/20 to-orange-600/5',
    iconColor: 'text-orange-400',
    border: 'border-orange-500/15',
  },
  {
    icon: Search,
    stat: 'No',
    label: 'uniform documentation standard',
    desc: 'Every practice documents differently. No existing tool bridges that gap — until now.',
    color: 'from-rose-500/20 to-rose-600/5',
    iconColor: 'text-rose-400',
    border: 'border-rose-500/15',
  },
]

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
}

export default function Problem() {
  const [ref, inView] = useInView()

  return (
    <section id="problem" ref={ref} className="relative py-32 px-6 overflow-hidden">
      {/* Subtle background accent */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full opacity-[0.04] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(239,68,68,0.8) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-xs font-medium text-red-400 uppercase tracking-widest mb-6">
            The Problem
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-5">
            Inconsistent data is{' '}
            <span className="text-red-400">everyday reality</span>
          </h2>
          <p className="text-white/45 text-lg max-w-2xl mx-auto leading-relaxed">
            Patient records in medical practices are rarely captured using a unified format.
            That turns every structured search into a challenge — especially when it comes to medication.
          </p>
        </motion.div>

        {/* Problem cards */}
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {problems.map(({ icon: Icon, stat, label, desc, color, iconColor, border }) => (
            <motion.div
              key={stat}
              variants={item}
              className={`glass card-hover rounded-2xl p-6 ${border}`}
            >
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-5 border ${border}`}>
                <Icon className={`w-5 h-5 ${iconColor}`} />
              </div>
              <div className={`text-4xl font-bold mb-1 ${iconColor}`}>{stat}</div>
              <div className="text-white/60 text-xs font-medium uppercase tracking-wider mb-3">{label}</div>
              <p className="text-white/40 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

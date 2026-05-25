import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { Users, HeartPulse, Pill, AlertCircle, ArrowRight } from 'lucide-react'
import { Search } from 'lucide-react'

const queries = [
  {
    icon: Users,
    query: 'Which patients over 60 are taking Ibuprofen?',
    result: '11 patients found · sorted by age',
    color: 'from-indigo-500/10 to-indigo-600/5',
    border: 'border-indigo-500/20',
    iconBg: 'bg-indigo-500/15',
    iconColor: 'text-indigo-400',
    tag: 'Age Filter',
    tagColor: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20',
  },
  {
    icon: HeartPulse,
    query: 'Who is suffering from hypertension?',
    result: '23 patients · incl. current medication',
    color: 'from-rose-500/10 to-rose-600/5',
    border: 'border-rose-500/20',
    iconBg: 'bg-rose-500/15',
    iconColor: 'text-rose-400',
    tag: 'Diagnosis Search',
    tagColor: 'text-rose-400 bg-rose-500/10 border-rose-500/20',
  },
  {
    icon: Pill,
    query: 'Who has diabetes and is taking Metformin?',
    result: '8 patients · dosage & history available',
    color: 'from-amber-500/10 to-amber-600/5',
    border: 'border-amber-500/20',
    iconBg: 'bg-amber-500/15',
    iconColor: 'text-amber-400',
    tag: 'Combination',
    tagColor: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
  },
  {
    icon: AlertCircle,
    query: 'Which patients are on an unavailable medication?',
    result: '5 patients · alternative drugs suggested',
    color: 'from-purple-500/10 to-purple-600/5',
    border: 'border-purple-500/20',
    iconBg: 'bg-purple-500/15',
    iconColor: 'text-purple-400',
    tag: 'Availability',
    tagColor: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] } },
}

export default function ExampleQueries() {
  const [ref, inView] = useInView()

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Subtle center glow */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        aria-hidden
      >
        <div
          className="w-[800px] h-[400px] rounded-full opacity-[0.05]"
          style={{
            background: 'radial-gradient(ellipse, rgba(99,102,241,1) 0%, transparent 70%)',
            filter: 'blur(80px)',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-medium text-indigo-400 uppercase tracking-widest mb-6">
            Example Queries
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-5">
            Ask anything about{' '}
            <span className="gradient-text">your patients</span>
          </h2>
          <p className="text-white/45 text-lg max-w-2xl mx-auto leading-relaxed">
            Just type what you want to know. The AI understands medical context and returns
            structured results — regardless of how the underlying data was documented.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          {queries.map(({ icon: Icon, query, result, color, border, iconBg, iconColor, tag, tagColor }) => (
            <motion.div
              key={query}
              variants={item}
              className={`query-card glass rounded-2xl p-6 border ${border} bg-gradient-to-br ${color}`}
            >
              <div className="flex items-start justify-between mb-5">
                <div className={`w-10 h-10 rounded-xl ${iconBg} flex items-center justify-center`}>
                  <Icon className={`w-5 h-5 ${iconColor}`} />
                </div>
                <span className={`text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full border ${tagColor}`}>
                  {tag}
                </span>
              </div>

              {/* Query bubble */}
              <div className="glass rounded-xl px-4 py-3 mb-4 border border-white/[0.06]">
                <div className="flex items-center gap-2">
                  <Search className="w-3.5 h-3.5 text-white/30 flex-shrink-0" />
                  <p className="text-white/80 text-sm font-medium">"{query}"</p>
                </div>
              </div>

              {/* Result preview */}
              <div className="flex items-center gap-2 text-white/35 text-xs">
                <ArrowRight className="w-3 h-3" />
                <span>{result}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

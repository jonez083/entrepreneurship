import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { ArrowRight, FlaskConical } from 'lucide-react'

const PROTOTYPE_URL = 'https://med-scan-table.lovable.app'

export default function FinalCTA({ launchCount, onLaunch }) {
  const [ref, inView] = useInView({ threshold: 0.2 })

  return (
    <section className="relative py-40 px-6 overflow-hidden" ref={ref}>
      {/* Dramatic background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(99,102,241,0.12) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute w-[800px] h-[800px] rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.07]"
          style={{
            background: 'radial-gradient(circle, rgba(99,102,241,1) 0%, transparent 60%)',
            filter: 'blur(60px)',
          }}
        />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(99,102,241,1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(99,102,241,1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Decorative icon */}
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 rounded-2xl glass border border-indigo-500/20 flex items-center justify-center">
              <FlaskConical className="w-8 h-8 text-indigo-400" />
            </div>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight mb-6">
            Die Zukunft der klinischen{' '}
            <span className="gradient-text glow-text">Suche ist da.</span>
          </h2>

          <p className="text-white/45 text-xl leading-relaxed max-w-2xl mx-auto mb-12">
            Schluss mit Zeitverlust durch unstrukturierte Daten. KI-gestütztes Medikationsmanagement – entwickelt für den echten Praxisalltag.
          </p>

          {/* Launch counter above button */}
          {launchCount > 0 && (
            <p className="text-xs text-white/25 font-mono tracking-widest mb-6 uppercase">
              Prototyp-Starts: <span className="text-white/40">{launchCount.toLocaleString()}</span>
            </p>
          )}

          {/* CTA button */}
          <div className="flex flex-col items-center gap-6">
            <a
              href={PROTOTYPE_URL}
              onClick={onLaunch}
              className="btn-primary group inline-flex items-center gap-3 text-white font-semibold text-lg px-10 py-5 rounded-2xl"
            >
              <span>Prototyp starten</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </a>

            <div className="flex items-center gap-2 text-white/25 text-xs">
              <div className="w-1 h-1 rounded-full bg-white/20" />
              <span>Entwickelt als universitäres Forschungsprototyp.</span>
              <div className="w-1 h-1 rounded-full bg-white/20" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

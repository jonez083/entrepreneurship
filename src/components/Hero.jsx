import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, ChevronDown } from 'lucide-react'

const PROTOTYPE_URL = 'https://med-scan-table.lovable.app'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.4, 0, 0.2, 1] },
})

export default function Hero({ launchCount, onLaunch }) {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-16">
      {/* Background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute rounded-full opacity-20"
          style={{
            width: 700,
            height: 700,
            background: 'radial-gradient(circle, rgba(99,102,241,0.6) 0%, transparent 70%)',
            top: '-15%',
            left: '50%',
            transform: 'translateX(-50%)',
            filter: 'blur(60px)',
          }}
        />
        <div
          className="absolute rounded-full opacity-10"
          style={{
            width: 500,
            height: 500,
            background: 'radial-gradient(circle, rgba(34,211,238,0.5) 0%, transparent 70%)',
            bottom: '10%',
            right: '-10%',
            filter: 'blur(80px)',
          }}
        />
        <div
          className="absolute rounded-full opacity-10"
          style={{
            width: 400,
            height: 400,
            background: 'radial-gradient(circle, rgba(167,139,250,0.5) 0%, transparent 70%)',
            bottom: '20%',
            left: '-8%',
            filter: 'blur(70px)',
          }}
        />
        {/* Grid lines */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(99,102,241,1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(99,102,241,1) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Badge */}
        <motion.div {...fadeUp(0)} className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-indigo-500/20 text-xs font-medium text-indigo-300 uppercase tracking-widest">
            <Sparkles className="w-3 h-3" />
            AI for Medical Practices
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...fadeUp(0.1)}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-6"
        >
          <span className="text-white">Your patient data.</span>
          <br />
          <span className="gradient-text glow-text">
            Finally searchable.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          {...fadeUp(0.2)}
          className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed mb-12"
        >
          Patient data in medical practices is rarely documented consistently —
          different notations, abbreviations, and formats make reliable search nearly impossible.
          Our AI understands what you mean, regardless of how the data was recorded.
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeUp(0.3)}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href={PROTOTYPE_URL}
            onClick={onLaunch}
            className="btn-primary group inline-flex items-center gap-3 text-white font-semibold text-base px-8 py-4 rounded-xl"
          >
            <span>Launch Prototype</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#problem"
            className="btn-secondary inline-flex items-center gap-2 text-white/70 font-medium text-base px-6 py-4 rounded-xl"
          >
            See how it works
          </a>
        </motion.div>

        {/* Launch counter */}
        <motion.div {...fadeUp(0.4)}>
          <p className="text-xs text-white/25 font-mono tracking-wider">
            PROTOTYPE LAUNCHES:{' '}
            <span className="text-white/40">{launchCount.toLocaleString()}</span>
          </p>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-5 h-5 text-white/20" />
        </motion.div>
      </motion.div>
    </section>
  )
}

import { useState, useCallback } from 'react'
import './index.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Solution from './components/Solution'
import ExampleQueries from './components/ExampleQueries'
import Features from './components/Features'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

const STORAGE_KEY = 'medai_launch_count'

function getLaunchCount() {
  try {
    return parseInt(localStorage.getItem(STORAGE_KEY) || '0', 10)
  } catch {
    return 0
  }
}

function App() {
  const [launchCount, setLaunchCount] = useState(getLaunchCount)

  const handleLaunch = useCallback(() => {
    const next = launchCount + 1
    setLaunchCount(next)
    try {
      localStorage.setItem(STORAGE_KEY, String(next))
    } catch {}
  }, [launchCount])

  return (
    <div className="min-h-screen bg-[#05060f]">
      <Nav launchCount={launchCount} onLaunch={handleLaunch} />
      <Hero launchCount={launchCount} onLaunch={handleLaunch} />
      <Problem />
      <Solution />
      <ExampleQueries />
      <Features />
      <FinalCTA launchCount={launchCount} onLaunch={handleLaunch} />
      <Footer />
    </div>
  )
}

export default App

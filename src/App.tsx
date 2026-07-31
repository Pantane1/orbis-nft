import Hero from './components/Hero'
import About from './components/About'
import Collection from './components/Collection'
import CTA from './components/CTA'

export default function App() {
  return (
    <div className="relative bg-background">
      <div className="texture-overlay" />
      <Hero />
      <About />
      <Collection />
      <CTA />
    </div>
  )
}

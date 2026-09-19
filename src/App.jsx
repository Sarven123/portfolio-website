import { MotionConfig } from 'framer-motion'
import SkipLink from './components/layout/SkipLink'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import ScrollGlow from './components/layout/ScrollGlow'
import ScrollProgress from './components/layout/ScrollProgress'
import HeroSection from './components/sections/HeroSection'
import ProjectsSection from './components/sections/ProjectsSection'
import AboutSection from './components/sections/AboutSection'
import ContactSection from './components/sections/ContactSection'

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <SkipLink />
      <ScrollGlow />
      <ScrollProgress />
      <Header />
      <main id="main-content" tabIndex={-1}>
        <HeroSection />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </MotionConfig>
  )
}

export default App

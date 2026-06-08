import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Starfield from './components/layout/Starfield'
import Hero from './components/sections/Hero'
import FounderBio from './components/sections/FounderBio'
import WorkExperience from './components/sections/WorkExperience'
import SelectedWorks from './components/sections/SelectedWorks'
import TechStack from './components/sections/TechStack'
import NewsletterCTA from './components/sections/NewsletterCTA'
import CustomCursor from './components/ui/CustomCursor'

function App() {
  return (
    <main className="relative min-h-screen text-primary font-sans selection:bg-primary selection:text-background">
      
      {/* The Global Interactive Layers */}
      <CustomCursor />
      <Starfield />

      {/* The Content Layer */}
      <div className="relative z-10">
        <Navbar />
        <div className="pt-20">
          <Hero />
          <div id="about"><FounderBio /></div>
          <div id="experience"><WorkExperience /></div>
          <div id="works"><SelectedWorks /></div>
          <div id="stack"><TechStack /></div>
          <NewsletterCTA />
        </div>
        <Footer />
      </div>

    </main>
  )
}

export default App
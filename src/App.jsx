

import { Hero } from './compnents/Hero'
import { Navbar } from './compnents/Navbar'
import { About } from './compnents/About'
import { Technologies } from './compnents/Technologies';
import { Experience } from './compnents/Experience';
import { Projects } from './compnents/Projects';
import { Contact } from './compnents/Contact';


function App() {
  return (
    <div className="min-h-screen overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      {/* Background Container */}
      <div className="fixed inset-0 z-[-10] bg-neutral-950">
        <div className="h-full w-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>

      {/* Content Container */}
      <div className="relative container mx-auto px-8">
        <Navbar />
        <Hero />
        <About />
        <Technologies/>
        <Experience/>
        <Projects/>
        <Contact/>
        
      </div>
    </div>
  );
}

export default App;



import './App.css'
import ContactMe from './components/ContactMe/ContactMe'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Skills from './components/Skills/Skills'
import WorkExperiences from './components/WorkExperiences/WorkExperiences'


const App = () => {
  return (
    <>
      <Navbar/>
      <div className="container">
      <Hero/>
      <Skills/>
      <WorkExperiences/>
      <ContactMe/>
      </div>
      <Footer/>
    </>
  )
}

export default App

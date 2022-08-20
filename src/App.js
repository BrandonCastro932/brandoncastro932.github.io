import './App.scss';
import React, { useEffect } from 'react'
import Greetings from './components/Greetings';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import WorkExperience from './components/WorkExperience';
import AboutMe from './components/AboutMe';

function App() {
  useEffect(() => {
    document.title = "Brandon Castro Portfolio"
  }, [])

  return (
    <body class='body'>
      <nav className='navbar'><Navbar></Navbar></nav>
      <main className="landing-page">
        <section className= "portfolio-block">
          <Greetings></Greetings>
        </section>
        <section className='portfolio-block aboutMe'>
          <AboutMe></AboutMe>
        </section>
        <section className='portfolio-block cv'>
          <Education></Education>
        </section>
        <section className='portfolio-block skills'>
          <Skills></Skills>
        </section>
        {/* 
        
          Cuando ya entre a bretear agregar
          <section>
          <WorkExperience></WorkExperience>
          </section>
        
        */}
        <section className='portfolio-block prj'>
          <Projects></Projects>
        </section>

      </main>
      <footer>
      <Footer></Footer>
      </footer>
    </body>
  );
}

export default App;

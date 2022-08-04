import './App.scss';
import Greetings from './components/Greetings';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <body class='body'>
      <title>Brandon Castro Porfolio</title>
      <nav className='navbar'><Navbar></Navbar></nav>
      <main className="landing-page">
        <section className= "portfolio-block">
          <Greetings></Greetings>
        </section>
        <section className='portfolio-block cv'>
          <Education></Education>
        </section>
        <section className='portfolio-block prj'>
          <Projects></Projects>
        </section>
        <section className='portfolio-block skills'>
          <Skills></Skills>
        </section>
      </main>
      <footer>
      <Footer></Footer>
      </footer>
    </body>
  );
}

export default App;

//import logo from './logo.svg';

import './App.css';
import About from './components/About';
import Certificates from './components/Certificates';
import Projects from './components/Projects';
import Academics from './components/Academics';
import Header from './components/Header';
import Footer from './components/Footer';
import Skills from './components/Skills';




function App() {
  return (
    <div className="App">
      <Header />
      <About/>
      <Projects />
      <Skills />
      <Academics />
      <Footer/>
    </div>
  );
}

export default App;

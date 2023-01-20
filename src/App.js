import React from 'react'
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Hero/>
    <About/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;

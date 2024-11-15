import React from 'react';
import Hero from './sections/Hero.jsx';
import About from './sections/About.jsx';
import Footer from './sections/Footer.jsx';
import Navbar from './sections/Navbar.jsx';
import Contact from './sections/Contact.jsx';
import Projects from './sections/Projects.jsx';
import WorkExperience from './sections/Experience.jsx';
// import Chatbot from './Chatbot.jsx'; 
// Import the new Chatbot component

const App = () => {
  return (
    <main className="max-w-7xl mx-auto relative">
      <Navbar />
      <Hero />
      <About /> {/* This includes the Clients component internally */}
      <Projects />
      <WorkExperience />
      <Contact />
      <Footer />
  {/* <Chatbot /> */}
    </main>
  );
};

export default App;
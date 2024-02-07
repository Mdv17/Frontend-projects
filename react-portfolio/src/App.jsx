import { useState } from 'react';
import styles from './App.module.css';
import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Experience } from './components/Experience/Experience';
import { Projects } from './components/Projects/Projects';


function App() {
  

  return (
    // styles here is a variable and .App is a CSS class name that is applied to the <div> element. It is defined in a file called App.module.css, which is imported in the App.js file. The App.module.css file contains the style rules for the .App class, such as the font family, color, margin, and alignment. The .App class is used to style the main container of the React app, which renders the App component.
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
    </div>
  )
}

export default App;

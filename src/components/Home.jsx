
import React from 'react';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Education from './Education';
import Achievements from './Achievements';
import Resume from './Resume';
import Contact from './Contact';

const Home = () => {
    return (
        <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Education />
            <Achievements />
            <Resume />
            <Contact />
        </main>
    );
};

export default Home;

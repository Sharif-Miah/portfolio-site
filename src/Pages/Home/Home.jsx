import React from 'react';
import Hero from './Hero/Hero';
import Services from './Services/Services';
import Portfolio from '../Portfolio/Portfolio';
import Skills from '../Skills/Skills';
import Education from './Education/Education';

const Home = () => {
    return (
        <div>
            <Hero/>
            <Services/>
            <Portfolio/>
            <Skills/>
            <Education />
        </div>
    );
};

export default Home;
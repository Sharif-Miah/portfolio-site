import React from 'react';
import Hero from './Hero/Hero';
import Services from './Services/Services';
import Portfolio from '../Portfolio/Portfolio';
import Skills from '../Skills/Skills';
import Education from './Education/Education';
import Navbar from '../../Sheard/Navbar/Navbar';
import Footer from '../../Sheard/Footer/Footer';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero/>
            <Services/>
            <Portfolio/>
            <Skills/>
            <Education />
            <Footer />
        </div>
    );
};

export default Home;
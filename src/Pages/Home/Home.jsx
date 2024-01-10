import React from 'react';
import Hero from './Hero/Hero';
import Services from './Services/Services';
import Portfolio from '../Portfolio/Portfolio';

const Home = () => {
    return (
        <div>
            <Hero/>
            <Services/>
            <Portfolio/>
        </div>
    );
};

export default Home;
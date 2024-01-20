import React from 'react';
import Navbar from '../Sheard/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Sheard/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Outlet/>
        </div>
    );
};

export default Main;
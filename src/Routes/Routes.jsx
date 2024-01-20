import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Layout/Main";
import Services from "../Pages/Home/Services/Services";
import Portfolio from "../Pages/Portfolio/Portfolio";
import Skills from "../Pages/Skills/Skills";
import Education from "../Pages/Home/Education/Education";
import Contact from "../Pages/Contact/Contact";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Home />
            },
            // {
            //     path: '/service',
            //     element: <Services />
            // },
            // {
            //     path: '/portfolio',
            //     element: <Portfolio />
            // },
            // {
            //     path: '/skills',
            //     element: <Skills />
            // },
            // {
            //     path: '/education',
            //     element: <Education />
            // },
            // {
            //     path: '/contact',
            //     element: <Contact />
            // },
        ]
    }
])

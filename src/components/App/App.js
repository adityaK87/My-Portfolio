
import React, { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';
import About from '../About/About'
import Project from '../Projects/Project';
import Skills from '../Skills/Skills';
import Contact from '../Contact/Contact';
import SideBar from '../SideBar/SideBar';
import GoHome from '../GoHome/GoHome';
import HomeFooter from '../HomeFooter/HomeFooter';
import { useLocation } from 'react-router-dom';
import DarkMode from '../DarkMode/DarkMode';

const App = () => {
    const [isHome, setIsHome] = useState(false);
    const { pathname } = useLocation();

    useEffect(() => {
        if (pathname === '/') {  // HomeFooter will be shown only on home page{app component}
            setIsHome(true);
        } else setIsHome(false);
    }, [pathname]);

    return (
        <>
            <DarkMode />
            <>
                <SideBar />
                <Routes>
                    <Route path='/' exact element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/projects' element={<Project />} />
                    <Route path='/skills' element={<Skills />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
                <GoHome />
                {isHome && <HomeFooter />}
            </>
        </>
    );
};
export default App;

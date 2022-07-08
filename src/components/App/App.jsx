
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from '../Home/Home';
import About from '../About/About'
import Project from '../Projects/Project';
import Skills from '../Skills/Skills';
import Contact from '../Contact/Contact';
import NavBar from '../NavBar/NavBar';
import GoHome from '../GoHome/GoHome';

const App = () => {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path='/' exact element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/projects' element={<Project />} />
                <Route path='/skills' element={<Skills />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
            <GoHome />
        </>
    );
};
export default App;

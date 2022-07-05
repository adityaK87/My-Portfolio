
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from '../Home/Home';
import About from '../About/About'
import Project  from '../Projects/Project';
import Skills from '../Skills/Skills';
import Contact from '../Contact/Contact';




const App  =  () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/projects' element={<Project/>} />
                <Route path='/skills' element={<Skills/>} />
                <Route path='/contact' element={<Contact/>} />
            </Routes>
        </BrowserRouter>
        )
}
export default App;
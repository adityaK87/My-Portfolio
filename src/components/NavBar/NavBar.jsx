import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import "./NavBar.css"

const withLocation = (NavBar) => (props) => {
    const location = useLocation();
    return <NavBar {...props} location={location} />;
}
          
const NavBar = () => {
    const location = useLocation();
    // console.log(location.pathname)

    const homeClass=location.pathname === '/'? 'active-item':'';
    const aboutClass=location.pathname === '/about'? 'active-item':'';
    const projectClass=location.pathname === '/projects'? 'active-item':'';
    const skillsClass=location.pathname === '/skills'? 'active-item':'';
    const contactClass=location.pathname === '/contact'? 'active-item' : '';
return (
    <Menu>
        {/* We never want to use <a> tag inside our react router application */}
        {/* <a id="home" className="menu-item" href="/">Home</a> */}
        
        <Link to="/" className={`menu-item ${homeClass}`}>Home</Link>
        <Link to="/about" className={`menu-item ${aboutClass}`}>About</Link>
        <Link to="/projects" className={`menu-item ${projectClass}` }>Projects</Link>
        <Link to="/skills" className={`menu-item ${skillsClass}`}>Skills</Link>
        <Link to="/contact" className={`menu-item ${contactClass}`}>Contact</Link>

    </Menu>
    );

}
export default withLocation(NavBar);

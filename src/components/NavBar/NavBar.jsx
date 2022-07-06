import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
// import {withRouter} from 'react-router';
import { useLocation } from "react-router-dom";
import "./NavBar.css"


const withLocation = (NavBar) => (props) => {
    const location = useLocation();
    console.log(location)
        return (<NavBar {...props} location={location} >
          
            <Menu>
                ({/* We never want to use <a> tag inside our react router application */}
                 {/* <a id="home" className="menu-item" href="/">Home</a> */})
                
                 <Link to="/" className="menu-item active-item">Home</Link>
                 <Link to="/about" className='menu-item'>About</Link>
                 <Link to="/projects" className='menu-item'>Projects</Link>
                 <Link to="/skills" className='menu-item'>Skills</Link>
                 <Link to="/Contact" className='menu-item'>Contact</Link>
             </Menu>
             ;
    </NavBar>)
};

// class NavBar extends React.Component{

//       render () {
//         console.log(this.props)
//             const homeClass=location.pathname === '/'? 'active-item':'';
//             const aboutClass=location.pathname === '/about'? 'active-item':'';
//             const projectClass=location.pathname === '/projects'? 'active-item':'';
//             const skillsClass=location.pathname === '/skills'? 'active-item':'';
//             const contactClass=location.pathname === '/contact'? 'active-item':'';
//         return (
//             <Menu>
//             {/* We never want to use <a> tag inside our react router application */}
//                 {/* <a id="home" className="menu-item" href="/">Home</a> */}
                

//                 <Link to="/" className={`menu-item ${homeClass}`}>Home</Link>
//                 <Link to="/about" className={`menu-itme ${aboutClass}`}>About</Link>
//                 <Link to="/projects" className={`menu-item ${projectClass}` }>Projects</Link>
//                 <Link to="/skills" className={`menu-item ${skillsClass}`}>Skills</Link>
//                 <Link to="/Contact" className={`menu-item ${contactClass}`}>Contact</Link>
//             </Menu>
//             );
      
//         }
//     };
    export default withLocation(this.NavBar);
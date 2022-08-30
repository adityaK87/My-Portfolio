import React from 'react';
import Header from '../Header/Header';
import FooterLink from '../FooterLink/FooterLink';
import "./About.css"
import aboutAnime from '../../assets/about_anime.gif'
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className='section-container'>
            <Header
                heading=" About Me! "
                details=" Student | Enthusiatic Front End Developer who loves going into the depth of HOWs and WHYs.!"
            />

            <div className="about-main">
                <div className="about-main-left">
                    {/* sub-section 1 */}
                    <h3 className="about-sub-head">Studying about programming and Web Developement</h3>
                    <p className="about-details">
                        <Link to='/projects' className='about-link-element'>check out my projects</Link></p>


                    {/* sub-section 2 */}
                    {/* <h3 className="about-sub-head">Student</h3>
                    <p className="about-details"> I am studying about programming and Web Developement</p> */}

                    {/* sub-section 3 */}
                    {/* <h3 className="about-sub-head">Student</h3>
                    <p className="about-details"> I am studying about programming and Web Developement</p> */}
                </div>

                <div className="about-main-right">
                    <img src={aboutAnime} alt="aboutAnimeGif" className='about-anime' />
                </div>
            </div>

            <FooterLink
                phrase=" check out my "
                link="projects!"
                toAdress="/projects"
            />
        </div>
    );
};
export default About;

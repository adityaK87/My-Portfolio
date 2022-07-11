import React from 'react';
import Header from '../Header/Header';
import FooterLink from '../FooterLink/FooterLink';
import "./About.css"
import aboutVector from '../../assets/about_vector.png'
import aboutAnime from '../../assets/about_anime.gif'
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className='section-container'>
            <Header
                heading=" About Me . "
                details=" Aditya | A student | Frontend developer !"
            />

            <div className="about-main">
                <div className="about-main-left">
                    {/* sub-section 1 */}
                    <h3 className="about-sub-head">Student</h3>
                    <p className="about-details"> I am studying about programming and Web Developement.
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

            {/* vector Frame! */}

            <div className="vector-frame">
                <img src={aboutVector} className="about-vector" alt='about vector' />
            </div>
        </div>
    );
};
export default About;

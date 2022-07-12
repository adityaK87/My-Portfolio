import React from 'react';
import './Contact.css'
import Header from '../Header/Header';
import FooterLink from '../FooterLink/FooterLink';
import contactVector from '../../assets/contact_anime.png';
import github from '../../assets/gh.png'


const Contact = () => {
    return (
        <div className='section-container'>
            <Header
                heading="Get in touch"
                details="Interested to collaborate? Feel free to drop me an email"
            />
            
            {/* contact form container */}
            <div className="contact-form-container">
                <form className="contact-form">
                    <input
                        type="email"
                        placeholder='Your Email Id'
                        name='email'
                        className='input-box email-input'
                    />
                    {/* Email body */}
                    <textarea
                        type='text'
                        placeholder='Your Message'
                        name='message'
                        className='input-box body-input'
                    ></textarea>
                    {/* submit button */}
                    <button type='submit' className='contact-btn'> Send Email</button>
                </form>

            </div>
            {/* social icon container */}
            <div className="social-icon-container">
                <a href="https://github.com/adityapal87">
                    <img src={github} alt="github" className='social-icon' />
                </a>

            </div>

            <FooterLink
                phrase=" Read more "
                link="about me!"
                toAdress="/about"
            />
            <div className="vector-frame">
                <img
                    src={contactVector}
                    alt="contact"
                    className='about-vetor'
                />
            </div>

        </div>
    )
}
export default Contact;

import React from 'react';
import './Contact.css';
import Header from '../Header/Header';
import FooterLink from '../FooterLink/FooterLink';
import github from '../../assets/gh.png';
import linkedIn from '../../assets/li.png';


const Contact = () => {
    return (
        <div className='section-container'>
            <Header
                heading="Get in touch!"
                details="Feel free to Contact me by submitting the form below and I will get back to you as soon as possible."
            />

            {/* contact form container */}
            <div className="contact-form-container">
                <form className="contact-form"
                    action="https://formspree.io/f/xpzbgnqq"
                    method="POST"  >
                    <input
                        type="email"
                        placeholder='Your Email Id'
                        name='email'
                        className='input-box email-input' required
                    />
                    {/* Email body */}
                    <textarea
                        type='text'
                        placeholder='Your Message'
                        name='message'
                        className='input-box body-input'
                    ></textarea>
                    {/* submit button */}
                    <button type='submit' className='contact-btn input-box'> Send Email</button>
                </form>

            </div>
            {/* social icon container */}
            <div className="social-icon-container">
                <a href="https://github.com/adityapal87">
                    <img src={github} alt="github" className='social-icon github ' />
                </a>

                <a href="https://www.linkedin.com/in/aditya-pal-526121233/">
                    <img src={linkedIn} alt="linkedIn" className='social-icon ' />
                </a>

            </div>

            <FooterLink
                phrase=" Read more "
                link="about me!"
                toAdress="/about"
            />


        </div>
    )
}
export default Contact;

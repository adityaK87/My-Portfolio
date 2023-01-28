import React from 'react';
import './HomeFooter.css';
import github from '../../assets/gitLogo1.png';
import linkedin from '../../assets/li.png';
import twitter from '../../assets/twitterLogo.png';


const HomeFooter = () => {
    return (
        <div className="home-footer">
            <div className='container'>
                <div className="left-footer">
                    <h1 className='my-name'>Aditya Kumar</h1>
                    <p className="my-details">A dedicated Front End Developer looking for challenging opportunities which could help in enhancing my skills.</p>
                </div>

                <div className="right-footer">
                    <div className="social-media">
                        {/* <h2>SOCIAL MEDIA</h2> */}
                        <ul>
                            <li> <a href="https://github.com/adityaK87" target="_blank" rel="noreferrer"> <img src={github} alt="github" className='github' /> </a> </li>
                            <li> <a href="https://www.linkedin.com/in/adityak87/" target="_blank" rel="noreferrer"><img src={linkedin} alt="linkedin" className='linkedin' /></a> </li>
                            <li> <a href="https://twitter.com/aditya_K87" target="_blank" rel="noreferrer"><img src={twitter} alt="linkedin" className='linkedin' /></a> </li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* <p className='copyright-issue alignCenter'>
                <b>No <i className="fa fa-copyright"></i> copyright issues.</b><br />
                Feel free to copy. If you need any help, ping me !
            </p> */}
            <div className="large-4 columns">
                {/* <h2 className='my-name'>Aditya Kumar</h2> */}
                <p className="madewithlove">
                    Made with <i className="fa fa-heart" ></i> in India
                </p>
            </div>
            <p className="copyright">
                <span className="copyright-section">© {new Date().getFullYear()} - Aditya Kumar</span>
            </p>
        </div>
    );
};
export default HomeFooter;

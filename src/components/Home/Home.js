import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";
import homeAnime from '../../assets/home_anime.gif';
// import homepic from '../../assets/home_pic.jpg';
const Home = () => {
    return (
        <div>
            <div className="home-container">
                <div className="header-text">
                    <h1>Welcome to my portfolio!</h1>
                    <p>This is <span className='frontName'> <b><i>Aditya</i></b> </span>, a frontend developer! </p>
                </div>
                <div className="head-btns">
                    <Link to="/about" className='btn btn-white'>
                        <p className="btn-text">KNOW MORE ABOUT ME  </p>
                    </Link>

                    <Link to="/contact" className="btn btn-transparent">
                        <p className="btn-text">CONNECT WITH ME </p>
                    </Link>
                </div>
                <div className="splash-img">
                    <img src={homeAnime} alt="Animation" className='home-anime' />
                </div>
            </div>
        </div>
    )
};
export default Home;

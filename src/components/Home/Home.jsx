import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";
import homeAnime from '../../assets/home_anime.gif';
const Home = () => {
    return (
        <div>
            <div className="home-container">
                <div className="header-text">
                    <h1>Welcome to my portfolio!</h1>
                    <p>This is <b><i>Aditya</i></b>, a frontend developer! </p>
                </div>
                <div className="head-btns">
                    <Link to="/about" className='btn btn-white'>
                        <p className="btn-text">Know more about me </p>
                    </Link>

                    <Link to="/contact" className="btn btn-transparent">
                        <p className="btn-text">Connect with me </p>
                    </Link>
                </div>
                    <div className="splash-img">
                        <img src={homeAnime} alt="Animation" />
                    </div>
            </div>
        </div>
    )
};
export default Home;

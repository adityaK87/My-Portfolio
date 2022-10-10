import { useLocation, useNavigate } from 'react-router-dom';
import homeIconWhite from '../../assets/home_white.png';
import homeIconBlack from '../../assets/home_black.png';
import './GoHome.css';


const withLocation = (GoHome) => (props) => {
    const location = useLocation();
    return <GoHome {...props} location={location} />;
}

const GoHome = () => {
    const navigate = useNavigate();
    // console.log(navigate)
    const location = useLocation()
    // console.log(location)

    const navigateToHome = () => {
        navigate("/");
    }
    // const {pathname}= location;
    const whiteBtn = location.pathname === "/";
    return (
        <button
            className={`go-home-btn ${whiteBtn ? 'white-bkg' : 'gradient-bkg'}`}
            onClick={() => navigateToHome()}>
            <img
                className='home-icon'
                src={whiteBtn ? homeIconBlack : homeIconWhite}
                alt="home-icon" />
        </button>
    );
}


export default withLocation(GoHome);

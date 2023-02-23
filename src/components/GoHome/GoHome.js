import { useLocation, useNavigate } from "react-router-dom";
import homeIconWhite from "../../assets/home_white.png";
import "./GoHome.css";

const withLocation = (GoHome) => (props) => {
	const location = useLocation();
	return <GoHome {...props} location={location} />;
};

const GoHome = () => {
	const navigate = useNavigate();
	const navigateToHome = () => {
		navigate("/");
	};

	return (
		<button
			className={`go-home-btn  white-bkg  gradient-bkg`}
			onClick={() => navigateToHome()}>
			<img className='home-icon' src={homeIconWhite} alt='home-icon' />
		</button>
	);
};

export default withLocation(GoHome);

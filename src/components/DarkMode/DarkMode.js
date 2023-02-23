import React from "react";
import "./DarkMode.css";
import { BsFillSunFill } from "react-icons/bs";
import { BsFillMoonStarsFill } from "react-icons/bs";

const setDark = () => {
	localStorage.setItem("theme", "dark");
	document.documentElement.setAttribute("data-theme", "dark");
};

const setLight = () => {
	localStorage.setItem("theme", "light");
	document.documentElement.setAttribute("data-theme", "light"); //
};

const storedTheme = localStorage.getItem("theme");
const prefersDark =
	window.matchMedia &&
	window.matchMedia("(prefers-color-scheme: dark)").matches;

const defaultDark =
	storedTheme === "dark" || (storedTheme === null && prefersDark);

if (defaultDark) {
	setDark();
} else {
	setLight();
}

const toggleTheme = (e) => {
	if (e.target.checked) {
		setDark();
	} else {
		setLight();
	}
};

const DarkMode = () => {
	return (
		<div className='toggle-theme-wrapper'>
			<input
				type='checkbox'
				id='checkbox'
				className='checkbox'
				onChange={toggleTheme}
				defaultChecked={defaultDark}
			/>
			<label htmlFor='checkbox' className='label toggle-theme checkbox'>
				<BsFillSunFill />
				<span>
					<BsFillMoonStarsFill />
				</span>
				<div className='ball' />
			</label>
		</div>
	);
};

export default DarkMode;

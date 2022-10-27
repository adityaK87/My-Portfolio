import React from 'react';
import './DarkMode.css';


const setDark = () => {
  localStorage.setItem("theme", "dark");
  document.documentElement.setAttribute("data-theme", "dark");
};

const setLight = () => {
  localStorage.setItem("theme", "light");
  document.documentElement.setAttribute("data-theme", "light");  //
};

const storedTheme = localStorage.getItem("theme");
const prefersDark =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

const defaultDark =
  storedTheme === "dark" || (storedTheme === null && prefersDark);

if (defaultDark) {
  setDark();
}else{
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
    <div className="toggle-theme-wrapper">
      {/* <label className="toggle-theme checkbox" htmlFor="checkbox">
        <i class="fa-light fa-sun"></i>
        <input
          className='checkbox'
          type="checkbox"
          id="checkbox"
          onChange={toggleTheme}
          defaultChecked={defaultDark}
        />
        <i class="fa-light fa-moon"></i>
        <div className="slider round"></div>
      </label> */}


      {/* New darkmode button */}
      <input type="checkbox"
        id="checkbox"
        className='checkbox'
        onChange={toggleTheme}
        defaultChecked={defaultDark} />
      <label
        htmlFor="checkbox"
        className="label toggle-theme checkbox">
        <i className='fas fa-sun'></i>
        <i className="fas fa-moon"></i>
        <div className='ball' />
      </label>
    </div>
  );
};

export default DarkMode;
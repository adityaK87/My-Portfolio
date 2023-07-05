import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./SideBar.css";

const withLocation = (SideBar) => (props) => {
	const location = useLocation();
	return true ? <SideBar {...props} location={location} /> : "";
};

const SideBar = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const { t } = useTranslation();

	const location = useLocation();
	const homeClass = location.pathname === "/" ? "active-item" : "";
	const aboutClass = location.pathname === "/about" ? "active-item" : "";
	const projectClass = location.pathname === "/projects" ? "active-item" : "";
	const skillsClass = location.pathname === "/skills" ? "active-item" : "";
	const contactClass = location.pathname === "/contact" ? "active-item" : "";

	const handleSateChange = (state) => {
		setMenuOpen(state.isOpen);
	};

	const closeMenu = () => {
		setMenuOpen(false);
	};

	return (
		<Menu
			isOpen={menuOpen}
			onStateChange={(state) => handleSateChange(state)}>
			<Link
				to='/'
				onClick={() => closeMenu()}
				className={`menu-item ${homeClass}`}>
				{t("HOME")}
			</Link>
			<Link
				to='/about'
				onClick={() => closeMenu()}
				className={`menu-item ${aboutClass}`}>
				{t("ABOUT")}
			</Link>
			<Link
				to='/projects'
				onClick={() => closeMenu()}
				className={`menu-item ${projectClass}`}>
				{t("PROJECT")}
			</Link>
			<Link
				to='/skills'
				onClick={() => closeMenu()}
				className={`menu-item ${skillsClass}`}>
				{t("SKILLS")}
			</Link>
			<Link
				to='/contact'
				onClick={() => closeMenu()}
				className={`menu-item ${contactClass}`}>
				{t("CONTACT")}
			</Link>
			<a
				href='https://blog-aditya.hashnode.dev/'
				onClick={() => closeMenu()}
				className={`menu-item ${contactClass}`}>
				{"Blogs"}
			</a>
		</Menu>
	);
};
export default withLocation(SideBar);

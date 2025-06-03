import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import homeAnime from "../../assets/home_anime.gif";
import Resume from "../../assets/pdf/Aditya_Kumar_Resume.pdf";
import { CgSoftwareDownload } from "react-icons/cg";
import { BsEye } from "react-icons/bs";
import { useTranslation } from "react-i18next";

const Home = () => {
	const { t } = useTranslation(); //destructuring t from the useTranslation
	return (
		<div>
			<div className="home-container">
				<div className="header-text">
					<h1>{t("HOME_PAGE_CONTENT.HOME_PAGE_HEADING")}</h1>
					<p>
						{t("HOME_PAGE_CONTENT.THIS")}{" "}
						<span className="frontName">
							<b>
								<i>Aditya , </i>
							</b>
						</span>
						{t("HOME_PAGE_CONTENT.FRONTEND_DEV")}
					</p>
				</div>
				<div className="head-btns">
					<div className="resume btn  ">
						<p className="right btn-text ">
							{t("HOME_PAGE_CONTENT.RESUME")}
						</p>
						<>
							<a
								href={Resume}
								download="Aditya_Kumar_Resume.pdf"
								className="resume-links download-btn">
								<CgSoftwareDownload />
							</a>
							<a
								target="_blank"
								rel="noreferrer"
								href="https://drive.google.com/file/d/1737DHzUUAlJpFSKUQizo7pvFdRb79fm0/view?usp=sharing"
								className="resume-links download-btn">
								<BsEye />
							</a>
						</>
					</div>
					<Link to="/contact" className="btn ">
						<p className="btn-text">
							{t("HOME_PAGE_CONTENT.CONNECT WITH ME")}{" "}
						</p>
					</Link>
				</div>
				<div className="splash-img">
					<img
						src={homeAnime}
						alt="Animation"
						className="home-anime"
					/>
				</div>
			</div>
		</div>
	);
};
export default Home;

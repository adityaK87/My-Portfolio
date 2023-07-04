import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import homeAnime from "../../assets/home_anime.gif";
import Resume from "../../assets/pdf/Aditya-Kumar-Resume.pdf";
import { CgSoftwareDownload } from "react-icons/cg";
import { BsEye } from "react-icons/bs";
import { useTranslation } from "react-i18next";

const Home = () => {
	const { t } = useTranslation();
	return (
		<div>
			<div className='home-container'>
				<div className='header-text'>
					<h1>{t("HomePageContent.HomePageHeading")}</h1>
					<p>
						{t("HomePageContent.This is")}{" "}
						<span className='frontName'>
							<b>
								<i>Aditya , </i>
							</b>
						</span>
						{t("HomePageContent.a frontend developer!")}
					</p>
				</div>
				<div className='head-btns'>
					<div className='resume btn  '>
						<p className='right btn-text '>
							{t("HomePageContent.RESUME")}
						</p>
						<>
							<a
								href={Resume}
								download='Aditya-Kumar-Resume.pdf'
								className='resume-links download-btn'>
								<CgSoftwareDownload />
							</a>
							<a
								target='_blank'
								rel='noreferrer'
								href='https://drive.google.com/file/d/1H8AOvAsc-XLpnQ98Fh4342XliZe1IRrz/view?usp=sharing'
								className='resume-links download-btn'>
								<BsEye />
							</a>
						</>
					</div>
					<Link to='/contact' className='btn '>
						<p className='btn-text'>
							{t("HomePageContent.CONNECT WITH ME")}{" "}
						</p>
					</Link>
				</div>
				<div className='splash-img'>
					<img
						src={homeAnime}
						alt='Animation'
						className='home-anime'
					/>
				</div>
			</div>
		</div>
	);
};
export default Home;

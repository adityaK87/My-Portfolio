import React from "react";
import Header from "../Header/Header";
import FooterLink from "../FooterLink/FooterLink";
import "./About.css";
import aboutAnime from "../../assets/about_anime.gif";
import { useTranslation } from "react-i18next";

const About = () => {
	const { t } = useTranslation();
	return (
		<div className='section-container'>
			<Header
				heading={t("AboutPageContent.AboutPageHeading")}
				details={t("AboutPageContent.AboutPageSubHeading")}
			/>

			<div className='about-main'>
				<div className='about-main-left'>
					{/* sub-section 1 */}
					<p className='about-sub-head'>
						{t("AboutPageContent.AboutMeParagraph1")}
					</p>
					<p className='about-sub-head'>
						{t("AboutPageContent.AboutMeParagraph2")}
					</p>
					<p className='about-sub-head'>
						{t("AboutPageContent.AboutMeParagraph3")}
					</p>
				</div>

				<div className='about-main-right'>
					<img
						src={aboutAnime}
						alt='aboutAnimeGif'
						className='about-anime'
					/>
				</div>
			</div>

			<FooterLink
				phrase={t("AboutPageContent.AboutFooterList")}
				link={t("AboutPageContent.AboutFooterLink")}
				toAdress='/projects'
			/>
		</div>
	);
};
export default About;

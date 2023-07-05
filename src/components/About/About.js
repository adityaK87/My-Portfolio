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
				heading={t("ABOUT_PAGE_CONTENT.ABOUT_PAGE_HEADING")}
				details={t("ABOUT_PAGE_CONTENT.ABOUT_PAGE_SUB_HEADING")}
			/>

			<div className='about-main'>
				<div className='about-main-left'>
					{/* sub-section 1 */}
					<p className='about-sub-head'>
						{t("ABOUT_PAGE_CONTENT.ABOUT_ME_PARA1")}
					</p>
					<p className='about-sub-head'>
						{t("ABOUT_PAGE_CONTENT.ABOUT_ME_PARA2")}
					</p>
					<p className='about-sub-head'>
						{t("ABOUT_PAGE_CONTENT.ABOUT_ME_PARA3")}
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
				phrase={t("ABOUT_PAGE_CONTENT.ABOUT_FOOTER_TEXT")}
				link={t("ABOUT_PAGE_CONTENT.ABOUT_FOOTER_LINK")}
				toAdress='/projects'
			/>
		</div>
	);
};
export default About;

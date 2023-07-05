import React from "react";
import "./Skills.css";
import Header from "../Header/Header";
import FooterLink from "../FooterLink/FooterLink";
import { skillList } from "../../assets/skillsData";
import SkillsCard from "./SkillsCard";
import { useTranslation } from "react-i18next";

const Skills = () => {
	//console.log(useTranslation);
	const { t } = useTranslation();
	return (
		<div className='section-container'>
			<Header
				heading={t("SkillPageContent.SkillPageHeading")}
				details={t("SkillPageContent.SkillPageDetails")}
			/>
			<div className='skill-card-container'>
				{skillList.map(({ skillName, skillUrl }) => (
					<SkillsCard
						key={skillName}
						skillName={skillName}
						skillUrl={skillUrl}
					/>
				))}
			</div>

			<FooterLink
				phrase={t("SkillPageContent.Get in")}
				link={t("SkillPageContent.touch!")}
				toAdress='/contact'
			/>
		</div>
	);
};
export default Skills;

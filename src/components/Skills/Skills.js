import React from "react";
import "./Skills.css";
import Header from "../Header/Header";
import FooterLink from "../FooterLink/FooterLink";
import { skillList } from "../../assets/skillsData";
import SkillsCard from "./SkillsCard";
import { useTranslation } from "react-i18next";

const Skills = () => {
	console.log(useTranslation);
	console.log(skillList);
	const { t } = useTranslation();
	return (
		<div className='section-container'>
			<Header
				heading={t("SKILL_PAGE_CONTENT.SKILL_PAGE_HEADING")}
				details={t("SKILL_PAGE_CONTENT.SKILL_PAGE_DETAIL")}
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
				phrase={t("SKILL_PAGE_CONTENT.GET_IN")}
				link={t("SKILL_PAGE_CONTENT.TOUCH")}
				toAdress='/contact'
			/>
		</div>
	);
};
export default Skills;

import React from "react";
import "./Skills.css";
import Header from "../Header/Header";
import FooterLink from "../FooterLink/FooterLink";
import { skillList } from "../../assets/skillsData";
import SkillsCard from "./SkillsCard";

const Skills = () => {
	return (
		<div className='section-container'>
			<Header
				heading=' My Skills!'
				details="Passionte about new technologies, I keep exploring stuff. Here's the  Tech stack I have worked with."
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

			<FooterLink phrase=' Get in ' link='touch!' toAdress='/contact' />
		</div>
	);
};
export default Skills;

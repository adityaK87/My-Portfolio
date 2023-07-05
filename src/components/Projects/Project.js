import React from "react";
import "./Project.css";
import Header from "../Header/Header";
import FooterLink from "../FooterLink/FooterLink";
import { ProjectData } from "../../assets/projectsData";
import ProjectsCard from "./ProjectsCard";
import { useTranslation } from "react-i18next";

const Project = () => {
	const { t } = useTranslation();
	const projectsData = ProjectData();
	return (
		<div className='section-container'>
			<Header
				heading={t("PROJECT_PAGE_CONTENT.PROJECT_PAGE_HEADING")}
				details={t("PROJECT_PAGE_CONTENT.PROJECT_PAGE_DETAIL")}
			/>

			<div className='project-card-container'>
				{projectsData?.map(
					({
						projectName,
						projectDescription,
						imageUrl,
						projectUrl,
						codeUrl,
					}) => {
						return (
							<ProjectsCard
								key={projectName}
								projectName={projectName}
								projectDescription={projectDescription}
								imageUrl={imageUrl}
								projectUrl={projectUrl}
								codeUrl={codeUrl}
							/>
						);
					}
				)}
			</div>

			<FooterLink
				phrase={t("PROJECT_PAGE_CONTENT.CHECK_OUT")}
				link={t("PROJECT_PAGE_CONTENT.SKILLS")}
				toAdress='/skills'
			/>
		</div>
	);
};
export default Project;

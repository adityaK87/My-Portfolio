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
				heading={t("ProjectPageContent.ProjectPageHeading")}
				details={t("ProjectPageContent.ProjectPageDetails")}
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
				phrase={t("ProjectPageContent.check out my")}
				link={t("ProjectPageContent.skills!")}
				toAdress='/skills'
			/>
		</div>
	);
};
export default Project;

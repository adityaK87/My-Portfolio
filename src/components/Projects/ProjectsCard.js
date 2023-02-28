import React from "react";
import "./Project.css";
import { AiFillGithub } from "react-icons/ai";
const ProjectsCard = ({
	projectName,
	projectDescription,
	imageUrl,
	projectUrl,
	codeUrl,
}) => {
	return (
		<div className='project-card'>
			<div className='image-container'>
				<a href={projectUrl} className='project-container-link'>
					<img
						loading='lazy'
						src={imageUrl}
						alt='project'
						className='project-image'
					/>
				</a>
			</div>
			<div div className='project-details'>
				<div className='project-detail-container'>
					<h2 className='project-heading'>{projectName}</h2>
					<p className='project-detail'>{projectDescription}</p>
				</div>
				<div className='buttons'>
					<a href={projectUrl} target='_blank' rel='noreferrer'>
						<button className='visit demo'>Demo</button>
					</a>
					<a href={codeUrl} target='_blank' rel='noreferrer'>
						<button className='visit code'>
							Get Code <AiFillGithub />
						</button>
					</a>
				</div>
			</div>
		</div>
	);
};
export default ProjectsCard;

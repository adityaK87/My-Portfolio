import React from 'react';
import './Project.css'
const ProjectsCard = ({
    projectName,
    projectDescription,
    imageUrl,
    projectUrl
}) => {
    return (
        <div className="project-card">
            <div className="image-container">
                <a href={projectUrl} className="project-container-link">
                    <img
                        src={imageUrl}
                        alt="project"
                        className="project-image" />
                </a>
            </div>
            <div className="project-detail-container">
                <h2 className="project-heading" >{projectName}</h2>
                <p className="project-detail">{projectDescription}</p>
            </div>
        </div>
    )
}
export default ProjectsCard;

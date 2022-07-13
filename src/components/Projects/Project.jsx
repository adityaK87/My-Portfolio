import React from 'react';
import './Project.css';
import Header from '../Header/Header'
import FooterLink from '../FooterLink/FooterLink';
import { projectsData } from '../../assets/projectsData'
import ProjectsCard from './ProjectsCard';



const Project = () => {
  return (
    <div className='section-container'>
      <Header
        heading="My Projects"
        details="Here are a few cool things I've worked on , do check them out. "
      />

      <div className="project-card-container">
        {
          projectsData.map(({
            projectName,
            projectDescription,
            imageUrl,
            projectUrl
          }) => {
            return <ProjectsCard
              projectName={projectName}
              projectDescription={projectDescription}
              imageUrl={imageUrl}
              projectUrl={projectUrl} />

          })
        }
      </div>

      <FooterLink
        phrase=" check out "
        link=" my skills!"
        toAdress="/skills"
      />

    </div>
  );
};
export default Project;

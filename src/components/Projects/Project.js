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
        heading="My Projects!"
        details="Here are a few cool things I've worked on , Do check them out. "
      />

      <div className="project-card-container">
        {
          projectsData.map(({
            projectName,
            projectDescription,
            imageUrl,
            projectUrl,
            codeUrl
          }) => {
            return <ProjectsCard
              key={projectName}
              projectName={projectName}
              projectDescription={projectDescription}
              imageUrl={imageUrl}
              projectUrl={projectUrl}
              codeUrl={codeUrl} />
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

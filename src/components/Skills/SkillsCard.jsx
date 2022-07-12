import React from 'react';
import './Skills.css'

const SkillsCard=({skillName,skillUrl})=>{
    return(
        <div className="skill">
            <img src={skillUrl} alt="skill" />
            <p>{skillName}</p>
        </div>
    )
}

export default SkillsCard;
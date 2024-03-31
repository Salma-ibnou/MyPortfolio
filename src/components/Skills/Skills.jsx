import { useState } from 'react'
import { SKILLS } from '../../utils/data'
import './Skills.css'
import SkillCard from './SkillsCard/SkillCard'
import SkillsInfoCard from './SkillsInfoCard/SkillsInfoCard'


const Skills = () => {
  const [selectedSkill,setSelectedSkill]=useState(SKILLS[0]);
  const handleSelectSkill =(data)=>{
    setSelectedSkill(data);
  }
  return (
    <div>
      <section className="skills-container">
        <h5>Technical Proficiency</h5>
        <div className="skills-content">
            <div className="skills">
              {SKILLS.map((item)=>(
                <SkillCard 
                key={item.title}
                title={item.title}
                iconUrl={item.icon}
                isActive={selectedSkill.title===item.title}
                onClick={()=>{
                  handleSelectSkill(item);
                }}
               />
              ))}
            </div>
            <div className="skills-info">
             <SkillsInfoCard 
             heading={selectedSkill.title}
             skills={selectedSkill.skills}
             />
            </div>
        </div>
      </section>
    </div>
  )
}

export default Skills

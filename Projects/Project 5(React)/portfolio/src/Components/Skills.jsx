import React from "react";
import "./Skills.css";
function Skills(){
    const coreTechnical = ["HTML","JavaScript","React.js","Angular","Express.js","Node.js","C++","Java",".NET"];
    const softSkills = ["Team Work","Organized"];
    const tools = [ "Git","Postman"];
    return(
        <>
            <section className="skills" id="skills">
                <div className="skills-container">
                    <h2>My Skills</h2>

                    <div className="skills-section">
                        <h3>Core Technical Skills</h3>
                        <div className="skills-grid">
                            {coreTechnical.map((skill, index)=>(
                                <div className="skill-card" key={index}>{skill}</div>
                            ))}
                        </div>
                    </div>

                    <div className="skills-section">
                        <h3>Tools</h3>
                        <div className="skills-grid">
                            {tools.map((skill, index)=>(
                                <div className="skill-card" key={index}> {skill}</div>
                            ))}
                        </div>
                    </div>

                    <div className="skills-section">
                        <h3>Soft Skills</h3>
                        <div className="skills-grid">
                            {softSkills.map((skill, index)=>(
                                <div className="skill-card" key={index}> {skill}</div>
                            ))}
                        </div>
                    </div>
                    
                </div>
            </section>        
        </>
    )
}

export default Skills;
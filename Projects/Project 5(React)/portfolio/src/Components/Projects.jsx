import React from "react";
import "./Projects.css"
function Projects(){
    const projectData = [
    {
      title: "Portfolio Website",
      description:
        "A responsive personal portfolio website built using React.js to showcase skills, projects, and contact information.",
      tech: "React.js, CSS, React Router"
    },
    {
      title: "Student Management System",
      description:
        "A CRUD-based web application to manage student records with authentication and database integration.",
      tech: "Express.js, React.js,Node.js, MySQL"
    },
    {
      title: "LangChain Document Assistant",
      description:
        "An AI-powered application that reads TXT, PDF, and DOCX files and answers user queries using LangChain.",
      tech: "Python, LangChain, Groq API"
    }
  ];

  return(
    <>
        <section className="projects" id="projects">
            <div className="projects-container">
                <h2>My Projects</h2>

                <div className="projects-grid">
                    {projectData.map((project, index)=>(
                        <div className="project-card" key={index}>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <span>{project.tech}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </>
  )

}

export default Projects;
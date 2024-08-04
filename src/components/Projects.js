import React from 'react';
import './Projects.css';

const projects = [
    {
        name: "Hotel Management System",
        description: "Developed a hotel management system using Python and MySQL.",
        githubUrl: "https://github.com/Vishnu51cse/Resort_Backend"
    },
    {
        name: "Django Login and Signup Authentication",
        description: "Implemented authentication mechanisms using Django framework.",
        githubUrl: "https://github.com/Vishnu51cse/Django_Authentication"
    },
    {
        name: "Smart Grade Convertor using Html,Css,Js",
        description:"Efficiently convert your marks to grades.",
        githubUrl:"https://github.com/Vishnu51cse/Web"
    }

];

const Projects = () => {
    return (
        <div className="projects-container my-5 p-3 p-md-5">
            <h2>My Projects</h2>
            <div className="projects-list">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <h3>{project.name}</h3>
                        <p>{project.description}</p>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <button>View on GitHub</button>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;

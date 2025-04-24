import React from "react";
import { createRoot } from 'react-dom/client'
function App() {
  const projects = [
    { id: 1, name: "Social Media Clone", tech: "React, Firebase" },
    { id: 2, name: "E-Commerce Platform", tech: "React, Redux" },
    { id: 3, name: "Portfolio Website", tech: "React, Raw CSS" },
  ];

  return (
    <div>
      {/* Raw CSS Inside Style Tag */}
      <style>
        {`
          body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            display: flex;
            justify-content: center;
          }
          .container {
            max-width: 700px;
            padding: 20px;
            background: white;
            border-radius: 10px;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
          }
          h1, h2 {
            color: #008CBA;
          }
          .about, .projects, .contact {
            margin-bottom: 20px;
            padding: 10px;
            background: #ffffff;
            border-radius: 5px;
            box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
          }
          .project {
            padding: 10px;
            border-bottom: 1px solid #ddd;
          }
          .links a {
            display: inline-block;
            margin-right: 10px;
            color: #008CBA;
            text-decoration: none;
          }
          .links a:hover {
            text-decoration: underline;
          }
        `}
      </style>

      <div className="container">
        {/* About Section */}
        <div className="about">
          <h1>Rohan's Portfolio</h1>
          <p>Hello! I'm a passionate frontend developer specializing in React. I love building interactive web applications that enhance user experience.</p>
        </div>

        {/* Projects Section */}
        <div className="projects">
          <h2>Projects</h2>
          {projects.map((project) => (
            <div key={project.id} className="project">
              <h3>{project.name}</h3>
              <p>Tech Used: {project.tech}</p>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="contact">
          <h2>Contact Me</h2>
          <div className="links">
            <a href="https://github.com/yourgithub" target="_blank">GitHub</a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank">LinkedIn</a>
            <a href="mailto:youremail@example.com">Email</a>
          </div>
        </div>
      </div>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App/>)
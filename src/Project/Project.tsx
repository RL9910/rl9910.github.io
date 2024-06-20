import { useNavigate } from "react-router-dom";
import "./Project.css";
import tubeinsightLogo from "../assets/tubeinsight.png";
import easyjobLogo from "../assets/easyjob.png";

const projectList = [
    {
        name: "EasyJob",
        logo: easyjobLogo,
        description: "EasyJob allows users to build and tailer made their resume and cover letter with AI assistance with additional function for users to search for jobs.",
        technologies: ["React", "Material-UI", "TypeScript", "Node.js", "Express"],
        link: "/project/easyjob"
    },
    {
        name: "TubeInsight",
        logo: tubeinsightLogo,
        description: "TubeInsight allows users to generate ideas and insights for YouTube videos with AI. Also an online forum for users to share their ideas with each other.",
        technologies: ["HTML", "CSS", "JavaScript", "TypeScript", "Node.js", "Express" ],
        link: "/project/tubeinsight"
    },
    
]

export function Project(){

    const navigate = useNavigate();
    return (
        <div className="project-container">
            <h1>Project</h1>
            <p className="about-paragraph">Here are some of the projects I have worked on.</p>
            <div className="project-card-container">
                {projectList.map((project) => (
                    <div className="project-card" key={project.name}>
                        <button className="image-button" onClick={()=>navigate(project.link)}>
                            <img src={project.logo} alt={project.name} className="button-img"/>
                            <div className="overlay">
                                <span className="overlay-text">Click to learn more</span>
                            </div>
                        </button>
                        
                        <div className="project-card-info">
                            <h2>{project.name}</h2>
                            <p>{project.description}</p>
                            <div className="project-card-tech-container">
                            {project.technologies.map((tech) => (
                                <div className="project-card-tech" key={tech}>{tech}</div>
                            ))}
                            </div>
                        
                        </div> 

                        
                    </div>
                ))
                }
            </div>
            
        </div>
    );
}
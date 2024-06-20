import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./EasyJob.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointUp } from '@fortawesome/free-solid-svg-icons';
import jobSearchPage from "../assets/Jobsearchpage.png";
import jobSearch2 from "../assets/JobSearch2.png";
import JobSearch3 from "../assets/JobSearch3.png";
import dashboard1 from "../assets/dashboard1.png";
import dashboard2 from "../assets/dashboard2.png";
import dashboard3 from "../assets/dashboard3.png";
import CVBuilder1 from "../assets/CVBuilder1.png";
import CVBuilder2 from "../assets/CVBuilder2.png";
import CVBuilder3 from "../assets/CVBuilder3.png";
import CoverletterBuilder1 from "../assets/CoverletterBuilder1.png";
import easyjobErd from "../assets/easyjob-erd.png";
import easyjobtech from "../assets/easyjobtech.png";


export function EasyJob(){
    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <div className="easyjob-container project-page">
            <button className="back-home-button" onClick={()=>navigate("/")}>Back</button>
            <div className="project-content-container">
                <h1>EasyJob</h1>
                <p>EasyJob allows users to build and tailer made their resume/cv and cover letter with AI assistance with additional function for users to search for jobs.</p>
                <p>This my my first project using react to build the frontend, the node.js/express server backend uses the 
                    MVC architecture, controllers and services, to handle the requests and responses of the browser, and the database is managed by Postgresql with knex.js as the query builder.
                </p>
                <h2>Tech stack</h2>
                <div>
                    <img src={easyjobtech} alt="easyjobtech" className="project-img"></img>
                </div>
                <h2>Entity Relationship Diagram</h2>
                <div>
                    <img src={easyjobErd} alt="jobSearchPage" className="project-img"></img>
                </div>
                <h2>Job Search</h2>
                <div>
                    <img src={jobSearchPage} alt="jobSearchPage" className="project-img"></img>
                </div>
                <div>
                    <img src={jobSearch2} alt="jobSearchPage" className="project-img"></img>
                </div>
                <div>
                    <img src={JobSearch3} alt="jobSearchPage" className="project-img"></img>
                    <div> <FontAwesomeIcon icon={faHandPointUp} /> Job data scraped from JobsDB with Playwright</div>
                </div>
                <h2>Dashboard to display Resumes and Cover letters</h2>
                <div>
                    <img src={dashboard1} alt="dashboard" className="project-img"></img>
                </div>
                <h2>Resume Builder</h2>
                <div>
                    <img src={CVBuilder1} alt="CVBuilder" className="project-img"></img>
                </div>
                <div>
                    <img src={CVBuilder2} alt="CVBuilder" className="project-img"></img>
                    <div> <FontAwesomeIcon icon={faHandPointUp} /> Ask AI to analyze your input and provide suggestions.</div>
                </div>
                <div>
                    <img src={CVBuilder3} alt="CVBuilder" className="project-img"></img>
                    <div><FontAwesomeIcon icon={faHandPointUp} /> Users can choose different templates for their resume.</div>
                </div>
                <h2>Cover Letter Builder</h2>
                <div>
                    <img src={CoverletterBuilder1} alt="CoverLetterBuilder" className="project-img"></img>
                </div>
                <h2>Tailor-made of Resume and Cover letter with AI </h2>
                <div>
                    <img src={dashboard2} alt="dashboard" className="project-img"></img>
                </div>
                <div>
                    <img src={dashboard3} alt="dashboard" className="project-img"></img>
                    <div><FontAwesomeIcon icon={faHandPointUp} /> Provide job requirements and allow AI to tailor-made your Resumes and Cover Letters</div>
                </div>
                <div className="website-link-container">
                    <a className="website-link" href="https://www.alfredcode.online">Check out the Website</a>
                </div>
                
                
            </div>
            
        </div>
    );
}
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import inspiration from "../assets/inspiration.png";
import forum1 from "../assets/forum1.png";
import forum2 from "../assets/forum2.png";
import forum3 from "../assets/forum3.png";
import forum4 from "../assets/forum4.png";
import forum5 from "../assets/forum5.png";
import forum6 from "../assets/forum6.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointUp } from "@fortawesome/free-solid-svg-icons";

export function TubeInsight() {
    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <div className="tube-insight-container project-page">
            <button className="back-home-button" onClick={()=>navigate("/")}>Back</button>
            <div className="project-content-container">
                <h1>TubeInsight</h1>
                <p>TubeInsight allows users to generate ideas and insights for YouTube videos with AI. It is also an online forum for users to share their ideas with each other.</p>
                <p>This is a coding exercise for practicing fullstack development of an application from coding to deployment with shell script and github action. The frontend of this website is built by HTML, CSS and Javascript which are static assets handle by the node.js/express server, the backend uses MVC architecture which handle requests and responses by controllers and services,
                    and the database is managed by Postgresql with knex.js as the query builder. 
                </p>
                <h2>Idea Inspiration</h2>
                <div>
                    <img src={inspiration} alt="idea-inspiration" className="project-img"></img>
                    <div> <FontAwesomeIcon icon={faHandPointUp} /> Idea and storyline suggestion/generation using OpenAI API</div>
                </div>
                <h2>Online Forum</h2>
                <div>
                    <img src={forum1} alt="forum1" className="project-img"></img>
                </div>
                <div>
                    <img src={forum2} alt="forum2" className="project-img"></img>
                    <div> <FontAwesomeIcon icon={faHandPointUp} /> Create new post</div>
                </div>
                <div>
                    <img src={forum3} alt="forum3" className="project-img"></img>
                    
                </div>
                <div>
                    <img src={forum4} alt="forum4" className="project-img"></img>
                    <div> <FontAwesomeIcon icon={faHandPointUp} /> Comment to post</div>
                </div>
                <div>
                    <img src={forum5} alt="forum5" className="project-img"></img>
                </div>
                <div>
                    <img src={forum6} alt="forum6" className="project-img"></img>
                    <div> <FontAwesomeIcon icon={faHandPointUp} /> Edit/delete function with listing of the picture in the comment that can delete individually</div>
                </div>
        
            </div>
            
        </div>
    );
}
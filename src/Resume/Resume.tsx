import { useNavigate } from "react-router-dom"
import resume  from "../assets/resume.png"
import "./Resume.css"

export function Resume(){

    const navigate = useNavigate();
    return (
        <div className="resume-container">
            <button className="back-home-button" onClick={()=>navigate("/")}>Back</button>
            <h2>My Resume</h2>
           
            <img src={resume} alt="resume" className="resume-image"></img>
        </div>
    )
}
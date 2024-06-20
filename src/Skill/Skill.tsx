import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Skill.css";
import { faCode, faDatabase, faServer } from "@fortawesome/free-solid-svg-icons";
import { faImage } from "@fortawesome/free-regular-svg-icons";

export function Skill() {
    return (
        <div className="skill-container">
            <h1>Skill</h1>

            <div className="tech-skill-container">
                <div className="category-container">
                    <h2>
                        <FontAwesomeIcon icon={faCode} className="language-icon"/>
                        <div>Programming Languages</div>
                    </h2>
                    <div className="items">
                       
                        <p>Typescript</p>
                        <p>JavaScript</p>
                        <p>Java</p>
                        <p>Python</p>
                    </div>
                </div>
                <div className="category-container">
                    <h2>
                        <FontAwesomeIcon icon={faImage} className="frontend-icon" />
                        <div>Frontend</div>
                    </h2>
                    <div className="items">
                        <p>React</p>
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>JavaScript</p>
                    </div>
                </div>
                <div className="category-container">
                    <h2>
                        <FontAwesomeIcon icon={faServer} className="backend-icon" />
                        <div>Backend</div>
                    </h2>
                    <div className="items">
                        <p>Node.js</p>
                        <p>Express</p>
                        <p>Springboot</p>
                    </div>
                </div>
                <div className="category-container">
                    <h2>
                        <FontAwesomeIcon icon={faDatabase} className="database-icon" />
                        <div>Database</div>
                    </h2>
                    <div className="items">
                        <p>Postgresql</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
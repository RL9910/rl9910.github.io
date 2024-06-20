import { Button } from 'react-scroll';
import './Home.css';
import { useNavigate } from 'react-router-dom';

export function Home() {
    const navigate = useNavigate()
    return (
        <div className="home-container">
            <div className="home-content-container">
                <h1>Hello, I am Richard Lee</h1>
                <h2>Web developer</h2>
                <div>
                     <button className="resume-button" onClick={()=>navigate("/resume")}>Click to see my resume</button>
                </div>
               
            </div>
        </div>
    );
}
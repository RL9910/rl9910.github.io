import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.css";

export function Footer() {
    return (
        <footer className="footer-container">
            <div>Made with <FontAwesomeIcon className="heart-icon" icon={faHeart}/> using React</div>
            <div>By Richard Lee</div>
        </footer>
    );
}
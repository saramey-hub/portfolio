import { Link } from "react-router-dom";
import image2 from "../assests/image 2.svg";
import "../styles/Projects.css"

function Projects() {
    return (
        <>
            <div className="button">
                <div className="butons">
                    <Link to="/about"><button>about</button></Link>
                    <Link to="/projects"><button className="button-about">projects</button></Link>
                    <Link to="/resume"><button>resume</button></Link>
                    <Link to="/contact"><button>contact</button></Link>
                </div>
            </div>

            <div className="Projets">

                <h1>PROJECTS
                    <img src={image2} alt="icon 1" className="portfolio-icon" />
                </h1>

            </div>
        </>
    );
}

export default Projects;

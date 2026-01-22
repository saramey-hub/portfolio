import {Link} from "react-router-dom";

function Projects() {
    return (
        <div>
            <div className="button">

                <div className="butons">

                    <Link to="/about">
                        <button>about</button>
                    </Link>
                    <Link to="/projects"><button className="button-about">projects</button></Link>
                    <Link to="/resume"><button>resume</button></Link>
                    <Link to="/contact"><button>contact</button></Link>

                </div>
        </div>
        </div>
    );
}

export default Projects;

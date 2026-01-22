import {Link} from "react-router-dom";
import "../styles/Resume.css"
import "../assests/image 2.svg"

function Resume() {
    return (
        <div>
            <div className="button">

                <div className="butons">

                    <Link to="/about">
                        <button>about</button>
                    </Link>
                    <Link to="/projects"><button>projects</button></Link>
                    <Link to="/resume"><button className="button-about">resume</button></Link>
                    <Link to="/contact"><button>contact</button></Link>

                </div>
            </div>
        </div>
    );
}

export default Resume;
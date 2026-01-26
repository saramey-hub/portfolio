import {Link} from "react-router-dom";
import "../styles/Resume.css"
import "../assests/image 2.svg"
import "../assests/image 4.svg"
import image4 from "../assests/image 4.svg"
import image2 from "../assests/image 2.svg";


function Resume() {
    return (
        <>
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

            <div className="text">

                <a
                    href="/cv MEHDAOUI Sara .png"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    you can download my resume by clicking here !
                    <img src={image4} alt="icon 2" className="portfoli-icon" />
                </a>




            </div>
                <div className="Resume">
                <h1>RESUME
                    <img src={image2} alt="icon 1" className="portfolio-icon" />
                </h1>


            </div>





        </>
    );
}

export default Resume;
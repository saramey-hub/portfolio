import {Link} from "react-router-dom";
import "../styles/Contact.css"
import "../assests/image 2.svg"
import image2 from "../assests/image 2.svg";


function Contact() {
    return (
        <>
            <div className="button">

                <div className="butons">

                    <Link to="/about">
                        <button>about</button>
                    </Link>
                    <Link to="/projects"><button>projects</button></Link>
                    <Link to="/resume"><button>resume</button></Link>
                    <Link to="/contact"><button className="button-about">contact</button></Link>

                </div>
            </div>


        <div className="contact">


<h1>CONTACT
    <img src={image2} alt="icon 1" className="portfolio-icon" />
</h1>





        </div>



        </>


    );
}

export default Contact;
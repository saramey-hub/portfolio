import {Link} from "react-router-dom";
import "../styles/Contact.css"
import image2 from "../assests/image 2.svg";
import phone from "../assests/phone.png";
import mail from "../assests/mail.png";
import git from "../assests/git.png";
import link from "../assests/link.png";


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

            <p>
       <img src={phone} alt="icon 1" className="icon" />

            </p>

<p>
    <img src={mail} alt="icon 1" className="icon" />
</p>

            <p>
                <img src={link} alt="icon 1" className="icon" />
            </p>

            <p>
                <img src={git} alt="icon 1" className="icon20" />
            </p>

        </div>



        </>


    );
}

export default Contact;
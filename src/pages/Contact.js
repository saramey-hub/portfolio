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
       <img src={phone} alt="icon 1" className="icon" />+33 06 29 22 89 62</p>

<p>
    <img src={mail} alt="icon 1" className="icon" />smeehdaoui@gmail.com</p>

            <p>
                <img src={link} alt="icon 1" className="icon" />
                <a
                    href= "https://www.linkedin.com/in/sara-mehdaoui-ba58122b5/"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    sara's linkedin (click !)
                </a>
            </p>

            <p>
                <img src={git} alt="icon 1" className="icon20" />
                <a
                    href= "https://github.com/saramey-hub"
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    saramey-hub
                </a>
            </p>

        </div>



        </>


    );
}

export default Contact;
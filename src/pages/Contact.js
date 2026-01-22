import {Link} from "react-router-dom";

function Contact() {
    return (
        <div>
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
        </div>
    );
}

export default Contact;
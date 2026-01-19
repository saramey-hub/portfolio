import "../styles/Acceuil.css"
import image2 from "../assests/image 2.svg"
import {Link} from "react-router-dom";


function Acceuil() {
    return (



        <div className="button">

            <div className="buttons">

                <Link to="/about"><button>about</button></Link>
                <Link to="/projects"><button>projects</button></Link>
                <Link to="/resume"><button>resume</button></Link>
                <Link to="/contact"><button>contact</button></Link>

            </div>




            <div className="Acceuil">
            <h3>my</h3>
            <h1>PORTFOLIO
                <img src={image2} alt="icon 1" className="portfolio-icon" />
            </h1>
            <h4>made by sara</h4>







            </div>


        </div>
    )
}


export default Acceuil;



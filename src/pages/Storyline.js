import "../styles/Storyline.css"
import "../assests/image 2.svg"
import {Link} from "react-router-dom";
import image2 from "../assests/image 2.svg";
import c from "../assests/c.png"
import csharp from "../assests/csharp.png"
import css from "../assests/css.png"
import flask from "../assests/flask.png"
import flutter from "../assests/flutter.png"
import html from "../assests/html.png"
import js from "../assests/js.png"
import php from "../assests/php.png"
import python from "../assests/python.png"
import react from "../assests/react.png"

function Storyline() {

    return (




           <div className="button">

               <div className="butons">

                   <Link to="/about">
                       <button className="button-about">about</button>
                   </Link>
                   <Link to="/projects"><button>projects</button></Link>
                   <Link to="/resume"><button>resume</button></Link>
                   <Link to="/contact"><button>contact</button></Link>

               </div>



               <div className="About">

                   <h1>ABOUT</h1>
                   <h4>me
                       <img src={image2} alt="icon 1" className="portfolio-icon" />
                   </h4>

                   <p>
                       Bienvenue ! Je suis Sara Mehdaoui, étudiante en deuxième année de Bachelor <br/> Développeur d’Applications Informatiques au CESI.<br/>
                       Passionnée par le développement web et mobile, je crée des projets interactifs.<br/>
                       Je suis actuellement à la recherche d’une alternance <br/> pour mettre mes compétences en pratique et relever de nouveaux défis techniques.<br/>
                       N’hésitez pas à parcourir ce portfolio pour en savoir plus et à me contacter !
                   </p>

               </div>

 < div className ="skills">

     <h2>
         SKILLS & TECHNOLOGIES
     </h2>






 </div>

               <div className="tech-section">

                   <div className="tech-card">
                       <h3>front-end</h3>
                       <div className="tech-logos">
                           <div className="logo-placeholder"></div>
                           <div className="logo-placeholder"></div>
                           <div className="logo-placeholder"></div>
                           <div className="logo-placeholder"></div>
                           <div className="logo-placeholder"></div>
                       </div>
                   </div>

                   <div className="tech-card">
                       <h3>back-end</h3>
                       <div className="tech-logos">
                           <div className="logo-placeholder"></div>
                           <div className="logo-placeholder"></div>
                           <div className="logo-placeholder"></div>
                           <div className="logo-placeholder"></div>
                       </div>
                   </div>

                   <div className="tech-card3">
                       <h3>divers</h3>
                       <div className="tech-logos">
                           <div className="logo-placeholder"></div>
                           <div className="logo-placeholder"></div>
                           <div className="logo-placeholder"></div>
                           <div className="logo-placeholder"></div>
                       </div>
                   </div>

                   <div className="tech-card">
                       <h3>experience</h3>
                       <div className="tech-logos">
                           <div className="logo-placeholder"></div>
                           <div className="logo-placeholder"></div>
                           <div className="logo-placeholder"></div>
                       </div>
                   </div>

               </div>













           </div>


        )
}



export default Storyline;
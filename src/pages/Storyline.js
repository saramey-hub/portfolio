import "../styles/Storyline.css"
import "../assests/image 2.svg"
import {Link} from "react-router-dom";
import image2 from "../assests/image 2.svg";

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
huikolksfrgttttttttttffvdgj

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

                   <div className="tech-card">
                       <h3>experience</h3>
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
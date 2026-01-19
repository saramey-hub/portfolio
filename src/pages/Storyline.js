import "../styles/Storyline.css"
import "../assests/image 2.svg"
import {Link} from "react-router-dom";

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

       </div>


        )
}



export default Storyline;
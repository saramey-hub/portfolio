import "../styles/Acceuil.css"
import image2 from "../assests/image 2.svg"
import image3 from "../assests/image 3.svg"

function Acceuil() {
    return (



        <div className="Section">
            <div className= "section-card">storyline</div>
            <div className= "section-card">projects</div>
            <div className="section-card">resume</div>
            <div className="section-card">contact</div>






            <div className="Acceuil">
            <h3>my<img src={image3} alt="icon 2"/></h3>
            <h1>PORTFOLIO <img src={image2} alt="icon 1"/></h1>
            <h4>made by sara</h4>






        </div>



        </div>
    )
}


export default Acceuil;
import "../styles/Acceuil.css"
import image2 from "../assests/image 2.svg"


function Acceuil() {
    return (



        <div className="button">

            <div className="buttons">

                <button>about</button>
                <button>projects</button>
                <button>resume</button>
                <button>contact</button>
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



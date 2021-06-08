import React from "react"; 
import "./Home.scss";
const Home = () => {
    return (
        <div className="home">
             <div className="name">
                Ashish Kumar
            </div>
            
            <img src={require("../assets/sitting.png")} alt="boy"/>
            <div className="work">
                Frontend Web Developer
            </div>
        </div>
    )
}
export default Home;
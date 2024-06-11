import { useContext } from "react";
import Navbar from "../common/Navbar/navbar";
import "./homepage.css";
import PointsContext from '../../context/pointsContext.js';


const Homepage = () => {
    const contextValues = useContext(PointsContext);

    return(
        <div > 
            <Navbar  page="homepage" userPoints={contextValues.userPoints} setUserpoints= {contextValues.setUserpoints}/>
            <div className="homepage-main-container">
            comming soon...
        </div>
        
        </div>

    )
}

export default Homepage;
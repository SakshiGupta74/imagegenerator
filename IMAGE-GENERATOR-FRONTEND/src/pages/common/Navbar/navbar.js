import { useContext } from "react";
import { Link } from 'react-router-dom';
import PointsContext from "../../../context/pointsContext";
import "./navbar.css"



const Navbar = (props) => {
    const contextValues = useContext(PointsContext);
    const page = props.page;

    const customcolor = (x) => {
        return { color: page === x ? 'black' : 'white' }
    }
    
    return (
        <div className='header-parent-container'>
            <div className='left'>
                <Link to="/home" style={customcolor('homepage')}>Home</Link>
                <Link to="/image-generator" style={customcolor('imageGenerator')} >Image Generator</Link>
                <Link to="/history" style={customcolor('history')}>History</Link>
                <Link to="/contact" style={customcolor('Contact Us')}>Contact Us</Link>
                <Link to="/help" style={customcolor('help')}>Help</Link>
                <Link to="/signup" style={customcolor('signup')}>Signup</Link>
                <Link to="/login" style={customcolor('login')}>Login</Link>

            </div>
            <div className="right" style={{ padding: '4px', color: 'brown' }}>
                {contextValues.userPoints}

            </div>
            {contextValues.isLoggedIn?
                <button onClick={contextValues.logout}>Logout</button>
                : <button onClick={contextValues.login}>Login</button>
            }
        </div>
    )
}

export default Navbar;
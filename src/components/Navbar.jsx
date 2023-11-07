import { Link } from "react-router-dom";
import '../index.css'


export default function Navbar() {
    return (
        <div className="navbar">            
            <div className="navbar-item">
                <Link to="/"><h4>Home</h4></Link>
                <Link to="/about"><h4>About</h4></Link>
                <Link to="/project"><h4>Project</h4></Link>
                <Link to="/contact"><h4>Contact</h4></Link>
            </div>
        </div>
    )
}
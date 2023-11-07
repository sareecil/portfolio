import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../index.css'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div className="content">
            <div className="nav">
                <Link to="/project"><h2>Project</h2></Link>
                <Link to="/about"><h2>About</h2></Link>
                <Link to="/contact"><h2>Contact</h2></Link>
            </div>
            <div className="title">
                <h1>SARE</h1>                
            </div>
            <div className="subtitle">
                <h1>CIL</h1>
                <p>Front-end Developer</p>
            </div>
        </div>
    )
}
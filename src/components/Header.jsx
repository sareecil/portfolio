import '../index.css'
import Navbar from './Navbar'
import image1 from '../assets/img/pipedrive-1.png'
import image2 from '../assets/img/pipedrive-2.png'
import image3 from '../assets/img/pipedrive-3.png'



export default function Header() {
    return(
        <>
            <Navbar/>
            <div className="projects">
                <div className="p-title">
                    <h1>Projects</h1>
                    <div className="boxs">
                        <div className="box">
                            <img src={image1} alt="" />
                        </div>
                    </div>
                </div>
                

            </div>
        </>
    )
}
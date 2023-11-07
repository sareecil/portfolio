import '../index.css'
import Navbar from './Navbar'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from '../assets/img/pipedrive-1.png'
import image2 from '../assets/img/pipedrive-2.png'


export default function Header() {
    return(
        <>
            <Navbar/>
            <div className="projects">
                <div className="p-title">
                    <h1>Projects</h1>
                </div>
                <AliceCarousel autoPlay autoPlayInterval="1000">
                <img src={image1} className="sliderimg" width="200px" alt=""/>
                <img src={image2} className="sliderimg" alt=""/>
                </AliceCarousel>
            </div>
        </>
    )
}
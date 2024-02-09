import { gsap } from 'gsap';
import { ScrollTrigger } from '../plugins/gsap/ScrollTrigger.js';
import { SplitText } from '../plugins/gsap/SplitText.js';
import Jumbotron from './jumbotron/Jumbotron';
import Navbar from './Navbar.jsx';
import Intro from './Intro.jsx';
import Footer from './Footer.jsx';
import Carousel from './carousel/Carousel.jsx';
import ServiceOfferings from './Services/ServiceOfferings.jsx';
gsap.registerPlugin(ScrollTrigger, SplitText);



export default function Main(props) {
    return (
        <>
            <div className='main'>
                <Navbar />
                <section classes="spacer">
                    <div className="content">
                        <Jumbotron isLoading={props.isLoading} />
                    </div>
                </section>
                <section className="spacer">
                    <div className="content">
                        <Intro  
                            setModalVideoIsShowing={props.setModalVideoIsShowing} 
                            setVideoSource={props.setVideoSource} 
                        />
                    </div>
                </section>
                <section className="spacer">
                    <div className="content">
                        <Carousel />
                    </div>
                </section>
                <section className="spacer">
                    <div className="content">
                        <ServiceOfferings />
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}

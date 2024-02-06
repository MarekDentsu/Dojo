import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import Jumbotron from './jumbotron/Jumbotron';
import Navbar from './Navbar.jsx';
import Intro from './Intro.jsx';
import Footer from './Footer.jsx';
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
                <section className="spacer white">
                    <div className="content">
                        <Intro />
                    </div>
                </section>
                <section className="spacer black">
                    {/* <div className="content">
                        <h2>
                            Turn tech hype <br />
                            into prototypes <br />
                            that prove value
                        </h2>
                    </div> */}
                </section>
            </div>
            <Footer />
        </>
    )
}

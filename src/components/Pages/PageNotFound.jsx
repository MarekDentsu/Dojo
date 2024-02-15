import '../../scss/app.scss';
import { createContext } from 'react';
import useResize from '../../hooks/UseResize.js';
import StickyLogo from '../StickyLogo.jsx';
import Navbar from '../Navbar.jsx';
import Footer from '../Footer.jsx';
import { Link } from 'react-router-dom';

export const ModalContext = createContext();

function PageNotFound() {

    // hooks
    const size = useResize();

    return (

        <div className="wrapper">

            <div className="main">
                <Navbar />
                <section classes="spacer">
                    <div className="content">

                        <div className="copy-holder">
                            <h1>Oops!</h1>
                            <h3>Page not found!</h3>
                            <p>
                                <Link to={"/"}>
                                    <button className="simple">
                                        Take me home
                                    </button>
                                </Link>
                            </p>

                        </div>

                    </div>
                </section>
            </div>

            {(size.width > 1024)
                ?
                <StickyLogo />
                : null
            }
        </div>
    )
}

export default PageNotFound
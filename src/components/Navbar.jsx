import dcDojoLockupURL from '../assets/dc-dojo-lockup-landscape.svg'
import dcLockupURL from '../assets/dc-lockup-small.svg'
import logoTabletURL from '../assets/dojo-logo-tablet.svg'
import logoMobileURL from '../assets/dojo-logo-mobile.svg'
import useResize from '../hooks/UseResize'
import { Link } from 'react-router-dom'


export default function Navbar(props) {
    const size = useResize();

    return (
        <nav>
            <div className='navbar content flex'>
                <Link to={"/"}>
                    <img className='logo' src={(size.width > 600) ? logoTabletURL : logoMobileURL} alt="Dojo Logo" />
                </Link>
                <a
                    href="https://www.dentsucreative.com/location/australia"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img className='lockup opacity-hover grey-to-white' src={(size.width > 600) ? dcDojoLockupURL : dcLockupURL} alt="DC / DOJO" />
                </a>
            </div>
        </nav>
    )
}



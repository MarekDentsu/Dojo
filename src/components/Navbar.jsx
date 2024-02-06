import dcDojoLockupURL from '../assets/dc-dojo-lockup-landscape.svg'
import dcLockupURL from '../assets/dc-lockup-small.svg'
import logoTabletURL from '../assets/dojo-logo-tablet.svg'
import logoMobileURL from '../assets/dojo-logo-mobile.svg'
import useResize from '../hooks/UseResize'


export default function Navbar(props) {
    const size = useResize();

    return (
        <nav>
            <div className='navbar content flex'>
                <img className='logo' src={(size.width > 600) ? logoTabletURL : logoMobileURL} alt="Dojo Logo" />    
                <img className='lockup' src={(size.width > 600) ? dcDojoLockupURL : dcLockupURL} alt="DC / DOJO" />    
            </div>
        </nav>
    )
}
  


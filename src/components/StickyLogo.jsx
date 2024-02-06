import Logo from '../assets/dojo-logo-desktop.svg'
import DC from '../assets/dc-lockup-landscape.svg'


export default function StickyLogo(props) {
    return (
      <div className='sticky-logo'>
        <div className='sticky'>
          <img className='dojo' src={Logo} alt='DOJO' />
          <img className='dc' src={DC} alt='DOJO' />
          <h3>
            Creative <br />
            Innovation <br />
            Lab
          </h3>
          <p>
            Unleash your <br />
            innovation
          </p>
        </div>
      </div>
    )
  }
  
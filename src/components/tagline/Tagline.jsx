import React from 'react'

import dojoD from './../../assets/images/dojo-d-white.svg'
import dojoO1 from './../../assets/images/dojo-o1-white.svg'
import dojoJ from './../../assets/images/dojo-j-white.svg'
import dojoO2 from './../../assets/images/dojo-o2-white.svg'



export default function Tagline() {
  
  return (
    <section className="tagline black">
        <div className="corner-icons">
            <img src={dojoD} />
            <img src={dojoO1} />
        </div>
        <div className="container">
            <h3>What we do</h3>
            <h1>Turn tech hype <br />into prototypes <br />that prove value</h1>
        </div>
        <div className="corner-icons">
            <img src={dojoJ} />
            <img src={dojoO2} />
        </div>
    </section>
  )
}


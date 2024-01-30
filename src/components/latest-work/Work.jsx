import React from 'react'
import WorkCard from './WorkCard'

// import dojoD from './../../assets/images/dojo-d-white.svg'

export default function Work() {
  
  return (
    <section className="work dark-grey">
        
        <div className="container">
            <h3>Latest Work</h3>
            
            <div className="featured-work">
                <WorkCard></WorkCard>
            </div>

            <div className="work-items">
                <WorkCard></WorkCard>
                <WorkCard></WorkCard>
                <WorkCard></WorkCard>
            </div>

        </div>
        
    </section>
  )
}


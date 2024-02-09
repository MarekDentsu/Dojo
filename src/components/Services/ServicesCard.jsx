import { useState } from 'react'
import arrowURL from '../../assets/arrow-left.svg'

export default function ServicesCard(props) {
    const { title, subheading, description, outcomes, iconURL } = props
    const [showOutcomes, setShowOutcomes] = useState(false)

    return (
        <div className='services-card' onClick={() => { setShowOutcomes(!showOutcomes) }}>

            <div className='icon'>
                <img src={iconURL} alt={title} />
            </div>

            <div className={"description" + (showOutcomes ? " show-outcomes" : "")}>
                <div className='services-intro'>
                    <div>
                        <h3>{title}</h3>
                        {subheading ? <p className='small'>{subheading}</p> : null}
                        <p>{description}</p>
                        <p className='underlined'>See key outcomes</p>
                    </div>
                </div>
                <div className="outcomes">
                    <div>
                        <div className='outcome-nav'>
                            <img className='up-arrow' src={arrowURL} alt="up" />
                            <h5>Key Outcomes</h5>
                        </div>
                        <ul>
                            {outcomes.map((outcome, i) => {
                                return <li key={"outcome-" + i}>{outcome}</li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}
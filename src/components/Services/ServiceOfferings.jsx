import launchURL from '../../assets/services-icon-launch.svg'
import protoURL from '../../assets/services-icon-prototypes.svg'
import sessionURL from '../../assets/services-icon-sessions.svg'
import ServicesCard from './ServicesCard.jsx'

export default function ServiceOfferings(props) {

    return (
        <div className='service-offerings' {...props}>

            <h3>Service Offerings</h3>
            <p>Generate new ideas, prototype and test with customers, or launch a never before experience.</p>

            <div className='services'>
            <ServicesCard
                    title={"Sessions"}
                    subheading={"4 hour workshop"}
                    description={"Explore emerging technologies or turn a business opportunity into an exciting new digital proposition."}
                    outcomes={[
                        "Detailed UX/UI design",
                        "Clickable prototype",
                        "User feedback and validation",
                        "Roadmap and high-level delivery plan",
                        "Design and development sprints"
                    ]}
                    iconURL={sessionURL}
                />
                <ServicesCard
                    title={"Prototypes"}
                    subheading={"4+ weeks"}
                    description={"Create a working prototype of an idea, proven to deliver value and impact through human testing and validation."}
                    outcomes={[
                        "Detailed UX/UI design",
                        "Clickable prototype",
                        "User feedback and validation",
                        "Roadmap and high-level delivery plan",
                        "Design and development sprints"
                    ]}
                    iconURL={protoURL}
                />
                <ServicesCard
                    title={"Launch"}
                    subheading={"8+ weeks"}
                    description={"Explore emerging technologies or turn a business opportunity into an exciting new digital proposition."}
                    outcomes={[
                        "Detailed UX/UI design",
                        "Clickable prototype",
                        "User feedback and validation",
                        "Roadmap and high-level delivery plan",
                        "Design and development sprints"
                    ]}
                    iconURL={launchURL}
                />

            </div>

        </div>
    )
}

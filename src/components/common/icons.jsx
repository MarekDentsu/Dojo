
import React from 'react'


const launch = () => {
    return(
        <g class="launch">
            <path class="cls-1" d="M199.8,149.7c0-27.6-22.4-50-50-50s-50,22.4-50,50v100"/>
        </g>
    )
}
const prototype = () => {
    return(
        <g class="prototype">
            <path class="cls-1" d="M199.8,149.7c0,27.6-22.4,50-50,50-27.6,0-50-22.4-50-50V49.7"/>
        </g>
    )
}
const session = () => {
    return(
        <g class="session">
            <path class="cls-1" d="M89.8,149.7c0,27.6,22.4,50,50,50s50-22.4,50-50"/>
            <path class="cls-1" d="M209.8,149.7c0-27.6-22.4-50-50-50s-50,22.4-50,50"/>
        </g>
    )
}

export default function Icon(props) {
    return(
        <svg className={`icon ${props.black ? "black" : ""}`} width="300" height="300" viewBox="0 0 300 300">
            <defs></defs>
            <path d="M15.85.34H0v13.3h15.64c10.14,0,18.36,8.22,18.36,18.36s-8.22,18.36-18.36,18.36H0v13.3h15.85c17.47,0,31.64-14.16,31.64-31.64v-.04C47.49,14.51,33.32.34,15.85.34"/>
            <path d="M84.15.34h15.85v13.3h-15.64c-10.14,0-18.36,8.22-18.36,18.36s8.22,18.36,18.36,18.36h15.64v13.3h-15.85c-17.47,0-31.64-14.16-31.64-31.64v-.04C52.52,14.51,66.68.34,84.15.34"/>
        </svg>
    )
}
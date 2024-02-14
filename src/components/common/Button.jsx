// import React from 'react'

export default function Button(props) {
    return (
        <button className={`lozenge ${props.classes ? props.classes : ""}`} onClick={props.onClick}>
            <span>{props.children}</span>
        </button>
    )
}
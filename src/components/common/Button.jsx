// import React from 'react'

export default function Button(props) {
    return (
        <button className={props.classes ? props.classes : ""}>
            <span>{props.children}</span>
        </button>
    )
}
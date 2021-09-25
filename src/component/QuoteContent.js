import React from 'react'

export default function QuoteContent(props) {
    console.log(props.content + "Quote content")
    return (
        <div>
            <h3>{props.heading}</h3>
            <p>{props.content}</p>
            <p><em>By -{props.author}</em></p>
        </div>
    )
}

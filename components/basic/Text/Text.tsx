import React from "react"

type TextProps = {
    text: string
}

export default function Text(props: TextProps) { 
    const { text } = props
    return (<p>{text}</p>) 
}
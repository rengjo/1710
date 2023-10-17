'use client'
export default function Text(props) {
    return (
        <div style={{
            border: "2px solid green",
            backgroundColor: props.bgColor
        }}>
            <h1>{ props.headline }</h1>
            <p>{ props.text }</p>
        </div>
    )
}
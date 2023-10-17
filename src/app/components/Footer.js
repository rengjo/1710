'use client'
export default function Footer(props) {
    return (
        <footer style={{
            border: "2px solid orange",
            backgroundColor: props.backgroundColor, // Hintergrundfarbe über Props anpassen
            color: props.textColor, // Textfarbe über Props anpassen
        }}>Copyright | Impressum</footer>
    )
}
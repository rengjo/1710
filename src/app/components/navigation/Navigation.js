import Button from "../buttons/Buttons";

export default function Navigation(props) { // Props als Parameter hinzuzufügen
    return (
        <div style={{
            backgroundColor: props.backgroundColor, // Hintergrundfarbe über Props anpassen
            color: props.textColor, // Textfarbe über Props anpassen
            border: "2px solid red",
            padding: "1rem"
        }}>
            <Button href="/" label="Home" />
            <Button href="/contact" label="Contact" />
        </div>
    );
}

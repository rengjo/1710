'use client';
import Link from "next/link";

export default function Button(props) {
    return (
        <Link href={props.href}>
            <button
                style={{ // Ändere 'styles' zu 'style'
                    backgroundColor: props.color,
                    padding: "1rem"
                }}
            >
                {props.label}
            </button>
        </Link>
    )
}

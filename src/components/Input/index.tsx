import './style.css'

type InputProps = {
    type: "text" | "email" | "password",
    placeholder: string,
}

export function Input(props: InputProps) {
    return (
            <input
             placeholder={props.placeholder}
             type={props.type}
            />
    )
}
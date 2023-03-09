import { ChangeEvent, useState } from 'react'
import'./style.css'
export function StateExample() {
    console.log("renderizou v")
    const [name,setName] = useState("")

    function handleInput(event:ChangeEvent<HTMLInputElement>){
        setName(event.target.value)
        console.log("disparou evento")
    }
    return (
        <>
            <h1>State Example</h1>
            <input onInput={handleInput} className='inputName'type="text" />
            <h1>{name}</h1>

        </>
    )
}
import { Button } from "../../components/Button/Index";
import { Title } from "../../components/Title/Index";
import {User} from 'phosphor-react'

export function Home(){
    return(
        <>
        <header>
            <Title text='Bem Vindoo'/>
        </header>
        <main>
            <div className="action-buttons">
                <Button text="Login" type='primary'/>
                <Button text="Cadastro" type='default'/>
                <User/>
            </div>
        </main>
        </>
    )
}
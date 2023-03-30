import './style.css'

import { Input } from '../Input'
import { ButtonIU } from '../ButtonUI'

export function FormLogin() {
    return (
        <form action="">
            <Input placeholder='E-mail' type='email' />
            <Input placeholder='Senha' type='password' />
            {/* <Button text="Entrar" type='primary' /> */}
            <ButtonIU text="Entrar" />
        </form>

    )
}
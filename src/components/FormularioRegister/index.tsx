import { Input } from "@mui/material";
import { ButtonIU } from "../ButtonUI";

export function FormRegister() {
    return (
        <>
            <form>
                <Input placeholder='Nome de Usuário' type='text' />
                <Input placeholder='E-mail' type='email' />
                <Input placeholder='Senha' type='password' />
                <Input placeholder='Confirmar Senha' type='password' />
                <ButtonIU text='criar conta' />
            </form>
        </>
    )
}
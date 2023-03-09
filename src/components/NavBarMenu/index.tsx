import { Gear, House, User } from 'phosphor-react'
import '../NavBarMenu/style.css'
export function NavBarMenu(){
    return(
        <>
         <nav className="navbar-menu">
            <a title="Inicio"href="#"><House/></a>
            <a title="Perfil"href="#"><User/></a>
            <a title="Configuraçoes"href="#"><Gear/></a>
         </nav>

        </>
    )
}
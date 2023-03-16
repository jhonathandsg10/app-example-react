import { User } from 'phosphor-react'
import '../MenuItem/style.css'

type MenuItemProps = {
    icon: React.ReactNode
    text: string
}

export function MenuItem({icon,text}: MenuItemProps){
    return(
        <>
            <a className="menuItem" href="#">
                {icon}{text} 
                
            </a>
            
        </>
    )
}
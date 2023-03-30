import { User } from 'phosphor-react'
import '../MenuItem/style.css'
import { Button } from '@mui/material'

type MenuItemProps = {
    icon: React.ReactNode
    text: string
}

export function MenuItem({icon,text}: MenuItemProps){
    return(
        <>
            <Button variant='contained'>{icon} {text}</Button>
        </>
    )
}
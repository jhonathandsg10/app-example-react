import '../Contacts/style.css'
import { Box } from '@mui/material'

type ContactsProps = {
    children:React.ReactNode
}
export function Contacts({children}:ContactsProps){
    return (
        <>
          <Box component="span" >
            <section className='contactList'>
              {children}
            </section>
          </Box>
    
        </>
      )
}

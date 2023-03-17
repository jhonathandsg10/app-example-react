import { } from '../Contacts/style.css'

type ContacsProps = {
    children:React.ReactNode
}
export function Contacs({children}:ContacsProps){
    return(
        <>
           <div className='contacts'>
                {children}
           </div>
            
        </>
    )
}

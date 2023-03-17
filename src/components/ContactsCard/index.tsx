type ContactItemProps = {
    icon: React.ReactNode
    text: string
}

export function ContacsCard({icon,text}: ContactItemProps){
    return(
        <>
            <a className="contactItem" href="#">
                {icon}{text} 
                
            </a>
            
        </>
    )
}
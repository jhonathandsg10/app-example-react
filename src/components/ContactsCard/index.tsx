import './style.css'
import { Button } from "../Button/Index";
import { Contact } from "../../Types";
import { ButtonIU } from "../ButtonUI";

type ContactItemProps = {
    contactData: Contact
}


export function ContactCard({ contactData }: ContactItemProps) {
  const { name, email, picture } = contactData;
  return (
    <>
      <section className="contactCard">
        <div>
          <img src={picture.medium} alt="" />
        </div>
        <div className='dadosContatos'>
          <div>
            <p>{name.first}</p>
            <p>{email}</p>
            <ButtonIU text="Detalhes" />
          </div>
        </div>
      </section>
    </>
  )
}
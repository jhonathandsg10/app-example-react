import'./style.css'
import { useState, useEffect } from "react";
import { Contact } from "../../Types";
import { ContactCard } from "../../components/ContactsCard";
import { Title } from "../../components/Title/Index";
import { Input } from "../../components/Input";
import { getContacts } from "../../services/api";
import { Contacts } from "../../components/Contacts";

export function Contacts1() {
    const [search, setSearch] = useState('');
    const [contacts, setContacts] = useState<Contact[]>([]);

    useEffect(() => {
        async function listContacts() {
            setContacts(await getContacts())
        }
        listContacts();
        console.log(contacts);
    }, [])

    return (
        <>
            <header>
                <Title text="Agenda de Contatos" />
            </header>
            <main>
                <Input placeholder='Localizar' type='text' />
                <Contacts >
                    {
                        contacts.map(contact => {
                            return <ContactCard contactData={contact} />
                        })
                    }
                </Contacts>

            </main>

        </>
    )
}
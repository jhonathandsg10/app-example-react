import './style.css'
import { useState, useEffect } from "react";
import { Contact } from "../../Types";
import { ContactCard } from "../../components/ContactsCard";
import { Title } from "../../components/Title/Index";
import { Input } from "../../components/Input";
import { getContacts } from "../../services/api";
import { Contacts } from "../../components/Contacts";
import { BaseLayout } from '../../layout/BaseLayout';
import { CircularProgress, TextField } from '@mui/material';

export function Contacts1() {
    const [search, setSearch] = useState('');
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [contacts, setContacts] = useState<Contact[]>([]);

    const filteredContacts = ()=>

    useEffect(() => {
        async function listContacts() {
            setIsLoading(true)
            setContacts(await getContacts());
            setIsLoading(false)
        }
        listContacts();
        console.log(contacts);
    }, [])

    return (

        <BaseLayout appBarTitle='Agenda de Contatos'>
            <TextField variant='outlined' fullWidth />

            {isLoading ? (<CircularProgress />) : (
                <Contacts >
                    {
                        contacts.map(contact => {
                            return <ContactCard contactData={contact} />
                        })
                    }
                </Contacts>
            )}





        </BaseLayout>


    )
}
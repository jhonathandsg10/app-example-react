import { Button } from "../../components/Button/Index";
import { AddressBook, ImageSquare, User } from 'phosphor-react'
import { Menu } from "../../components/Menu";
import { MenuItem } from "../../components/MenuItem";
import { Link } from 'react-router-dom'
import { BaseLayout } from "../../layout/BaseLayout";

export function Home() {
    return (
        <BaseLayout appBarTitle = "Dashboard">



            <Menu>
                <Link to='/agenda'>
                    <MenuItem icon={<AddressBook size={24} />} text="Agenda" />
                </Link>
                <Link to='/gallery'>
                    <MenuItem icon={<ImageSquare size={24} />} text="Galeria" />
                </Link>
            </Menu>




        </BaseLayout>
    )
}
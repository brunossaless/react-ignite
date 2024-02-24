import { HeaderContainer } from "./styles";
import logoCoffee from '../../assets/LogoCoffeeDelivery.svg'
import {NavLink} from 'react-router-dom'
import { MapPin, ShoppingCart } from "phosphor-react";

export function Header(){
    return (
        <HeaderContainer>
            <img src={logoCoffee} alt="" />
            <nav>
                <NavLink to='' title="Location">
                    <MapPin size={22} weight='fill'/>
                    <p>Quixadá, CE</p>
                </NavLink>
                <NavLink to='' title="Litle Car">
                    <ShoppingCart size={22} weight='fill'/>
                </NavLink>
            </nav>

        </HeaderContainer>
    )
}
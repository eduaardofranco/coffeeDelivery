import { HeaderContainer, Local, Cart } from './styles'
import coffeDeliveryLogo from '../../assets/coffee-delivery-logo.svg'
import { Link } from 'react-router-dom'
import { MapPin, ShoppingCart } from "phosphor-react";
export function Header() {
    return(
        <HeaderContainer>
            <Link to="/">
                <img src={coffeDeliveryLogo} alt="" />
            </Link>
            <div>
                <Local>
                    <MapPin size={22} weight="fill" />
                    Porto Alegre, RS
                </Local>
                <Cart to="/cart">
                    <span>3</span>
                    <ShoppingCart size={22} weight="fill" />
                </Cart>
            </div>
        </HeaderContainer>
    )
}
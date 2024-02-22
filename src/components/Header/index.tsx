import { HeaderContainer, Local, Cart } from './styles'
import coffeDeliveryLogo from '../../assets/coffee-delivery-logo.svg'
import { Link } from 'react-router-dom'
import { MapPin, ShoppingCart } from "phosphor-react";
import { CartContext } from '../../contexts/CartContext'
import { useContext, useEffect, useState } from 'react';
export function Header() {
    
    const { cart } = useContext(CartContext)
    const [totalCart, setTotalCart] = useState(0)



    useEffect(() => {
        if(cart && Object.keys(cart).length > 0) {
            let total = Object.values(cart).reduce((t, n) => t + n)
            console.log('mudou')
            setTotalCart(total)
        } else {
            setTotalCart(0)
        }
    }, [cart])
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
                    <span>{totalCart}</span>
                    <ShoppingCart size={22} weight="fill" />
                </Cart>
            </div>
        </HeaderContainer>
    )
}
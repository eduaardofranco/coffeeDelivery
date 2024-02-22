import { effect } from 'zod'
import { Container, Icon, ItemDetail, OrderBox, TextDetail } from './styles' 
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useLocation } from 'react-router-dom'

export function OrderConfirmation() {
    const location = useLocation()
    const { street,
        houseNumber,
        neighbourhood,
        city,
        uf,
        paymentType} = location.state

    const ufUpperCase = uf.toUpperCase()
    
    const paymentFormated =
    paymentType === 'creditCard' ? 'Credit Card':
    paymentType === 'debitCard' ? 'Debit Card':
    paymentType === 'cash' ? 'Cash':
    paymentType;
    


    return(
        <Container>
            <h1>Wow! Order Placed</h1>
            <h3>Now just wait and the coffee will soon reach you</h3>
            <main>
                <OrderBox>
                    <ItemDetail>
                        <Icon $color='address'>
                            <MapPin size={16} weight="fill" />
                        </Icon>
                        <TextDetail>
                            <p>Delivery at <strong className='customStrong'> {street}, {houseNumber} </strong> - {neighbourhood} - {city}, {ufUpperCase}</p>
                        </TextDetail>
                    </ItemDetail>
                    <ItemDetail>
                        <Icon $color="time">
                            <Timer  size={16} weight="fill" />
                        </Icon>
                        <TextDetail>
                            <p>Estimated time</p>
                            <span>20 miin - 30 min</span>
                        </TextDetail>
                    </ItemDetail>
                    <ItemDetail>
                        <Icon $color="payment">
                            <CurrencyDollar size={16} />
                        </Icon>
                        <TextDetail>
                            <p>Payment upon delivery</p>
                            <span>{paymentFormated}</span>
                        </TextDetail>
                    </ItemDetail>
                </OrderBox>
                <img src="/src/assets//confirmation.png" alt="" />
            </main>
        </Container>
    )
}
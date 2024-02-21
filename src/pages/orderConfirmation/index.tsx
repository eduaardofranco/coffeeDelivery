import { effect } from 'zod'
import { Container, Icon, ItemDetail, OrderBox } from './styles' 
import { CurrencyDollar, MapPin, Money, Timer } from 'phosphor-react'

export function OrderConfirmation() {
    return(
        <Container>
            <h1>Wow! Order Placed</h1>
            <h3>Now just wait and the coffee will soon reach you</h3>
            <main>
                <OrderBox>
                    <ItemDetail>
                        <div>
                            <Icon color='address'>
                                <MapPin size={16} weight="fill" />
                            </Icon>
                            <p>Delivery at <strong>João Daniel Martinelli, 102</strong> Farrapos - Porto Alegre, RS</p>
                        </div>
                    </ItemDetail>
                    <ItemDetail>
                        <div>
                            <Icon color="time">
                                <Timer  size={16} weight="fill" />
                            </Icon>
                            <p>Estimate time</p>
                            <span>20 miin - 30 min</span>
                        </div>
                    </ItemDetail>
                    <ItemDetail>
                        <div>
                            <Icon color="payment">
                                <CurrencyDollar size={16} />
                            </Icon>
                            <p>Payment upon delivery</p>
                            <span>Debit Cart</span>
                        </div>
                    </ItemDetail>
                </OrderBox>
                <img src="/src/assets//confirmation.png" alt="" />
            </main>
        </Container>
    )
}
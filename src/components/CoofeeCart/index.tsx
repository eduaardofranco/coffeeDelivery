import { ShoppingCart } from 'phosphor-react'
import { Counter } from '../Counter'
import { CartContainer, Description, Footer, Finalize, AddCartButton } from './styles'
import { useState } from 'react'

interface Coofee {
    image: string
    tags: string[]
    title: string
    description: string
    price: number
    onClickAdd: (id: number, quantity: number) => void
}
const imageUrl = '/src/assets/'
export function CoofeeCart({ coffee, onClickAdd }: Coofee) {
    
    const [coffeeQuantity, setCoffeeQuantity] = useState(1);

    function handleQuantityChange(quantity: number) {
      setCoffeeQuantity(quantity);
    }

    return(
        <CartContainer>
            <img src={`${imageUrl}${coffee.image}`} alt="" />
            <div className="tags">
                {coffee.tags && coffee.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                ))}
            </div>
            <h3>{coffee.title}</h3>
            <Description>{coffee.description}</Description>
            <Footer>
                <p>
                €
                    <span>{coffee.price.toFixed(2)}</span>
                </p>
                <Finalize>
                <Counter initial={1} getQuantity={handleQuantityChange} />
                    <AddCartButton onClick={() => onClickAdd(coffee.id, coffeeQuantity)}>
                        <ShoppingCart size={22} weight="fill" />
                    </AddCartButton>
                </Finalize>
            </Footer>
        </CartContainer>
    )
}
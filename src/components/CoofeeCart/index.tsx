import { ShoppingCart } from 'phosphor-react'
import { Counter } from '../Counter'
import { CartContainer, Description, Footer, Finalize, AddCartButton } from './styles'

interface Coofee {
    image: string
    tags: string[]
    title: string
    description: string
    price: number
}
const imageUrl = '/src/assets/'
export function CoofeeCart({ title, image, tags, description, price }: Coofee) {

    return(
        <CartContainer>
            <img src={`${imageUrl}${image}`} alt="" />
            <div className="tags">
                {tags && tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                ))}
            </div>
            <h3>{title}</h3>
            <Description>{description}</Description>
            <Footer>
                <p>
                €
                    <span>{price.toFixed(2)}</span>
                </p>
                <Finalize>
                    <Counter />
                    <AddCartButton>
                        <ShoppingCart size={22} weight="fill" />
                    </AddCartButton>
                </Finalize>
            </Footer>
        </CartContainer>
    )
}
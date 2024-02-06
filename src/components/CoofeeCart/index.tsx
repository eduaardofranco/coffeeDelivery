import { CartContainer, Description, Footer } from './styles'

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

            </Footer>
        </CartContainer>
    )
}
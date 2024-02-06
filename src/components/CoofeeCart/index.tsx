import { CartContainer } from './styles'

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
            {tags && tags.map((tag) => (
                <span key={tag}>{tag}</span>
            ))}
            <h3>{title}</h3>
            <p>{description}</p>
            <p>{price}</p>
        </CartContainer>
    )
}
import banner from '../../assets/Intro.png'
import { CoofeeCart } from '../../components/CoofeeCart'
import { HomeContainer } from './styles'

const coffees = [
    {
        title: 'Traditinal Expresso',
        tags: ['Traditional', 'Com leite'],
        image: 'coffee1.png',
        description: 'O tradicional café feito com água quente e grãos moídos',
        price: 9.90
    },
    {
        title: 'Chocolate Quente',
        tags: ['Especial', 'Com leite'],
        image: 'coffee2.png',
        description: 'Bebida feita com chocolate dissolvido no leite quente e café',
        price: 9.90
    }
]
export function Home() {
    return(
        <HomeContainer>
            {/* <img className='banner' src={banner} alt="" /> */}
           
            <main>
                <h1>Our Coffees</h1>
                {
                    coffees && coffees.map((coffee, index) => (
                        <CoofeeCart 
                            key={String(index)}
                            title={coffee.title}
                            image={coffee.image}
                            description={coffee.description}
                            price={coffee.price}
                            tags={coffee.tags}
                        />
                    ))
                }
            </main>
        </HomeContainer>

    )
}
import { useReducer } from 'react'
import banner from '../../assets/Intro.png'
import { CoofeeCart } from '../../components/CoofeeCart'
import { HomeContainer } from './styles'
import { addItemToCart } from '../../reducers/actions'

export const coffees = [
    {
        id: 1,
        title: 'Traditinal Espresso',
        tags: ['Traditional', 'with milk'],
        image: 'coffee1.png',
        description: 'The tradional is made with hot water and ground coffee',
        price: 3.80
    },
    {
        id: 2,
        title: 'American Espresso',
        tags: ['traditional'],
        image: 'coffee2.png',
        description: 'Diluted espresso, less intense than the traditional',
        price: 2.75
    },
    {
        id: 3,
        title: 'Creamy Espresso',
        tags: ['traditional'],
        image: 'coffee3.png',
        description: 'Traditional espresso with creamy foam',
        price: 3.75
    },
    {
        id: 4,
        title: 'Iced Espresso',
        tags: ['traditional', 'iced'],
        image: 'coffee4.png',
        description: 'Drink prepared with espresso and ice',
        price: 3.75
    },
    {
        id: 5,
        title: 'Cortado',
        tags: ['traditional', 'with milk'],
        image: 'coffee5.png',
        description: 'Half traditional espresso with half steamed milk',
        price: 4.75
    },
    {
        id: 6,
        title: 'Latte',
        tags: ['traditional', 'with milk'],
        image: 'coffee6.png',
        description: 'A shot of espresso with double the milk and creamy foam',
        price: 4.00
    },
    {
        id: 7,
        title: 'Capuccino',
        tags: ['traditional', 'with milk'],
        image: 'coffee7.png',
        description: 'Drink made from equal doses of coffee, milk and foam',
        price: 3.95
    },
    {
        id: 8,
        title: 'Macchiato',
        tags: ['traditional', 'with milk'],
        image: 'coffee8.png',
        description: 'Espresso mixed with some hot milk and froth',
        price: 3.95
    },
    {
        id: 9,
        title: 'Mocaccino',
        tags: ['traditional', 'with milk'],
        image: 'coffee9.png',
        description: 'Espresso with chocolate syrup, little milk and foam',
        price: 4.95
    },
    {
        id: 10,
        title: 'Hot Chocolate',
        tags: ['special', 'with milk'],
        image: 'coffee10.png',
        description: 'Drink made with chocolate mixed into hot milk and coffee',
        price: 3.95
    },
    {
        id: 11,
        title: 'Cubano',
        tags: ['special', 'iced', 'alcoholic'],
        image: 'coffee11.png',
        description: 'Iced espresso drink with rum, cream and mint',
        price: 4.95
    },
    {
        id: 12,
        title: 'Hawaiian',
        tags: ['special'],
        image: 'coffee12.png',
        description: 'Sweet drink prepared with coffee and coconut milk',
        price: 3.95
    },
    {
        id: 13,
        title: 'Arabic',
        tags: ['special'],
        image: 'coffee13.png',
        description: 'Drink prepared with Arabic coffee beans and spices',
        price: 3.95
    },
    {
        id: 14,
        title: 'Irish Coffee',
        tags: ['special', 'alcoholic'],
        image: 'coffee14.png',
        description: 'Drink made from coffee, Irish whiskey, sugar and whipped cream',
        price: 5.95
    },

]
interface CartItem {
    [coffeeId: number]: number;
}
function addToCartReducer(state: CartItem, action: any) {
    switch(action.type) {
        case 'ADD_ITEM_TO_CART':
            const coffeeId = action.payload.coffeeId
            const quantity = action.payload.quantity
            return {
                ...state,
                [coffeeId]: quantity,
            }
        default: return state
      }
}

export function Home() {
    const [cart, dispatch] = useReducer(addToCartReducer, { } );
    
    const handleAddToCart = (coffeeId: number, quantity: number) => {
        console.log(cart)
        dispatch({
            type: 'ADD_ITEM_TO_CART',
            payload: {
                coffeeId: coffeeId,
                quantity: quantity
            }
        })
    }
    return(
        <HomeContainer>
            <img className='banner' src={banner} alt="" />
           
            <main>
                <h1>Our Coffees</h1>
                <div className="wrapper">
                    {
                        coffees && coffees.map((coffee) => (
                            <CoofeeCart 
                                key={coffee.id}
                                coffee={coffee}
                                onClickAdd={handleAddToCart}
                            />
                        ))
                    }
                </div>
            </main>
        </HomeContainer>

    )
}
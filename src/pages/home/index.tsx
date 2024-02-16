
import banner from '../../assets/Intro.png'
import { CoofeeCart } from '../../components/CoofeeCart'
import { HomeContainer } from './styles'
import { CartContext } from '../../contexts/CartContext'
import { useEffect, useState } from 'react'






export function Home() {
    const [coffees, setCoffees] = useState([])
    
    useEffect(() => {
          const fileCoffess = '/coffees.json'
      
      
          fetch(fileCoffess)
          .then(response => {
              if(!response.ok) {
                  throw new Error('Error fetching coffees')
              }
              return response.json()
          })
          .then(data => {
              // Faça algo com os dados JSON
              console.log('data:', data);
              setCoffees(data)
          
            })
            .catch(error => {
              console.error("Ocorreu um erro:", error);
            });

      },[])

    
    return(
        <HomeContainer>
            <img className='banner' src={banner} alt="" />
           
            <main>
                <h1>Our Coffees</h1>
                <div className="wrapper">
                    {
                        coffees.length > 0 && coffees.map((coffee) => (
                            <CoofeeCart 
                                key={coffee.id}
                                coffee={coffee}
                            />
                        ))
                    }
                </div>
            </main>
        </HomeContainer>

    )
}
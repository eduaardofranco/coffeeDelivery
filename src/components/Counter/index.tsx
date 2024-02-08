import { useState } from 'react'
import { CounterContainer } from './styles'
import { Plus, Minus } from 'phosphor-react'
export function Counter({ initial = 1 }) {


    const [quantity, setQuantity] = useState(initial)

    function handdleAdcItem() {
        setQuantity(prevState => prevState + 1)
    }
    function handdleRemoveItem() {
        if(quantity >= 2) {
            setQuantity(prevState => prevState - 1)
        }
    }
    return(
        <CounterContainer>
            <button onClick={handdleRemoveItem}>
            <Minus size={16} />
            </button>
            <span>{quantity}</span>
            <button onClick={handdleAdcItem}>
                <Plus size={16} />
            </button>
        </CounterContainer>
    )
}
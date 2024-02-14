import { createContext, useReducer } from "react"

interface CartContextType {
    cart: CartItem | undefined
}
export interface CartItem {
    [coffeeId: number]: number;
}
export function addToCartReducer(state: CartItem, action: any) {
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
export const CartContext = createContext({} as CartContextType)

function CartContextProvider() {
    const [cart, dispatch] = useReducer(addToCartReducer, { } );
    
    return( 
        <CartContext.Provider value={ {cart, dispatch }}>
            { children }
        </CartContext.Provider>
    )
}
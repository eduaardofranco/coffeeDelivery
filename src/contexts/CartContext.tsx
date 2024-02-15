import React, { ReactNode, createContext, useReducer, Dispatch, useEffect } from "react";

interface CartContextType {
    cart: CartItem | undefined
    dispatch: Dispatch
}
export interface CartItem {
    [coffeeId: number]: number;
}
interface CartContextProviderProps {
    children: ReactNode;
}
export function addToCartReducer(state: CartItem, action: any) {
    switch(action.type) {
        case 'ADD_ITEM_TO_CART':
            const coffeeId = action.payload.coffeeId
            const quantity = action.payload.quantity
            if(state.hasOwnProperty(coffeeId)) {
                return {
                    ...state,
                    [coffeeId]: state[coffeeId] + quantity,
                }
            } else {
                return {
                    ...state,
                    [coffeeId]: quantity,

                }
            }
        case 'ADD_CART_LOCALSTORAGE': 
            const storedCart = action.payload
            return {
                ...state,
                ...storedCart
            }

        default: return state
      }
}
export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
    const [cart, dispatch] = useReducer(addToCartReducer, {});

    useEffect(() => {
        //check if there is any item on localstorage
        const storedCart = localStorage.getItem('@coffeeDelivery-cart')
        
        //if there is, send through dispatch
        if(storedCart) {
            const parsedCart = JSON.parse(storedCart);
            dispatch({
                type: 'ADD_CART_LOCALSTORAGE',
                payload: parsedCart

            })
        }
    }, [])
    
    //add cart to localstorage when it changes
    useEffect(() => {
        localStorage.setItem('@coffeeDelivery-cart', JSON.stringify(cart))
    }, [cart])

    return (
        <CartContext.Provider value={{ cart, dispatch }}>
          {children}
        </CartContext.Provider>
      );  
}
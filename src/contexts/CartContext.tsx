import React, { ReactNode, createContext, useReducer } from "react";

interface CartContextType {
    cart: CartItem | undefined
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
            return {
                ...state,
                [coffeeId]: quantity,
            }
        default: return state
      }
}
export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
    const [cart, dispatch] = useReducer(addToCartReducer, {});

    return (
        <CartContext.Provider value={{ cart, dispatch }}>
          {children}
        </CartContext.Provider>
      );  
}
export enum ActionTypes {
    ADD_TO_CART = 'ADD_TO_CART',
    REMOVE_FROM_CART = 'REMOVE_FROM_CART'
}
export function addItemToCart(id: number, quantity: number) {
    return {
      type: ActionTypes.ADD_TO_CART,
      payload: {
        id,
        quantity,
      },
    };
  }
import { Bank, CreditCard, CurrencyDollar, MapPinLine, Minus, Money, Plus, Trash } from "phosphor-react";
import { AddressContainer,
         AddressForm,
         AdressBox,
         CartContainer,
         CoffeeItem,
         ConfirmButton,
         OrdemFinalDetail,
         OrderBox,
         OrderContainer,
         PaymentBox,
         PaymentButton,
         Quantity,
         RemoveButton,
         TotalFinalDetail 
        } from "./styles";
import { useContext, useEffect, useReducer, useState } from "react";
import  * as zod  from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { fetchCoffees } from "../../services/api";
import { CartContext } from '../../contexts/CartContext'
import { useNavigate } from 'react-router-dom'


const newAddressFormSchema = zod.object({
    cep: zod.number({ 
        required_error: "CEP is required",
        invalid_type_error: "CEP must be a 8 digit number",
    }),
    street: zod.string().min(4, { message: 'Street is required' }),
    houseNumber: zod.number().min(1, { message: 'Number is required'}),
    complemento: zod.string(),
    neighbourhood: zod.string().min(3, { message: 'Neighbourhood is required'}),
    city: zod.string().min(3, { message: 'city is required'}),
    uf: zod.string().min(2, { message: 'required' }).max(2),
    payment: zod.enum(['creditCard', 'debitCard', 'cash']).refine(value => value !== undefined, {
        message: 'Please select a payment method'
    })

})
interface NewOrderProps {
    street: string
    houseNumber: number
    neighbourhood: string
    city: string
    uf: string
    paymentType: 'creditCard' | 'debitCard' | 'cash'
}
type ActionCreateOrderType = {
    type: 'CREATE_NEW_ORDER';
    payload: NewOrderProps;
  };
function createNewOrder( state: NewOrderProps[], action: ActionCreateOrderType ) {
    switch(action.type) {
        case 'CREATE_NEW_ORDER':
            return {
                    street: action.payload.street,
                    houseNumber: action.payload.houseNumber,
                    neighbourhood: action.payload.neighbourhood,
                    city: action.payload.city,
                    uf: action.payload.uf,
                    paymentType: action.payload.paymentType
                }
            default:
                return state;
    }
}

export function Cart() {
    const [formValidationError, setFormValidationError] = useState({})
    const [coffees, setCoffees] = useState([])
    const [totalCartPrice, setTotalCartPrice] = useState(0)
    const [orders, orderDispatch] = useReducer(createNewOrder, [])
    

    const { cart, dispatch } = useContext(CartContext) 

    const navigate = useNavigate()

    const imgUrl = '/src/assets'
    

    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: zodResolver(newAddressFormSchema)
    })


    function handdlePlaceOrder(data: NewOrderProps) {
        orderDispatch({
            type: 'CREATE_NEW_ORDER',
            payload: {
                street: data.street,
                houseNumber: data.houseNumber,
                neighbourhood: data.neighbourhood,
                city: data.city,
                uf: data.uf,
                paymentType: data.payment
            }
        })
        setFormValidationError({})
        navigate('/confirmation', { state: {
            street: data.street,
            houseNumber: data.houseNumber,
            neighbourhood: data.neighbourhood,
            city: data.city,
            uf: data.uf,
            paymentType: data.payment
            }
        })
        dispatch({
            type: 'REMOVE_ALL_FROM_CART'
        })
        localStorage.removeItem('cart');

    }
    function onError( errors: FieldErrors<typeof newAddressFormSchema>) {
        console.log('form errors', errors)
        setFormValidationError(errors)
    }

    //return every coffee item in cart
    const filteredCoffeesInCart = Object.entries(cart).flatMap(([key, value]) => {
        return coffees.filter(coffee => key == coffee.id).map(filteredCoffee => ({
          quantity: value,
          coffee: filteredCoffee,
        }));
      });

      function handdleRemoveItemQuantity(id: number) {
        dispatch({
            type: 'REMOVE_QUANTITY_ITEM_CART',
            payload: {
                cofeeId: id
            }
        })
      }
      function handdleAddItemQuantity(id: number) {
        dispatch({
            type: 'ADD_QUANTITY_ITEM_CART',
            payload: {
                cofeeId: id
            }
        })
      }
      function handdleRemoveItem(id: number) {
        dispatch({
            type: 'REMOVE_ITEM_FROM_CART',
            payload: {
                coffeeId: id
            }
        })
      }

    // delivery fee
    const deliveryFee = 4.6

    useEffect(() => {
        fetchCoffees()
        .then(data => {
          setCoffees(data)
        })
        .catch(error => {
          console.error('Ocorreu um erro:', error);
        });
    },[])

    useEffect(() => {
        const calculateTotal = async () => {
          try {
            //fetch data
            const coffeesData = await fetchCoffees();
      
            //map cart items
            const cartItemsData = Object.entries(cart).flatMap(([key, value]) => {
              return coffeesData.filter(coffee => key == coffee.id).map(filteredCoffee => ({
                quantity: value,
                coffee: filteredCoffee,
              }));
            });
      
            //calc total in cart
            const total = cartItemsData.reduce((accumulator, current) => {
              const totalPerItem = current.quantity * current.coffee.price;
              return accumulator + totalPerItem;
            }, 0);
      
            //update the total const
            setTotalCartPrice(total);
          } catch (error) {
            console.error('error calculating cartTotal:', error);
          }
        };
      
        // Chama a função para calcular o total
        calculateTotal();
      }, [cart]);
      
    return(
        <CartContainer>
            <form action="" onSubmit={handleSubmit(handdlePlaceOrder, onError)}>
                <AddressContainer>
                    <h1>Finish your order</h1>
                    <AdressBox>
                        <div className="title">
                            <MapPinLine size={22} />
                            <h3>
                                Delivery Adress <span>Inform your address for delivery</span>
                            </h3>
                        </div>
                        <AddressForm>
                            <fieldset>
                                <input
                                    type="text" 
                                    id="number"
                                    placeholder="CEP"
                                    {...register('cep', { required: true, valueAsNumber: true })}
                                />
                                {formValidationError && (formValidationError as Record<string, any>)['cep'] && (
                                    <p className="formErrorMessage">{(formValidationError as Record<string, any>)['cep'].message}</p>
                                )}
                            </fieldset>
                            <fieldset className="streetInput">
                                <input
                                    type="text"
                                    id="street"
                                    placeholder="Street"
                                    {...register('street', { required: true })}
                                />
                                {formValidationError && (formValidationError as Record<string, any>)['street'] && (
                                    <p className="formErrorMessage">{(formValidationError as Record<string, any>)['street'].message}</p>
                                )}
                            </fieldset>
                            <fieldset>
                                <input
                                    type="number"
                                    id="houseNumber"
                                    placeholder="Number"
                                    {...register('houseNumber', { required: true, valueAsNumber: true } )}
                                />
                                {formValidationError && (formValidationError as Record<string, any>)['houseNumber'] && (
                                    <p className="formErrorMessage">{(formValidationError as Record<string, any>)['houseNumber'].message}</p>
                                )}
                            </fieldset>
                            <fieldset className="complementoInput">
                                <input
                                    type="text"
                                    id="complemento"
                                    placeholder="Complemento"
                                    {...register('complemento')}
                                />
                                {formValidationError && (formValidationError as Record<string, any>)['complemento'] && (
                                    <p className="formErrorMessage">{(formValidationError as Record<string, any>)['complemento'].message}</p>
                                )}
                            </fieldset>
                            <fieldset> 
                                <input
                                    type="text"
                                    id="neighbourhood"
                                    placeholder="Neighbourhood"
                                    {...register('neighbourhood', { required: true })}
                                />
                                {formValidationError && (formValidationError as Record<string, any>)['neighbourhood'] && (
                                    <p className="formErrorMessage">{(formValidationError as Record<string, any>)['neighbourhood'].message}</p>
                                )}
                            </fieldset>
                            <fieldset className="cityInput">
                                <input
                                    type="text"
                                    id="city"
                                    placeholder="City"
                                    {...register('city', { required: true })}
                                />
                                {formValidationError && (formValidationError as Record<string, any>)['city'] && (
                                    <p className="formErrorMessage">{(formValidationError as Record<string, any>)['city'].message}</p>
                                )}
                            </fieldset>
                            <fieldset className="ufInput">
                                <input
                                    type="text"
                                    id="uf"
                                    placeholder="UF"
                                    {...register('uf', { required: true })}
                                />
                                {formValidationError && (formValidationError as Record<string, any>)['uf'] && (
                                    <p className="formErrorMessage">{(formValidationError as Record<string, any>)['uf'].message}</p>
                                )}
                            </fieldset>
                        </AddressForm>
                    </AdressBox>
                    <PaymentBox>
                        <div className="title">
                            <CurrencyDollar size={22} />
                            <h3>
                                Payment<span>Payment is made upon delivery. Choose the way you want to pay</span>
                            </h3>
                        </div>
                        <div className="paymentType">
                            <PaymentButton>
                                <input
                                    type="radio"
                                    id="creditCardPayment" 
                                    value="creditCard"
                                    {...register('payment', { required: true })}
                                />
                                <label htmlFor="creditCardPayment">
                                    <CreditCard size={14} />
                                    Credit Card
                                </label>
                            </PaymentButton>
                            <PaymentButton>
                                <input
                                    type="radio"
                                    id="debitCardPayment"
                                    value="debitCard"
                                    {...register('payment', { required: true })}
                                />
                                <label htmlFor="debitCardPayment">
                                    <Bank size={16} />
                                    Debit Card

                                </label>
                            </PaymentButton>
                            <PaymentButton>
                                <input
                                    type="radio"
                                    id="moneyPayment"
                                    value="cash"
                                    {...register('payment', { required: true })}
                                />
                                <label htmlFor="moneyPayment">
                                    <Money size={16} />
                                    Money

                                </label>
                            </PaymentButton>
                        </div>
                        {formValidationError && (formValidationError as Record<string, any>)['payment'] && (
                            <p className="formErrorMessage">{(formValidationError as Record<string, any>)['payment'].message}</p>
                        )}
                    </PaymentBox>

                </AddressContainer>
                <OrderContainer>
                    <h2>Selected Coffees</h2>
                    <OrderBox>
                        { filteredCoffeesInCart && filteredCoffeesInCart.map(coffeeItem => (
                            <CoffeeItem key={coffeeItem.coffee.title}>
                            
                                <img src={`${imgUrl}/${coffeeItem.coffee.image}`} alt={coffeeItem.coffee.title} />
                                <div className="details">
                                    <h3>{coffeeItem.coffee.title}</h3>
                                    <div className="controls">
                                        <Quantity>
                                            <button type="button" onClick={() => handdleRemoveItemQuantity(coffeeItem.coffee.id)}>
                                                <Minus size={16} />
                                            </button>
                                            <span>{coffeeItem.quantity}</span>
                                            <button type="button" onClick={() => handdleAddItemQuantity(coffeeItem.coffee.id)}>
                                                <Plus size={16} />
                                            </button>
                                        </Quantity>
                                        <RemoveButton type="button" onClick={() => handdleRemoveItem(coffeeItem.coffee.id)}>
                                            <Trash size={16} />
                                            Remove
                                        </RemoveButton>
                                    </div>

                                </div>
                                <p className="price">€{coffeeItem.coffee.price}</p>
                            </CoffeeItem>
                        ))}
                        <div className="finalDetails">
                            <OrdemFinalDetail>
                                <span>Items total</span>
                                <span>€{totalCartPrice.toFixed(2)}</span>
                            </OrdemFinalDetail>
                            <OrdemFinalDetail>
                                <span>Delivery</span>
                                <span>€{deliveryFee.toFixed(2)}</span>
                            </OrdemFinalDetail>
                            <TotalFinalDetail>
                                <span>Total</span>
                                <span>€{(totalCartPrice+deliveryFee).toFixed(2)}</span>
                            </TotalFinalDetail>
                        </div>
                        <ConfirmButton type="submit">Confirm Order</ConfirmButton>
                    </OrderBox>
                </OrderContainer>

            </form>
        </CartContainer>
    )
}
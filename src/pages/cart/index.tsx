import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money, Trash } from "phosphor-react";
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
         RemoveButton,
         TotalFinalDetail 
        } from "./styles";
import { useEffect, useState } from "react";
import { Counter } from "../../components/Counter";
import { FieldError, FieldErrors, useForm } from 'react-hook-form'
import  * as zod  from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'


const newAddressFormSchema = zod.object({
    cep: zod.string().refine( value => value.length === 9, {
        message: 'Please inform a valid CEP: 00000-000'
    }),
    street: zod.string().min(4, { message: 'Street is required' })
})

export function Cart() {
    
    const { register, handleSubmit, formState: {errors} } = useForm({
        resolver: zodResolver(newAddressFormSchema),
    })


    const [paymentType, setPaymentType] = useState('')
    const [formValidationError, setFormValidationError] = useState({})

    function handdlePlaceOrder(data: any) {
        // if(errors) {
            console.log('oi')
            console.log(formValidationError)
        // }
    }
    function onError( errors: FieldErrors<typeof newAddressFormSchema>) {
        console.log('form errors', errors)
        setFormValidationError(errors)
    }

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
                                    type="number" 
                                    id="number"
                                    placeholder="CEP"
                                    {...register('cep')}
                                />
                                {formValidationError && (formValidationError as Record<string, any>)['cep'] && (
                             <p>{(formValidationError as Record<string, any>)['cep'].message}</p>
                        )}
                            </fieldset>
                            <fieldset className="streetInput">
                                <input
                                    type="text"
                                    id="street"
                                    placeholder="Street"
                                    {...register('street')}
                                />
                                {formValidationError && (formValidationError as Record<string, any>)['street'] && (
                             <p>{(formValidationError as Record<string, any>)['street'].message}</p>
                        )}
                            </fieldset>
                            <fieldset>
                                <input
                                    type="text"
                                    id="number"
                                    placeholder="Number"
                                    {...register('number')}
                                />
                            </fieldset>
                            <fieldset className="complementoInput">
                                <input
                                    type="text"
                                    id="complemento"
                                    placeholder="Complemento"
                                    {...register('complemento')}
                                />
                            </fieldset>
                            <fieldset> 
                                <input
                                    type="text"
                                    id="state"
                                    placeholder="State"
                                    {...register('state')}
                                />
                            </fieldset>
                            <fieldset className="cityInput">
                                <input
                                    type="text"
                                    id="city"
                                    placeholder="City"
                                    {...register('city')}
                                />
                            </fieldset>
                            <fieldset className="ufInput">
                                <input
                                    type="text"
                                    id="uf"
                                    placeholder="UF"
                                    {...register('uf')}
                                />
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
                            <PaymentButton 
                                onClick={() => setPaymentType('creditCard')}
                                className={paymentType == 'creditCard' ? 'active' : ''}
                            >
                                <CreditCard size={14} />
                                Credit Card
                            </PaymentButton>
                            <PaymentButton
                                onClick={() => setPaymentType('debitCard')}
                                className={paymentType == 'debitCard' ? 'active' : ''}
                            >
                                <Bank size={16} />
                                Debit Card
                            </PaymentButton>
                            <PaymentButton
                                onClick={() => setPaymentType('money')}
                                className={paymentType == 'money' ? 'active' : ''}
                            >
                                <Money size={16} />
                                Money
                            </PaymentButton>
                        </div>
                    </PaymentBox>

                </AddressContainer>
                <OrderContainer>
                    <h2>Selected Coffees</h2>
                    <OrderBox>
                        <CoffeeItem>
                            <img src="/src/assets/coffee1.png" alt="Coffee Name" />
                            <div className="details">
                                <h3>Traditional Espresso</h3>
                                <div className="controls">
                                    <Counter initial={2} issmall />
                                    <RemoveButton>
                                        <Trash size={16} />
                                        Remove
                                    </RemoveButton>
                                </div>

                            </div>
                            <p className="price">€4.67</p>
                        </CoffeeItem>
                        <CoffeeItem>
                            <img src="/src/assets/coffee6.png" alt="Coffee Name" />
                            <div className="details">
                                <h3>Latte</h3>
                                <div className="controls">
                                    <Counter initial={1} issmall />
                                    <RemoveButton>
                                        <Trash size={16} />
                                        Remove
                                    </RemoveButton>
                                </div>

                            </div>
                            <p className="price">€2.80</p>
                        </CoffeeItem>
                        <div className="finalDetails">
                            <OrdemFinalDetail>
                                <span>Items total</span>
                                <span>€20.30</span>
                            </OrdemFinalDetail>
                            <OrdemFinalDetail>
                                <span>Delivery</span>
                                <span>€4.90</span>
                            </OrdemFinalDetail>
                            <TotalFinalDetail>
                                <span>Total</span>
                                <span>€30.50</span>
                            </TotalFinalDetail>
                        </div>
                        <ConfirmButton type="submit">Confirm Order</ConfirmButton>
                    </OrderBox>
                </OrderContainer>

            </form>
        </CartContainer>
    )
}
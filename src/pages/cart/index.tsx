import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { AddressContainer, AdressBox, CartContainer, Order, PaymentBox, PaymentButton } from "./styles";
import { NavLink } from "react-router-dom";

export function Cart() {
    return(
        <CartContainer>
            <AddressContainer>
                <h1>Finish your order</h1>
                <AdressBox>
                    <div className="title">
                        <MapPinLine size={22} />
                        <h3>
                            Delivery Adress <span>Inform your address for delivery</span>
                        </h3>
                    </div>
                    <form action="">
                        <fieldset>
                            <label htmlFor="number">Cep</label>
                            <input type="number" id="number" placeholder="CEP" />
                        </fieldset>
                        <fieldset>
                            <label htmlFor="street">Street</label>
                            <input type="text" id="street" placeholder="Street" />
                        </fieldset>
                        <fieldset>
                            <label htmlFor="number">Number</label>
                            <input type="number" id="number" placeholder="Number"/>
                        </fieldset>
                        <fieldset>
                            <label htmlFor="complemento">Complemento</label>
                            <input type="text" id="complemento" placeholder="Complemento"/>
                        </fieldset>
                        <fieldset> 
                            <label htmlFor="state">State</label>
                            <input type="text" id="state"  placeholder="State"/>
                        </fieldset>
                        <fieldset>
                            <label htmlFor="city">City</label>
                            <input type="text" id="city"  placeholder="City"/>
                        </fieldset>
                        <fieldset>
                            <label htmlFor="uf">UF</label>
                            <input type="text" id="uf"  placeholder="UF"/>
                        </fieldset>
                    </form>
                </AdressBox>
                <PaymentBox>
                    <div className="title">
                        <CurrencyDollar size={22} />
                        <h3>
                            Payment<span>Payment is made upon delivery. Choose the way you want to pay</span>
                        </h3>
                    </div>
                    <PaymentButton>
                        <CreditCard size={14} />
                        Credit Card
                    </PaymentButton>
                    <PaymentButton>
                        <Bank size={16} />
                        Debit Card
                    </PaymentButton>
                    <PaymentButton>
                        <Money size={16} />
                        Money
                    </PaymentButton>
                </PaymentBox>

            </AddressContainer>
            <Order>
                <h2>Selected Coffees</h2>
            </Order>
        </CartContainer>
    )
}
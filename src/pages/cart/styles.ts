import styled from 'styled-components'

export const CartContainer = styled.main`
    width: 1120px;
    margin: 0 auto;
    min-height: calc(100vh - 155px);
    
    h1, h2 {
        font-size: 1.8rem;
        color: ${(props) => props.theme['brown-900']};
        margin-bottom: 2rem;
    }
    .finalDetails {
        margin-top: 1rem;
    }
    form {
        display: flex;
        gap: 2rem;
        justify-content: space-between;

    }
    .formErrorMessage {
        font-size: 1rem;
        color: ${(props) => props.theme['purple-500']};
        margin-top: .5rem;
    }
`;

export const AddressContainer = styled.div`
    width: 640px;
`;

export const OrderContainer = styled.div`
    flex: 1;
`;

const Box = styled.div`
    background: ${(props) => props.theme['white-500']};
    padding: 4rem;
    border-radius: 6px;
    margin-bottom: 1.5rem;
    .title {
        color: ${(props) => props.theme['brown-700']};
        display: flex;
        align-items: start;
        justify-content: start;
        gap: 1rem;
        margin-bottom: 3.2rem;
        span {
            display: block;
            font-size: 1.4rem;
            margin-top: .5rem;
        }
        h3 {
            font-size: 1.6rem;
            font-weight: normal;

        }
    }
`;
export const AdressBox = styled(Box)`
    .title {
        svg {
            color: ${(props) => props.theme['yellow-700']};
        }
    }

`;
export const PaymentBox = styled(Box)`
    .title {
        svg {
            color: ${(props) => props.theme['purple-500']};
        }
    }
    .paymentType {
        display: flex;
        justify-content: center;
        gap: 20px;
    }
`;
export const OrderBox = styled(Box)`
    display: flex;
    border-radius: 6px 44px 6px 44px;
    padding: 2rem 4rem 4rem;
    flex-direction: column;
`;

export const CoffeeItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: start;
    padding: 2rem 0;
    gap: 1.5rem;
    width: 100%;
    border-bottom: 1px solid ${(props) => props.theme['white-900']};
    h3 {
        color: ${(props) => props.theme['brown-700']};
        font-weight: normal;
        font-size: 1.6rem;
        margin-bottom: 1rem;
    }
    img {
        width: 64px;
    }
    .controls {
        display: flex;
        gap: 1rem;
    }
    .details {
        display: flex;
        flex: 1;
        flex-direction: column;
    }
    .price {
        font-weight: bold;
        color: ${(props) => props.theme['brown-500']};
    }
`;
export const Quantity = styled.div`
    background: ${(props) => props.theme['white-900']};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    padding: .5rem;

    button {
        cursor: pointer;
        background-color: transparent;
        border: none;
        color: ${(props) => props.theme['purple-500']};
        font-size: 2rem;
        &:hover {
            color: ${(props) => props.theme['purple-700']};
        }
    }
    span {
        margin: 0 .8rem;
    }
`;
export const RemoveButton = styled.button`
    background: ${(props) => props.theme['white-900']};
    border: none;
    border-radius: 6px;
    padding: 0 .8rem;
    text-transform: uppercase;
    color: ${(props) => props.theme['brown-500']};
    font-size: 1.2rem;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: .5rem;
    transition: background .2s;
    &:hover {
        background: ${(props) => props.theme['brown-100']};
    }

    svg {
        color: ${(props) => props.theme['purple-500']};
    }
`;

export const PaymentButton = styled.div`
    width: 100%;
    label {
        text-transform: uppercase;
        font-size: 1.2rem;
        cursor: pointer;
        
        display: flex;
        align-items: center;
        justify-content: center;
        background: ${(props) => props.theme['white-900']};
        color: ${(props) => props.theme['brown-500']};
        border: 1px solid transparent;
        border-radius: 6px;
        width: 100%;
        padding: 2rem;
        transition: background .1s;


        &:hover {
            background: ${(props) => props.theme['brown-100']};
            color: ${(props) => props.theme['brown-700']};
    
        }
    }
    input[type="radio"]:checked + label {
        background: ${(props) => props.theme['purple-300']};
        border: 1px solid ${(props) => props.theme['purple-500']};
    }
    input {
        opacity: 0;
        position: absolute;
        top: 1;
        left: 1;
        height: 1px;
        width: 1px;
    }
    svg {
        color: ${(props) => props.theme['purple-500']};
        margin-right: 1rem;
    }
`;
export const AddressForm = styled.div`
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
    fieldset {
        border: none;
        width: 200px;
        &.streetInput {
            width: 100%;
        }
        &.complementoInput {
            width: 344px;
        }
        &.ufInput {
            width: 60px;
        }
        &.cityInput {
            width: 268px;
        }
    }
    input {
        background: ${(props) => props.theme['white-700']};
        border: 1px solid ${(props) => props.theme['white-900']};
        color: 1px solid ${(props) => props.theme['brown-500']};
        border-radius: 4px;
        height: 4.2rem;
        padding: 1rem;
        width: 100%;
        &:focus {
            background: ${(props) => props.theme['white-700']};
            outline: 1px solid ${(props) => props.theme['yellow-700']};
        }
    }
`;
export const OrdemFinalDetail = styled.p`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${(props) => props.theme['brown-500']};
    font-size: 1.4rem;
    margin: .6rem 0;
    span {
        &:last-child {
            font-size: 1.6rem;
        }
    }
`;
export const TotalFinalDetail = styled(OrdemFinalDetail)`
    font-size: 2rem;
    font-weight: bold;
    color: ${(props) => props.theme['brown-700']};

`;
export const ConfirmButton = styled.button`
    background: ${(props) => props.theme['yellow-500']};
    border: none;
    border-radius: 6px;
    color: ${(props) => props.theme['white-100']};
    padding: 1.5rem 0;
    font-size: 1.4rem;
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;
    margin-top: 1.8rem;
    transition: background .2s;
    &:hover {
        background: ${(props) => props.theme['yellow-700']};
    }
`;
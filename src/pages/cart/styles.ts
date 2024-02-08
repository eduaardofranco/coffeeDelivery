import styled from 'styled-components'

export const CartContainer = styled.main`
    width: 1120px;
    margin: 0 auto;
    display: flex;
    gap: 2rem;
    justify-content: space-between;
    
    h1, h2 {
        font-size: 1.8rem;
        color: ${(props) => props.theme['brown-900']};
        margin-bottom: 2rem;
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
    padding: 4rem;
`;

export const CoffeeItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: start;
    gap: 1.5rem;
    width: 100%;
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
export const RemoveButton = styled.button`
    
`;

export const PaymentButton = styled.a`
    background: ${(props) => props.theme['white-900']};
    color: ${(props) => props.theme['brown-500']};
    border-radius: 6px;
    border: 1px solid transparent;
    text-transform: uppercase;
    font-size: 1.2rem;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 2rem;
    width: 100%;
    transition: background .1s;
    &:hover {
        background: ${(props) => props.theme['brown-100']};
        color: ${(props) => props.theme['brown-700']};

    }
    svg {
        color: ${(props) => props.theme['purple-500']};
        margin-right: 1rem;
    }
    &.active {
        background: ${(props) => props.theme['purple-300']};
        border: 1px solid ${(props) => props.theme['purple-500']};
    }
`;
export const AddressForm = styled.form`
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
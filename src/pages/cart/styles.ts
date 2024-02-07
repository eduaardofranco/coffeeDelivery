import { NavLink } from 'react-router-dom';
import styled from 'styled-components'

export const CartContainer = styled.main`
    width: 1120px;
    margin: 0 auto;
    display: flex;
    
    h1, h2 {
        font-size: 1.8rem;
        color: ${(props) => props.theme['brown-900']};
        margin-bottom: 2rem;
    }
`;

export const AddressContainer = styled.div`

`;

export const Order = styled.div`

`;

const Box = styled.div`
    background: ${(props) => props.theme['white-500']};
    padding: 4rem;
    border-radius: 6px;
    margin-bottom: 1.5rem;
    .title {
        color: ${(props) => props.theme['brown-700']};
        display: flex;
        align-items: center;
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
`;

export const PaymentButton = styled.a`

`;
import { Link } from 'react-router-dom';
import styled from 'styled-components'

export const HeaderContainer = styled.header`
    height: 120px;
    width: 1120px;

    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;
    > div {
        display: flex;
        align-content: center;
        justify-content: center;
        gap: 2rem;
    }
`;

export const Local = styled.div`
    background: ${(props) => props.theme['purple-300']};
    padding: 7px;
    border-radius: 8px;
    font-size: 1.4rem;
    color: ${(props) => props.theme['purple-700']};

    display: flex;
    align-items: center;
    justify-content: center;
    svg {
        color: ${(props) => props.theme['purple-500']};
        margin-right: 5px;
    }
`;

export const Cart = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;

    background: ${(props) => props.theme['yellow-300']};
    color: ${(props) => props.theme['yellow-700']};
    padding: 8px;
    border-radius: 6px;

`;
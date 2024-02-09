import styled from 'styled-components'

export const CounterContainer = styled.div<{ $issmall?: boolean; }>`
    background: ${(props) => props.theme['white-900']};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    padding: ${props => props.$issmall ? '.5rem' : '.8rem'};

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
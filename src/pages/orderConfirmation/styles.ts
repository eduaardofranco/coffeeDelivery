import styled from 'styled-components'

export const Container = styled.div`
    margin: 0 auto;
    width: 1120px;
    min-height: calc(100vh - 155px);
    h1 {
        font-size: 3.2rem;
        font-weight: bold;
        font-family: ${(props) => props.theme['Baloo']};
        color: ${(props) => props.theme['yellow-700']};
    }
    h3 {
        font-size: 2rem;
        font-weight: 400;
    }
    main {
        display: flex;
        justify-content: space-between;
    }
    img {
        height: 100%;
    }
    `;
export const OrderBox = styled.div`
   background: linear-gradient(white, white) padding-box,
   linear-gradient(to right, ${(props) => props.theme['yellow-700']}, ${(props) => props.theme['purple-500']}) border-box;
   border-radius: 6px 36px 6px 36px;
   border: 1px solid transparent;
   display: flex;
   flex-direction: column;
   padding: 4rem;
   width: 525px;
   height: 100%;
  margin-top: 4rem;
`;
export const ItemDetail = styled.div`
    color: ${(props) => props.theme['brown-500']}; 
    display: flex;
    gap: 1rem;
    justify-content: start;
    align-items: center;
    margin-bottom: 3.2rem;
    &:last-child {
        margin-bottom: 0;
    }
`;
export const TextDetail = styled.div`
    p {
        display: flex;
        flex-wrap: wrap;
        flex: 1;
    }
    .customStrong {
        margin: 0 5px;
    }
    span {
        display: block;
        font-weight: 900;
    }

`;
export const Icon = styled.span<{ $color?: string}>`
    height: 32px;
    width: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 9999px;
    background: ${props => {
        switch(props.$color) {
            case 'address':
                return props.theme['purple-500']
            case 'time': 
                return props.theme['yellow-500']
            case 'payment':
                return props.theme['yellow-700']
            default: 
            return 'transparent'
        }
    }};
    svg {
        color: ${(props) => props.theme['white-100']}
    }

`;
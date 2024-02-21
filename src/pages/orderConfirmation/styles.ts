import styled from 'styled-components'

export const Container = styled.div`
    margin: 1rem auto;
    width: 1120px;
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
  margin-top: 4rem;
`;
export const ItemDetail = styled.div`
    color: ${(props) => props.theme['brown-500']};
`;

export const Icon = styled.span`
    height: 32px;
    width: 32px;

    /* color: ${(props) => props.theme['white-100']} */
`;
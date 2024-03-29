import styled from 'styled-components'

export const CartContainer = styled.div`
    background: ${(props) => props.theme['white-500']};
    display: flex;
    flex-direction: column;
    border-radius: 6px 36px 6px 36px;

    align-items: center;
    margin-bottom: 4rem;
    margin-right: 3.2rem;
    padding: 1.5rem;
    width: 25.6rem;

    &:nth-of-type(4n) {
        margin-right: 0;
    }

    img {
        width: 12rem;
        margin-top: -35px;
    }

    .tags {
        margin: 1rem 0;
        span {
            background: ${(props) => props.theme['yellow-300']};
            color: ${(props) => props.theme['yellow-700']};
            text-transform: uppercase;
            font-weight: bold;
            font-size: 1rem;
            padding: 5px 10px;
            border-radius: 10px;
            &+ span {
                margin-left: 5px;
            }
        }
    }
    h3 {
        font-family: ${(props) => props.theme['Baloo']};
        color: ${(props) => props.theme['brown-700']};
        font-size: 2rem;
        margin: 1rem;
    }
`;

export const Description = styled.p`
    color: ${(props) => props.theme['brown-300']};
    text-align: center;
    overflow: hidden;
    height: 3.7rem;
`;

export const Footer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 2rem;
    justify-content: space-around;
    width: 100%;
    > p {
        color: ${(props) => props.theme['brown-700']};
        display: flex;
        align-items: center;
        span {
            font-family: ${(props) => props.theme['Baloo']};
            font-weight: 800;
            font-size: 2.4rem;
            margin-left: 3px;
        }
    }
`;

export const Finalize = styled.div`
    display: flex;
    gap: 5px;
`;

export const AddCartButton = styled.button`
    border: none;
    border-radius: 6px;
    background: ${(props) => props.theme['purple-700']};
    color: ${(props) => props.theme['white-300']};
    cursor: pointer;
    padding: 0 .8rem;
    transition: background .1s;
    &:hover {
        background: ${(props) => props.theme['purple-500']};
    }
`;
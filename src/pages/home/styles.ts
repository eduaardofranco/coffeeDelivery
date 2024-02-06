import styled from 'styled-components'

export const HomeContainer = styled.div`
    main {
        margin: 0 auto;
        width: 1120px;
    }
    h1 {
        font-family: ${(props) => props.theme['Baloo']};
        font-size: 3.2rem;
        font-weight: 800;
        color: ${(props) => props.theme['brown-700']};
    }
    .banner {
        margin: 0 auto;
        display: block;
    }
`;
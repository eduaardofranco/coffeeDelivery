import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        font-size: 62.5%;
    }
    body {
        background: ${(props) => props.theme['white-100']};
        font-size: 1.6rem;
        font-family: ${(props)  => props.theme['Roboto']};
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

`;
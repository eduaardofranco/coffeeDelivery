import styled from 'styled-components'

export const FooterContianer = styled.footer`

    background: ${(props) => props.theme['brown-500']};
    padding: 1rem;
    color: ${(props) => props.theme['white-300']};
    font-size: 13px;
    text-align: center;
    a {
        color: ${(props) => props.theme['yellow-300']};
    }

`;
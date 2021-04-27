import { createGlobalStyle } from 'styled-components'

export const GloabalStyles = createGlobalStyle`

    body {
        margin: 0px;
        padding: 0px;
        color: ${props => props.theme.black};
        font-family: 'Open Sans', sans-serif;
    }

    h1,h2,h3,h4,h5,h6 {
        font-family: 'Proza Libre', sans-serif;
        color: ${props => props.theme.jet};
    }

`
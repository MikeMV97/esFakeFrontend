import { createGlobalStyle } from 'styled-components'

export const GloabalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Proza+Libre:wght@400;500;700&display=swap');
    
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
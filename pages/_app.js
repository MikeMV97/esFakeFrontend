/* eslint-disable react/prop-types */
import { ThemeProvider } from 'styled-components';
import { GloabalStyles } from '../styles/global-styles';



const theme = {
    red: "#eb1e1eff",
    lightCoral: "#f26969ff",
    pastelPink: "#f7a1a1ff",
    white: "#ffffffff",
    jet: "#333333ff",
    black: "#1f1f1fff",
};

function MyApp({ Component, pageProps }) {
    return (
        <>
            <ThemeProvider theme={theme} >
                <GloabalStyles />
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    )
}

export default MyApp
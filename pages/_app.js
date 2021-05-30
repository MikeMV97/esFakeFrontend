/* eslint-disable react/prop-types */
import { ThemeProvider } from 'styled-components';
import { GloabalStyles } from '../styles/global-styles';
import Head from 'next/head';


const theme = {
    red: "#EB1E1E;",
    lightCoral: "#f26969ff",
    pastelPink: "#f7a1a1ff",
    white: "#ffffffff",
    jet: "#333333ff",
    black: "#1f1f1fff",
};

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600&family=Proza+Libre:wght@400;500;700&display=swap" rel="stylesheet" />
                <link rel="stylesheet" href="https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css"></link>
            </Head>
            <ThemeProvider theme={theme} >
                <GloabalStyles />
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    )
}

export default MyApp
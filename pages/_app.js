/* eslint-disable react/prop-types */
import "bootstrap/dist/css/bootstrap.min.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import { GlobalStyle } from "../src/styles/global/";

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />;
            <GlobalStyle />
        </>
    );
}

import { GlobalStyle } from "../src/styles/global/";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  );
}

import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "../components/organisms/Header";
import Footer from "../components/organisms/Footer";

function GPApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Header />
            <Component {...pageProps} />
            <Footer />
        </>
    );
}

export default GPApp;

import NextNprogress from "nextjs-progressbar";
import "../styles/globals.scss";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNprogress />
      <Component {...pageProps} />;
    </>
  );
}

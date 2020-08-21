// import App from "next/app";
import { createClient, Provider } from "urql";
import type { AppProps /*, AppContext */ } from "next/app";
import "tailwindcss/dist/base.min.css";
import "react-image-gallery/styles/css/image-gallery.css";
import Header from "components/header";
import Footer from "components/footer";
import "twin.macro";

const client = createClient({ url: "http://localhost:4000/graphql" });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider value={client}>
      <div tw="min-h-screen flex flex-col ">
        <Header />
        <div tw="container mx-auto flex-grow">
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
    </Provider>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default MyApp;

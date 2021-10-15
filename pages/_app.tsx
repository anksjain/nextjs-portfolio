import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout/Layout";
import { ThemeProvider } from "next-themes";
import { AnimatePresence } from "framer-motion";
import Cmd from "../components/Intro/cmd";
import { useEffect, useState } from "react";
function MyApp({ Component, pageProps, router }: AppProps) {

  // const [intro, setintro] = useState<boolean>(true)
  // function chnage() {
  //   setintro(false)
  // }
  // useEffect(() => {
  //   const val= window.sessionStorage.getItem("intro");
  //   console.log(val,"val")
  //   if(val){
  //     setintro(false)
  //   }
  // }, []);
  // console.log(intro,"1")
  if (router.pathname==="/intro") {
    return <Cmd/>;
  }
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <Layout>
        <AnimatePresence>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </ThemeProvider>
  );
}

// MyApp.getInitialProps = async (appContext: AppContext) => {
//   const appProps = await App.getInitialProps(appContext)

//   // Webpack will not include this in client bundle
//   if (typeof window === 'undefined') {
//     // Hacky check from mister @denu5
//     // Ensures that the expression under this condition will be executed
//     // only once on first page render.
//     // If the url starts with /_next/data, that means that we have
//     // a client-side navigation situation requiring some additional data
//     // from getServerSideProps or getInitialProps (not sure about this one).
//     if (!appContext.ctx.req?.url?.startsWith('/_next/data')) {
//       // Calculate something on server side
//       appProps.pageProps.isLaptop = isLaptop(appContext.ctx.req)
//       appProps.pageProps.ab = abMiddleware(appContext.ctx)
//     }
//   }

//   return { ...appProps }
// }

export default MyApp;

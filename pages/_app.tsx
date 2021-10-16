import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout/Layout";
import { ThemeProvider } from "next-themes";
import { AnimatePresence } from "framer-motion";
import Cmd from "../components/Intro/cmd";
import { useEffect, useState } from "react";
let Intro:boolean
function MyApp({ Component, pageProps, router }: AppProps) {

  // const [intro, setintro] = useState<boolean>(true)
  // function chnage() {
  //   setintro(false)
  // }
  // useEffect(() => {
  //   const v1=sessionStorage.getItem("intro")
  //   console.log("1",v1)
  //   if (intro && v1)
  //   {
  //     console.log("in for")
  //     setintro(false)
  //   }
  //   return ()=>{
  //     const v2=sessionStorage.getItem("intro")
  //     console.log("2",v2)
  //     if (intro && v2)
  //     {
  //       console.log("inn for")
  //       setintro(false)
  //     }
  //   }
  // }, []);
  // console.log(intro,"1")
  // // if (window){
  // //   console.log(window.sessionStorage.getItem("intro"))
  // // }
  console.log(router.pathname,router.asPath)
  if (router.pathname==="/") {
    return <Cmd />;
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

MyApp.getInitialProps = async () => {
 
  Intro=false
  return { }
}

export default MyApp;

import React, { useEffect } from "react";

import Head from "next/head";
import { Helmet } from "react-helmet";
import {useRouter} from 'next/router'
interface ICmd{
  fun?:()=>void
}
function Cmd({fun}:ICmd) {
  const router=useRouter()
  useEffect(() => {
    router.prefetch("/about")
    const val = sessionStorage.getItem("intro");
    if (val) {
      window.location.replace("/about");
    }
    sessionStorage.setItem("intro", "Already");
    // fun()
    // return () => {
    //   fun()
    // }
  }, [])
  return (
    <div>
        <Head>
          <script
            type="text/javascript"
            src="https://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"
          ></script>
          <link rel="stylesheet" type="text/css" href="css/index.css"></link>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            </Head>

      <div id="console">
        <Helmet>
          <script type="text/javascript" src="javascript/index.js"></script>
        </Helmet>
      </div>
    </div>
  );
}

export default Cmd;

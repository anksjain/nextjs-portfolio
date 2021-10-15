import React from "react";
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { useRouter } from "next/dist/client/router";

// function Store({ match }) {
//   let { id } = match.params;
//   const imageHasLoaded = true;

//   return (
//     <>
//       <List selectedId={id} />
//       <AnimatePresence>
//         {id && imageHasLoaded && <Item id={id} key="item" />}
//       </AnimatePresence>
//     </>
//   );
// }

export default function Framer() {
    const router =useRouter()
  return (
    <div className="container">
      <AnimateSharedLayout type="crossfade">
          <div>hey</div>
        {/* <Router>
          <Route path={["/:id", "/"]} component={Store} />
        </Router> */}
      </AnimateSharedLayout>
    </div>
  );
}

import React, { Suspense } from "react";
import "./App.css";
// import Lazy_Comp from './Component/Lazy_Comp'

const Lazy_Comp = React.lazy(() => import("./Component/Lazy_Comp"));

function App() {
    return (
        <>
            <h1>Learning Lazy loading</h1>
            <Suspense fallback={<div>Loading....</div>}>
                <Lazy_Comp />
            </Suspense>
        </>
    );
}

export default App;

/*  
  lazy loading is a technique used to load components only when they’re needed, rather than loading everything upfront. This helps reduce the initial load time of an application, improving performance by splitting the app’s code into smaller, manageable chunks that can be loaded on demand.
*/

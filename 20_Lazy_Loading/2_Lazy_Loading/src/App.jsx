import { lazy, Suspense } from "react";
import "./App.css";
// import XYZ from './components/XYZ';

const XYZ = lazy(() => import("./components/XYZ"));

function App() {

    return (
        <>
            <h1>learning Lazy Loading</h1>

            <Suspense fallback={<div>Loading......</div>}>
                <XYZ />
            </Suspense>
        </>
    );
}

export default App;
 
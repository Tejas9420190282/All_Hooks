import { useState } from "react"

function HOC(OldComp) {
    return function outputComp (prop) {

        const [count, setCount] = useState(0);

        return (
            <OldComp {...prop} count={count} increseBy={() => setCount(count + 1)} decreseBy={() => setCount(count - 1)} />
        )
    }
}
export default HOC

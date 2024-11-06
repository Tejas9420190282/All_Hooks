import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decreseCounterBy1, decreseCounterBy10, increseCounterBy1, increseCounterBy10 } from "./Dispatch";

function Counter() {
    const count = useSelector((state) => state.count);

    const dispatch = useDispatch();

    return (
        <>
            <h1>Count : {count}</h1>

            <div className="flex justify-center items-center gap-5 mt-5 px-20">
                <button
                    className="px-10"
                    onClick={() => dispatch(decreseCounterBy1())}
                >
                    -1
                </button>
                <button
                    className="px-10"
                    onClick={() => dispatch(increseCounterBy1())}
                >
                    +1
                </button>
            </div>

            <div className="flex justify-center items-center gap-5 mt-5">
                <button
                    className="px-10"
                    onClick={() => dispatch(decreseCounterBy10())}
                >
                    Decrese by 10
                </button>
                <button
                    className="px-10"
                    onClick={() => dispatch(increseCounterBy10())}
                >
                    Increse by 10
                </button>
            </div>
        </>
    );
}

export default Counter;

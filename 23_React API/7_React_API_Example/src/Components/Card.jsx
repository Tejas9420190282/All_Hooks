import React from "react";

function Card({ responce, index }) {
    return (
        <>
            <div className="flex flex-col mb-10">
                <div
                    className="h-72 w-52 bg-white  flex justify-center items-center rounded-t-md"
                    key={index}
                >
                    <img
                        src={responce.Poster}
                        alt={responce.imdbID}
                        className="h-72 w-44 mb-8 shadow-slate-900 "
                    />
                </div>
                <button className="bg-slate-950 text-white rounded-b-md">
                    WATCH NOW
                </button>
            </div>
        </>
    );
}

export default Card;

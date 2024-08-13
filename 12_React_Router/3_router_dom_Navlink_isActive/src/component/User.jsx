import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const params = useParams();

  return (
    <>
      <div className="flex justify-center text-2xl">
        <h1>The user is {params.username}</h1>
      </div>
    </>
  );
}

export default User;

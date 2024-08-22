import React, { useEffect } from "react";
import useStore from "./store";

function User() {
  const { users, getUsers } = useStore();

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <h1>Users page</h1>
      
      <div className="flex flex-wrap mt-10">
        {users.map((user) => (
          <div className="basis-1/4 p-2 ">
            <h3 className="bg-white text-black mt-5 mx-3">{user.name}</h3>
          </div>
        ))}
      </div>

        
    </>
  );
}

export default User;

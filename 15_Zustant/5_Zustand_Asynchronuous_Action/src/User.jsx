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
      
      <div className="">
        {users.map((user) => (
          <div className="">
            <h3>{user.name}</h3>
          </div>
        ))}
      </div>
    </>
  );
}

export default User;

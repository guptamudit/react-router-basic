import React from "react";
import { useParams } from "react-router-dom";
function User() {
  const { userid, username } = useParams();
  return (
    <>
      <div className="bg-gray-200 text-center p-2 text-xl">
        User Name: {username}
      </div>
      <div className="bg-gray-200 text-center p-2 text-xl">
        User Id: {userid}
      </div>
    </>
  );
}

export default User;

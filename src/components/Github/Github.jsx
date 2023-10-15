import React from "react";
import { useState, useEffect } from "react";

function Github() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/guptamudit")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div className="text-center m-4 bg-gray-600 text-white text-3xl p-4">
      Github Followers: {data.followers}
      <img
        className="w-[200px] ml-auto mr-auto mt-[13px]"
        src={data.avatar_url}
        alt="Git Picture"
      />
    </div>
  );
}

export default Github;

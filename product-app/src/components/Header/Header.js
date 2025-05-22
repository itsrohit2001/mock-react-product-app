import React, { useEffect, useState } from "react";

function Header() {
  const [count, setCount] = useState(0);
  //   const [productList, setProductList] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUserData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      const data = await response.json();
      setUser(data);
      console.log(data);
    };

    fetchUserData();
  }, []);

  return (
    <div>
      <h1>header component</h1>
      <button
        onClick={() => {
          let latest_count = count + 1;
          setCount(latest_count);
          console.log(setCount(count + 1));
        }}
      >
        {count}
      </button>
      <h1>{user.name}</h1>
      <h2>{user.userName}</h2>
      <h3>{user.email}</h3>
    </div>
  );
}

export default Header;
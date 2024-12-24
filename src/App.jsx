import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import user from "../user.json";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    let urlFetch = async (url) => {
      const newData = await fetch(url)
        .then((res) => res.json())
        .then((res) => setData(res))
        .catch((err) => console.log("Error"));
    };

    urlFetch("https://jsonplaceholder.typicode.com/users");
  }, []);

  // Delete Button
  const handleDelete = (phone) => {
    setData(data.filter((item) => item.phone != phone));
  };

  return (
    <div className="flex flex-wrap">
      {data.map((user) => (
        <Card
          key={user.id}
          user={user}
          handleDelete={handleDelete}
          data={data}
          setData={setData}
        />
      ))}
    </div>
  );
}

export default App;

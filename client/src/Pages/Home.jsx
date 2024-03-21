import React, { useState, useEffect } from "react";

const Home = () => {
  const [card, setCard] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const getCardData = async () => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=9&_page=${page}`
    );
    const data = await res.json();
    console.log(data);
    setCard((prev) => [...prev, ...data]);
    setLoading(false);
  };

  useEffect(() => {
    getCardData();
  }, [page]);


  return (
    <>
      <div className="mt-2 container mx-auto">
        <div className="grid grid-cols-3 gap-4">
          {card.map((item) => (

            <div key={item.id} className="bg-gray-200 p-4 rounded">
           
              <h3 className="text-lg font-bold">Users</h3>
              <p className="mt-2">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
     
    </>
  );
};

export default Home;

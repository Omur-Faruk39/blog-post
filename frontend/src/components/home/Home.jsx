import React from "react";
import post from "../../../data/data";

function Home() {
  return (
    <>
      {post.map((item) => (
        <div key={item.id} className="card">
          <img src={`../../../assets${item.image}`} alt={item.title} />
          <h1>{item.title}</h1>
          <p>{item.author}</p>
          <p>{item.date}</p>
        </div>
      ))}
    </>
  );
}

export default Home;

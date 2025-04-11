import React from "react";
import post from "../../../data/data";

function Home() {
  return (
    <div className="cards">
      {post.map((item) => (
        <div key={item.id} className="card">
          <img className="blog-img" src={`../../../assets/${item.image}`} alt={item.title} />
          <div className="author-div">
            <div>
              <img
                src={`../../../assets/${item.image}`}
                alt={item.title}
                className="author-img"
              />
            </div>
            <div>
              <p className="author-name">{item.author}</p>
              <p className="date">{item.date}</p>
            </div>
          </div>
          <h1 className="title">{item.title}</h1>
        </div>
      ))}
    </div>
  );
}

export default Home;

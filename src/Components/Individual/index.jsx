import React, { useState, useEffect } from "react";
import axios from "axios";

const Individual = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/1")
      .then((res) => {
        setPost(res);
        console.log(res, "result");
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <h1>{setPost.title}</h1>
    </div>
  );
};

export default Individual;

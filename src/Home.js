import { useState, useEffect } from "react";
import Bloglist from "./Bloglist";
import useFetch from "./usefetch";

const Home = () => {
  const { data, isPending } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="Home">
      {isPending && <div>Loading.....</div>}
      {data && <Bloglist Blogs={data} title="All blogs" />}
    </div>
  );
};

export default Home;

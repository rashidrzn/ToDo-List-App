import { useState, useEffect } from "react";
import Bloglist from "./Bloglist";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isPending, setisPending] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch("http://localhost:8000/blogs")
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setBlogs(data);
          setisPending(false);
        });
    }, 1000);
  }, []);

  return (
    <div className="Home">
      {isPending && <div>Loading.....</div>}
      {blogs && <Bloglist Blogs={blogs} title="All blogs" />}
    </div>
  );
};

export default Home;

const Bloglist = ({ Blogs, title }) => {
  return (
    <div className="blog-list">
      <h1>{title}</h1>
      {Blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>written by {blog.author}</p>

          <button>delete</button>
        </div>
      ))}
    </div>
  );
};

export default Bloglist;

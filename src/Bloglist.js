const Bloglist = ({ Blogs, title, deleteBlog }) => {
  return (
    <div className="blog-list">
      <h1>{title}</h1>
      {Blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>written by {blog.author}</p>

          <button onClick={() => deleteBlog(blog.id)}>delete</button>
        </div>
      ))}
    </div>
  );
};

export default Bloglist;

import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>soryyy</h2>
      <p>that page cannot be found</p>
      <Link to="/">Back to the home page.....</Link>
    </div>
  );
};

export default NotFound;
<div className="not-found">
  <h2>soryyy</h2>
  <p>that page cannot be found</p>
</div>;

// == Import npm
import React from "react";

// == Import local
import Blog from './Blog';

const BlogsView = ({blogs}) => {
  return (
    <div className="row mt-30-reverse">
      {blogs.map(blog => (
        <div className="col-lg-6 col-md-6 col-12 mt-30" key={blog.id}>
          <Blog data={blog} />
        </div>
      ))}
    </div>
  );
}

// == Export default
export default BlogsView;

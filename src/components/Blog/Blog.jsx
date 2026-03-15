import React, { useState } from "react";
import BlogDetails from "../BlogDetails/BlogDetails";

const Blog = ({ blog }) => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const { id, title, image, shortHeading, category } = blog;
  return (
    <div>
      <div className="card shadow-sm">
        <figure>
          <img className="w-full h-96 object-cover" src={image} alt="blog" />
        </figure>
        <div className="card-body">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-extrabold truncate">{title}</h2>
            <div className="badge badge-neutral ml-2 shrink-0">{category}</div>
          </div>
          <p className="text-lg font-medium my-3 leading-6 ">{shortHeading}</p>
          <div className="card-actions justify-end">
            <button
              onClick={() => setSelectedBlog(blog)}
              className="btn w-full text-[rgba(23,106,229,1)] text-sm font-bold border border-[rgba(23,106,229,0.2)] rounded-full px-3 py-2 hover:text-white hover:bg-[rgba(23,106,229,1)]"
            >
              Show Details
            </button>
          </div>
        </div>
      </div>

      {selectedBlog && (
        <BlogDetails
          blog={selectedBlog} // pass blog
          onClose={() => setSelectedBlog(null)} // close modal
        />
      )}
    </div>
  );
};

export default Blog;

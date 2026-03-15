import React from "react";

const BlogDetails = ({ blog, onClose }) => {
  return (
    <div>
      <dialog open className="modal">
        <div className="modal-box md:w-full md:max-w-2xl">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button
              onClick={onClose}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
          </form>
          <div className="card bg-base-100 image-full shadow-sm">
            <figure className="w-full">
              <img src={blog.image} alt="blog" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-2xl font-bold">{blog.title}</h2>
              <p className="font-medium my-3">{blog.details}</p>

              <div className="flex justify-between items-center">
                <p className=" text-lg font-medium  px-3 py-1">
                  Written By: {blog.writer}
                </p>
                <p className="text-lg font-medium  px-3 py-1">
                  Date:{blog.date}
                </p>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default BlogDetails;

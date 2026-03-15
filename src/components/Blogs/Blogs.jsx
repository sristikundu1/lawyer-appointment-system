import React from "react";
import Banner from "../Banner/Banner";
import blogBanner from "../../assets/blogBanner.jpeg";
import { useLoaderData } from "react-router";
import Blog from "../Blog/Blog";

const Blogs = () => {
  const title = " Insights & Stories from Our Experts";
  const bannerSubtitle =
    " Stay updated with the latest trends, tips, and guides from our legal professionals.";

  const allBlogs = useLoaderData();

  return (
    <div>
      <Banner
        title={title}
        subtitle={bannerSubtitle}
        image={blogBanner}
      ></Banner>

      <div className="max-w-10/12 mx-auto">
        <h2 className="text-3xl font-extrabold text-left mb-4">
          Popular Articles
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-4 gap-6">
          {allBlogs.map((blog) => (
            <Blog key={blog.id} blog={blog}></Blog>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;

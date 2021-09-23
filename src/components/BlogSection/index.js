import React from "react";
import BlogCard from "../BlogCard";

const BlogSection = (props) => {
  const posts = props.fewPosts.map((node) => (
    <div key={node.slug}>
      <BlogCard
        postthumb={node.featuredImage.node.mediaItemUrl}
        className="my-5"
        posttitle={node.title}
        posttext={node.excerpt}
        postlink={"/blog/" + node.slug}
      />
    </div>
  ));
  return (
    <div className="bg-grey lg:px-52">
      <h3 className="text-center m-0 mb-6 text-link">
        Veja nossos posts mais recentes!
      </h3>
      <div className="grid grid-flow-col grid-rows-3 lg:grid-flow-row lg:grid-cols-3 lg:grid-rows-1 pb-4">
        {posts}
      </div>
    </div>
  );
};

export default BlogSection;

import React from "react";
import style from "./styles";
import { Link } from "gatsby";

const BlogCard = ({ className, posttitle, posttext, postthumb, postlink }) => (
  <>
    <div className={className}>
      <div className="container px-5">
        <div className="card">
          <div className="bg-blue rounded-t-lg w-full h-20 mb-5 flex justify-center items-center">
            <h2 className="text-white card-title px-4">{posttitle}</h2>
          </div>
          <img className="container max-w-xl mx-auto h-40 px-5 mb-4" src={postthumb}></img>
          <div
            className="text-sm px-8 text-card"
            dangerouslySetInnerHTML={{ __html: posttext }}
          />
          <div className="flex justify-center mt-7">
            <Link to={postlink}>
              <button className="btn text-white mb-5">Leia Mais</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default style(BlogCard);

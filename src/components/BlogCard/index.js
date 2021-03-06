import React from "react";
import style from "./styles";
import { Link } from "gatsby";

const BlogCard = ({ className, posttitle, posttext, postthumb, postlink, numeroPalavras }) => {

  function splitString(str, no_words) {
    return str.split(" ").splice(0,no_words).join(" ");
  }

  let textSliced = splitString(posttext,numeroPalavras);
  textSliced = textSliced + '...'

  return(
  <>
    <div className={className}>
      <div className="container px-5">
        <div className="card">
          <div className="bg-blue rounded-t-lg w-full h-20 mb-5 flex justify-center items-center">
            <a href={"/blog/"+postlink}>
            <h2 className="text-white m-0 text-center card-title px-4">{posttitle}</h2></a>
          </div>
          <a href={"/blog/"+postlink}>
          <img alt="thumbnail" className="container max-w-xl mx-auto px-5 mb-4" src={postthumb}></img></a>
          <div
            className="text-md px-8 text-card"
            dangerouslySetInnerHTML={{ __html: textSliced }}
          />
          <div className="flex justify-center mt-7">
            <Link to={"/blog/"+postlink}>
              <button className="btn text-white mb-5">Leia Mais</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </>)
};

export default style(BlogCard);

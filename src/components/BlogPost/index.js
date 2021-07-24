import React from "react";
import Layout from "../Layout";
import style from "./styles";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { graphql } from "gatsby";
import FloatingButtons from '../../components/FloatingButtons'

const BlogPost = ({ data, location, className }) => {
  const url = location.href ? location.href : "";
  const post = data.allWpPost.nodes[0];
  return (
    <Layout>
      <Header pageUrl={url} />
      <FloatingButtons  pageUrl={url} />
      <div className={className}>
        <div className="container px-6 lg:px-20 mt-8 topo-blog">
          <img className="container thumbnail" src={post.featuredImage.node.mediaItemUrl}></img>

          <h1 className="text-link text-4xl text-center mb-8 mt-5">
            {post.title}
          </h1>
          <div
            className="mb-8 text-xl content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
        <div className="flex justify-center">
          <a href="/blog">
            <button className="btn-inverse text-pink mb-5">Voltar</button>
          </a>
        </div>
      </div>
      <Footer />
    </Layout>
  );
};
export const query = graphql`
  query ($slug: String!) {
    allWpPost(filter: { slug: { eq: $slug } }) {
      nodes {
        title
        content
        featuredImage {
          node {
            mediaItemUrl
          }
        }
      }
    }
  }
`;

export default style(BlogPost);

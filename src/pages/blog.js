import React from "react"
import { graphql} from "gatsby" 
import Layout from "../components/Layout"
import Header from '../components/Header'
import Footer from '../components/Footer'
import BlogCard from "../components/BlogCard"

export default function Blog({ data, location }) {
  const url = location.href ? location.href : '';
  let thumbnailurl = "https://i.stack.imgur.com/y9DpT.jpg";
  return (
    <Layout>
      <Header pageUrl={url} />
      <div className="flex flex-col items-center mb-16">
      {data.allWpPost.nodes.map(node => (
        <div key={node.slug}>
      <BlogCard postthumb={thumbnailurl}  className="my-5" posttitle={node.title} posttext={node.excerpt} postimage={'/'} postlink={node.slug}/>
        </div>
      ))}
      </div>
      <Footer/>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allWpPost(sort: { fields: [date] }) {
      nodes {
        title
        excerpt
        slug
      }
    }
  }
`
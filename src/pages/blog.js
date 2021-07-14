import React from "react"
import { graphql} from "gatsby" 
import Layout from "../components/Layout"
import Header from '../components/Header'
import Footer from '../components/Footer'
import BlogCard from "../components/Footer copy"

export default function Blog({ data, location }) {
  const url = location.href ? location.href : '';
  return (
    <Layout>
      <Header pageUrl={url} />
      <div className="flex flex-col items-center">
      {data.allWpPost.nodes.map(node => (
        <div key={node.slug}>
      <BlogCard className="my-5" posttitle={node.title} posttext={node.excerpt} postimage={'/'} postlink={node.slug}/>
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
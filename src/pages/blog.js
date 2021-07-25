import React, {useState, useEffect} from "react"
import { graphql} from "gatsby" 
import Layout from "../components/Layout"
import Header from '../components/Header'
import Footer from '../components/Footer'
import BlogCard from "../components/BlogCard"
import SearchBar from "../components/SearchBar"
import FloatingButtons from '../components/FloatingButtons'
import Btn from '../components/Btn'

export default function Blog({ data, location }) {
  const url = location.href ? location.href : '';
  const allPosts = data.allWpPost.nodes
  const numMaxPosts = 4;
  const [currentPosts, setCurrentPosts] = useState(allPosts)
  const [fewPosts, setfewPosts] = useState([...allPosts.slice(0, numMaxPosts)])
  const [loadMore, setLoadMore] = useState(false)
  const [hasMore, setHasMore] = useState(allPosts.length > numMaxPosts)
  const [searchString, setSearchString] = useState("");

  const handleLoadMore = () => {
    setLoadMore(true)
  }


  useEffect(() => {
    if (loadMore && hasMore) {
      const currentLength = fewPosts.length
      const isMore = currentLength < currentPosts.length
      const nextResults = isMore
        ? currentPosts.slice(currentLength, currentLength + numMaxPosts)
        : []
      setfewPosts([...fewPosts, ...nextResults])
      setLoadMore(false)
    }
  }, [loadMore, hasMore, currentPosts, fewPosts])

  useEffect(() => {
    const isMore = fewPosts.length < currentPosts.length
    setHasMore(isMore)
    console.log(fewPosts.length)
  }, [fewPosts, currentPosts.length])

  useEffect(() => {

    const filtrados = allPosts.filter(
      post => post.title.toLowerCase().includes(searchString.toLowerCase()))

    if(filtrados.length && searchString){
      setCurrentPosts(filtrados)
      setfewPosts([...filtrados.slice(0, numMaxPosts)])
    }
    else{
      setCurrentPosts(allPosts)
      setfewPosts([...allPosts.slice(0, numMaxPosts)])
    }
}, [searchString, allPosts]);

  return (
    <Layout>
      <div className="bg-grey topo-blog">
      <Header pageUrl={url} />
      <FloatingButtons pageUrl={url} />
      <SearchBar searchString={searchString} setSearchString={setSearchString} />
      <div className="flex flex-col items-center mb-16">
      {fewPosts.map(node => (
        <div key={node.slug}>
      <BlogCard postthumb={node.featuredImage.node.mediaItemUrl} className="my-5" posttitle={node.title} posttext={node.excerpt} postlink={node.slug}/>
        </div>
      ))}
      {hasMore ? (
        <Btn className="-mb-4 mt-4" func={handleLoadMore} texto={"Carregar Mais"} inv={1}/>
      ) : (
        <p className="-mb-2 mt-5 ">Os posts acabaram :(</p>
      )}
      
      </div>
      <Footer/>
      </div>
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
        featuredImage {
          node {
            mediaItemUrl
          }
        }
      }
    }
  }
`
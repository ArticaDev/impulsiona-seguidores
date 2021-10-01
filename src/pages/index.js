import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SectionWarranty from "../components/SectionWarranty";
import SectionAbout from "../components/SectionAbout";
import SectionContact from "../components/SectionContact";
import SectionBenefits from "../components/SectionBenefits";
import SectionHome from "../components/SectionHome";
import FloatingButtons from "../components/FloatingButtons";
import BlogSection from "../components/BlogSection";
import SectionFaq from "../components/SectionFaq";
import TestimonialsVideos from "../components/TestimonialsVideos";
import TestimonialsCards from "../components/TestimonialsCards";

export default function Index({ data, location }) {
  const url = location.href ? location.href : "";
  const fewPosts = data.allWpPost.nodes;
  return (
    <Layout>
      <Header pageUrl={url} />
      <FloatingButtons pageUrl={url} />
      <SectionHome />
      <SectionAbout />
      <SectionBenefits />
      <TestimonialsVideos />
      <SectionWarranty />
      <TestimonialsCards/>
      <SectionFaq />
      <SectionContact />
      <BlogSection fewPosts={fewPosts} />
      <Footer />
    </Layout>
  );
}

export const pageQuery = graphql`
  query {
    allWpPost(sort: { fields: [date], order: DESC }, limit: 3) {
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
`;

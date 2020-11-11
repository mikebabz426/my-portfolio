import React from "react"
import Layout from "../components/layout"
import BackgroundImage from "gatsby-background-image"
import SEO from "../components/seo"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => {
  const source = data.allImageSharp.nodes[1].fluid
  const style = {
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100vw",
    height: "100vh",
    margin: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }
  return (
    <Layout>
      <SEO title="Home" />
      <BackgroundImage style={style} fluid={source}>
        <h1>Welcome to my site</h1>
      </BackgroundImage>
    </Layout>
  )
}

export const query = graphql`
  {
    allImageSharp {
      nodes {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage

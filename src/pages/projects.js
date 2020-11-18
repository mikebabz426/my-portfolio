import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import { Container } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import Project from "../components/project"
import projectsArr from "../services/services.js"

const useStyles = makeStyles(theme => ({
  root: {
    padding: "5rem 0",
    margin: "auto",
  },
}))

const ProjectsPage = ({ data }) => {
  const classes = useStyles()
  const sourceOne = data.allImageSharp.nodes[2].fluid
  const sourceTwo = data.allImageSharp.nodes[0].fluid

  return (
    <Layout>
      <SEO title="Projects" />
      <Container maxWidth="lg" className={classes.root}>
        <Project source={sourceOne} project={projectsArr[0]} />
        <Project source={sourceTwo} project={projectsArr[1]} />
        <Project source={sourceTwo} project={projectsArr[2]} />
      </Container>
    </Layout>
  )
}

export const query = graphql`
  {
    allImageSharp {
      nodes {
        fluid(pngQuality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default ProjectsPage

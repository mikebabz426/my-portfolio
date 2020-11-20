import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import { Container, Typography, Divider } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import Project from "../components/project"
import projectsArr from "../services/services.js"

const useStyles = makeStyles(theme => ({
  root: {
    padding: "6rem 2rem",
  },
  heading: {
    margin: ".5rem 0 0 0",
  },
  divider: {
    margin: "1rem 0",
  },
  subheading: {
    marginBottom: "3rem",
  },
}))

const ProjectsPage = ({ data }) => {
  const classes = useStyles()
  const fleet = data.fleet.childImageSharp.fluid
  const sunset = data.sunset.childImageSharp.fluid

  return (
    <Layout>
      <SEO title="Projects" />
      <Container maxWidth="lg" className={classes.root}>
        <Typography variant="h2" align="center" className={classes.heading}>
          Take a look around
        </Typography>
        <Typography variant="h5" align="center" className={classes.subheading}>
          here's some of my rescent work
        </Typography>
        <Project source={sunset} project={projectsArr[0]} />
        <Divider light variant="middle" className={classes.divider} />
        <Project source={fleet} project={projectsArr[1]} />
        <Divider light variant="middle" className={classes.divider} />
      </Container>
    </Layout>
  )
}

export const query = graphql`
  {
    fleet: file(relativePath: { eq: "fleet.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    sunset: file(relativePath: { eq: "sunset.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default ProjectsPage

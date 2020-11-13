import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { Container, Typography, Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    padding: "3rem",
    margin: "auto",
  },
  grid: {
    marginTop: "10rem",
  },
  span: {
    color: "#3f51b5",
  },
}))

const AboutPage = ({ data }) => {
  const classes = useStyles()
  const source = data.allImageSharp.nodes[2].fluid

  const style = {
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "361.25px",
    height: "385px",
    margin: "auto",
  }

  return (
    <Layout>
      <SEO title="About" />
      <Container maxWidth="lg" className={classes.root}>
        <Grid
          className={classes.grid}
          container
          spacing={10}
          justify="center"
          align="center"
        >
          <Grid item md={6}>
            <Typography variant="h1">
              About
              <span className={classes.span}> Me</span>
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa,
              consectetur. Sapiente sed ut veniam, rerum nesciunt fugit dolore
              dicta, voluptate minima, aliquam unde. Consequuntur repudiandae
              veritatis ipsam, omnis quas sed. Omnis illo nostrum, beatae
              voluptates in optio velit neque architecto corrupti amet
              inventore. Quos eos blanditiis dolores eum veritatis amet.
            </Typography>
          </Grid>
          <Grid item md={6}>
            <BackgroundImage style={style} fluid={source}></BackgroundImage>
          </Grid>
        </Grid>
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
export default AboutPage

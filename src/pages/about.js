import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { Container, Typography, Grid, Button } from "@material-ui/core"
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
  const source = data.allImageSharp.nodes[3].fluid

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
            <Typography
              variant="body1"
              style={{ marginTop: "2rem", textAlign: "justify" }}
            >
              I am a web developer with a passion for code and an eye for UI/UX
              design. Instead of giving you the cliche awe inspiring coder
              origin story and bore you to death, I will simply say that I love
              making websites and applications and everything in between.
              Detailed focused, organized and eager to work on projects of all
              scales and sizes with like minded positive individuals.
            </Typography>
            <Typography
              variant="body1"
              style={{ marginTop: "4rem", textAlign: "justify" }}
            >
              Have an idea you'd like to bring to the web? Whether you are a
              small business owner or another proffessional looking to
              collaborate, feel free to reach out!
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              style={{ marginTop: "1rem" }}
            >
              Get in Touch
            </Button>
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

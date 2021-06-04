import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { graphql, Link, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import {
  Container,
  Typography,
  Grid,
  Button,
  Collapse,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { useInView } from "react-intersection-observer"

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: "#f2f2f2",
    minHeight: "100vh",
    minWidth: "100vw",
    padding: "3rem",
    margin: "auto",
  },
  grid: {
    marginTop: "10rem",
  },
  span: {
    color: "#3f51b5",
  },
  link: {
    textDecoration: "none",
  },
}))

const AboutSection = () => {
  const data = useStaticQuery(graphql`
    {
      about: file(relativePath: { eq: "about.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const classes = useStyles()
  const source = data.about.childImageSharp.fluid
  const { ref, inView } = useInView()

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
      <Container maxWidth="lg" className={classes.root}>
        <Grid
          className={classes.grid}
          container
          spacing={10}
          justify="center"
          align="center"
        >
          <Grid item md={6} ref={ref}>
            <Collapse in={inView} timeout={1000}>
              <Typography variant="h1">
                About
                <span className={classes.span}> Me</span>
              </Typography>
              <Typography
                variant="body1"
                style={{ marginTop: "2rem", textAlign: "left" }}
              >
                I am a web developer with a passion for code and an eye for
                UI/UX design. I love making websites and applications and
                everything in between. Detailed focused, organized and eager to
                work on projects of all scales and sizes with like minded
                positive individuals.
              </Typography>
              <Typography
                variant="body1"
                style={{ marginTop: "3rem", textAlign: "left" }}
              >
                Have an idea you'd like to bring to the web? Whether you are a
                small business owner or another developer looking to
                collaborate, feel free to reach out!
              </Typography>
              <Link to="/contact" className={classes.link}>
                <Button
                  variant="contained"
                  color="secondary"
                  style={{ marginTop: "1rem" }}
                >
                  Get in Touch
                </Button>
              </Link>
            </Collapse>
          </Grid>
          <Grid item md={6}>
            <BackgroundImage style={style} fluid={source}></BackgroundImage>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  )
}

export default AboutSection

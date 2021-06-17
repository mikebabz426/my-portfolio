import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { Container, Typography, Grid, Button } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { useInView } from "react-intersection-observer"
import Grow from "@material-ui/core/Grow"

const useStyles = makeStyles(theme => ({
  root: {
    margin: "auto",
    minHeight: "100vh",
    width: "100vw",
  },
  grid: {
    padding: "3rem",
    minHeight: "100vh",
    width: "100%",
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
    <Container maxWidth="lg" className={classes.root} id="about">
      <Grid
        className={classes.grid}
        container
        justify="center"
        alignItems="center"
      >
        <Grow
          in={inView}
          style={{ transformOrigin: "0 0 0" }}
          {...(inView ? { timeout: 1000 } : {})}
        >
          <Grid item md={6} ref={ref}>
            <Typography variant="h2">
              About
              <span className={classes.span}> Me</span>
            </Typography>
            <Typography
              variant="body1"
              style={{ marginTop: "2rem", textAlign: "left" }}
            >
              I am a web developer with a passion for code and an eye for UI/UX
              design. I love making websites and applications and everything in
              between. Detailed focused, organized and eager to work on projects
              of all scales and sizes with like minded positive individuals.
            </Typography>
            <Typography
              variant="body1"
              style={{ marginTop: "3rem", textAlign: "left" }}
            >
              Have an idea you'd like to bring to the web? Whether you are a
              small business owner or another developer looking to collaborate,
              feel free to reach out!
            </Typography>
            <Link to="#contact" className={classes.link}>
              <Button
                variant="contained"
                color="secondary"
                style={{ margin: "2rem 0 2rem 0" }}
              >
                Get in Touch
              </Button>
            </Link>
          </Grid>
        </Grow>
        <Grow
          in={inView}
          style={{ transformOrigin: "0 0 0" }}
          {...(inView ? { timeout: 1500 } : {})}
        >
          <Grid item md={6} style={{ marginTop: "2rem" }}>
            <BackgroundImage style={style} fluid={source}></BackgroundImage>
          </Grid>
        </Grow>
      </Grid>
    </Container>
  )
}

export default AboutSection

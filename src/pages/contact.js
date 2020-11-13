import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Typography, Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import ContactMeSvg from "../assets/contact.svg"

const useStyles = makeStyles(theme => ({
  root: {
    padding: "3rem",
    margin: "auto",
  },
  grid: {
    marginTop: "10rem",
  },

  svg: {
    width: 400,
    height: 400,
    marginTop: "3rem",
  },
}))

const ContactPage = () => {
  const classes = useStyles()

  return (
    <Layout>
      <SEO title="Contact" />
      <Container maxWidth="lg" className={classes.root}>
        <Grid
          className={classes.grid}
          container
          spacing={10}
          justify="center"
          align="center"
        >
          <Grid item md={6}>
            <Typography variant="h3">Don't be shy, lets talk!</Typography>
            <ContactMeSvg className={classes.svg} />
          </Grid>
          <Grid item md={6}>
            <Typography variant="h1">About</Typography>
            <Typography
              variant="body1"
              style={{ marginTop: "2rem", textAlign: "justify" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa,
              consectetur. Sapiente sed ut veniam, rerum nesciunt fugit dolore
              dicta, voluptate minima, aliquam unde. Consequuntur repudiandae
              veritatis ipsam, omnis quas sed. Omnis illo nostrum, beatae
              voluptates in optio velit neque architecto corrupti amet
              inventore. Quos eos blanditiis dolores eum veritatis amet.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  )
}

export default ContactPage

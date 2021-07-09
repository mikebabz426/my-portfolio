import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  Container,
  IconButton,
  Typography,
  Box,
  Button,
  Link as MuiLink,
  Collapse,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { StaticImage } from "gatsby-plugin-image"

const useStyles = makeStyles(theme => ({
  root: {
    margin: "auto",
    minHeight: "100vh",
    width: "100vw",
  },
  heading: {},
  content: {
    marginTop: "10rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  info: {
    margin: "1rem",
    maxWidth: "600px",
  },
  image: {
    margin: "1rem",
    boxShadow: ".2px .5px 5px #333",
  },
}))

const ProjectsPage = ({ location }) => {
  const classes = useStyles()
  console.log(location)
  return (
    <Layout>
      <SEO title="Projects" />
      <Container maxWidth="lg" className={classes.root}>
        <Box className={classes.content}>
          <Box className={classes.info}>
            <Typography className={classes.heading} variant="h2">
              {location.state.name}
            </Typography>
            <Typography variant="h5" style={{ margin: "1rem 0" }}>
              Summary
            </Typography>
            <Typography variant="body2">
              {location.state.description}
            </Typography>
            <Typography variant="h5" style={{ margin: "1rem 0" }}>
              Approach
            </Typography>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              vel sint debitis consequuntur pariatur dolor dolorem maiores
              repudiandae soluta numquam!
            </Typography>
          </Box>
          <Box className={classes.image}>
            {location.state.name === "Sunset Canines" ? (
              <StaticImage
                src="../images/sunset.png"
                alt="sunset main page"
                loading="eager"
                placeholder="blurred"
                width={370}
                height={247}
              />
            ) : location.state.name === "My Fleet Tracker" ? (
              <StaticImage
                src="../images/fleet.jpg"
                alt="sunset main page"
                loading="eager"
                placeholder="blurred"
                width={432}
                height={288}
              />
            ) : (
              <StaticImage
                src="../images/lucky.png"
                alt="sunset main page"
                loading="eager"
                placeholder="blurred"
                width={432}
                height={288}
              />
            )}
          </Box>
        </Box>
      </Container>
    </Layout>
  )
}

export default ProjectsPage

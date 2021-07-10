import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  Container,
  Typography,
  Box,
  Link as MuiLink,
  Button,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import { StaticImage } from "gatsby-plugin-image"
import TechStack from "../components/techStack"
import { Link } from "gatsby"

const useStyles = makeStyles(theme => ({
  root: {
    margin: "auto",
    minHeight: "100vh",
    width: "100vw",
  },
  heading: { margin: "7rem 0rem 2rem 1rem", maxWidth: "600px" },
  content: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column-reverse",
    },
  },
  info: {
    margin: "1rem",
    maxWidth: "600px",
  },
  imageBox: {
    margin: "1rem",
  },
  image: {
    marginBottom: "3rem",
    boxShadow: ".2px .5px 5px #333",
  },
  btnBox: {
    marginTop: "3rem",
    marginLeft: "0",
    marginBottom: "3rem",
  },
  tech: {
    [theme.breakpoints.down("sm")]: {
      marginLeft: "1rem",
    },
  },
}))

const ProjectsPage = ({ location }) => {
  const classes = useStyles()
  const { name, goal, approach, url, git } = location.state
  return (
    <Layout headerInfo={false}>
      <SEO title="Projects" />
      <Container maxWidth="lg" className={classes.root}>
        <Typography className={classes.heading} variant="h2">
          {name}
        </Typography>
        <Box className={classes.content}>
          <Box className={classes.info}>
            <Typography variant="h5" style={{ margin: "1rem 0" }}>
              Summary
            </Typography>
            <Typography variant="body2">{goal}</Typography>
            <Typography variant="h5" style={{ margin: "1rem 0" }}>
              Approach
            </Typography>
            <Typography variant="body2">{approach}</Typography>
            <Box className={classes.btnBox}>
              <MuiLink
                to={git}
                target="_blank"
                component={Link}
                style={{ margin: "0 3px" }}
              >
                <Button size="small" color="secondary" variant="contained">
                  Code
                </Button>
              </MuiLink>
              <MuiLink
                to={url}
                target="_blank"
                component={Link}
                style={{ margin: "0 3px" }}
              >
                <Button size="small" color="secondary" variant="contained">
                  Site
                </Button>
              </MuiLink>
            </Box>
          </Box>
          <Box className={classes.imageBox}>
            {location.state.name === "Sunset Canines" ? (
              <StaticImage
                className={classes.image}
                src="../images/sunset.png"
                alt="sunset main page"
                loading="eager"
                placeholder="blurred"
                width={370}
                height={247}
              />
            ) : location.state.name === "My Fleet Tracker" ? (
              <StaticImage
                className={classes.image}
                src="../images/fleet.jpg"
                alt="sunset main page"
                loading="eager"
                placeholder="blurred"
                width={370}
                height={247}
              />
            ) : (
              <StaticImage
                className={classes.image}
                src="../images/lucky.png"
                alt="sunset main page"
                loading="eager"
                placeholder="blurred"
                width={370}
                height={247}
              />
            )}
            <TechStack project={location.state} className={classes.tech} />
          </Box>
        </Box>
      </Container>
    </Layout>
  )
}

export default ProjectsPage

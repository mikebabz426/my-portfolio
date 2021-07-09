import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Container, Typography, Fade, Box } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import Project from "../../components/project"
import projectsArr from "../../services/services.js"
import { useInView } from "react-intersection-observer"
import Card from "../../components/card"

const useStyles = makeStyles(theme => ({
  root: {
    padding: "6rem 2rem",
    backgroundColor: theme.palette.type === "light" ? "#f2f2f2" : "#222",
    clipPath: "polygon(0 0, 100% 4%, 100% 100%, 0 96%)",
    [theme.breakpoints.down("sm")]: {
      clipPath: "polygon(0 0, 100% 1%, 100% 100%, 0 99%)",
    },
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
  projects: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}))

const ProjectsSection = () => {
  const data = useStaticQuery(graphql`
    {
      fleet: file(relativePath: { eq: "fleet.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      sunset: file(relativePath: { eq: "sunset.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      lucky: file(relativePath: { eq: "lucky.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const classes = useStyles()
  const fleet = data.fleet.childImageSharp.fluid
  const sunset = data.sunset.childImageSharp.fluid
  const lucky = data.lucky.childImageSharp.fluid
  const { ref, inView } = useInView()

  return (
    <Fade in={inView} timeout={1000}>
      <Container maxWidth="lg" className={classes.root} ref={ref} id="projects">
        <Typography variant="h2" align="center" className={classes.heading}>
          Take a look around
        </Typography>
        <Typography variant="h5" align="center" className={classes.subheading}>
          here's some of my rescent work
        </Typography>
        <Box className={classes.projects}>
          <Card />
          <Card />
          <Card />
          <Card />
        </Box>
        {/* <Project source={fleet} project={projectsArr[0]} />
        <Divider light variant="middle" className={classes.divider} />
        <Project source={sunset} project={projectsArr[1]} />
        <Divider light variant="middle" className={classes.divider} />
        <Project source={lucky} project={projectsArr[2]} />
        <Divider light variant="middle" className={classes.divider} /> */}
      </Container>
    </Fade>
  )
}

export default ProjectsSection

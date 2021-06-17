import React, { useState, useEffect } from "react"

import {
  Grid,
  Typography,
  Box,
  Container,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Avatar,
  Fade,
} from "@material-ui/core"
import WebIcon from "@material-ui/icons/Web"
import BrushIcon from "@material-ui/icons/Brush"
import LayersIcon from "@material-ui/icons/Layers"
import { useInView } from "react-intersection-observer"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  section: {
    backgroundColor: theme.palette.type === "light" ? "#f2f2f2" : "#222",
    clipPath: "polygon(0 0, 100% 5%, 100% 100%, 0 95%)",
    minHeight: "100vh",
    paddingTop: "10rem",
    [theme.breakpoints.down("sm")]: {
      clipPath: "polygon(0 0, 100% 1%, 100% 100%, 0 99%)",
    },
  },
  card: {
    minWidth: 275,
    maxWidth: 300,
  },
  chip: {
    margin: ".5rem",
  },
  type: {
    margin: ".5rem auto",
  },
  grid: {
    marginTop: "3rem",
  },
  closing: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "5rem",
    textAlign: "justify",
  },
  headers: {
    textAlign: "left",
  },
}))

const SkillsSection = () => {
  const classes = useStyles()
  const [, setAnimation] = useState(false)
  const { ref, inView } = useInView()

  useEffect(() => setAnimation(true), [])

  const frontEnd = [
    "React",
    "GatsbyJS",
    "HTML5",
    "CSS3",
    "GraphQL",
    "Javascript",
  ]
  const design = ["Photoshop", "Illustrator", "AdobeXD", "Figma"]
  const cssTools = ["Material UI", "Bootstrap", "Styled Components", "SASS"]

  return (
    <Container maxWidth="lg" className={classes.section} id="skills">
      <Typography variant="h2" align="center">
        Here's an overview of some of my skills
      </Typography>

      <Grid
        className={classes.grid}
        container
        spacing={4}
        justify="center"
        align="center"
      >
        <Grid item>
          <Fade in={inView} timeout={1000}>
            <Card raised className={classes.card}>
              <CardHeader
                className={classes.headers}
                title="Front-End Technologies"
                avatar={
                  <Avatar aria-label="web">
                    <WebIcon color="primary" />
                  </Avatar>
                }
              />
              <CardContent>
                {frontEnd.map(tech => (
                  <Chip
                    color="primary"
                    className={classes.chip}
                    label={tech}
                    key={tech}
                  />
                ))}
              </CardContent>
            </Card>
          </Fade>
        </Grid>
        <Grid item>
          <Fade in={inView} timeout={1250}>
            <Card raised className={classes.card} ref={ref}>
              <CardHeader
                title="Design Tools"
                className={classes.headers}
                avatar={
                  <Avatar aria-label="web">
                    <BrushIcon color="primary" />
                  </Avatar>
                }
              />
              <CardContent>
                {design.map(tech => (
                  <Chip
                    color="primary"
                    className={classes.chip}
                    label={tech}
                    key={tech}
                  />
                ))}
              </CardContent>
            </Card>
          </Fade>
        </Grid>
        <Grid item>
          <Fade in={inView} timeout={1500}>
            <Card raised className={classes.card}>
              <CardHeader
                title="CSS Frameworks & Tools"
                className={classes.headers}
                avatar={
                  <Avatar aria-label="web">
                    <LayersIcon color="primary" />
                  </Avatar>
                }
              />
              <CardContent>
                {cssTools.map(tech => (
                  <Chip
                    color="primary"
                    className={classes.chip}
                    label={tech}
                    key={tech}
                  />
                ))}
              </CardContent>
            </Card>
          </Fade>
        </Grid>
      </Grid>
      <Container maxWidth="md" className={classes.closing}>
        <Typography variant="body1">
          I am constantly looking for the latest and greatest in tech. Here are
          some of the technologies I am currently working with and planning on
          incorporating into my workflow very soon.
        </Typography>
        <Box style={{ display: "flex", margin: "2rem" }}>
          <Chip color="primary" label="Docker" className={classes.chip} />
          <Chip color="primary" label="Kubernetes" className={classes.chip} />
        </Box>
      </Container>
    </Container>
  )
}

export default SkillsSection

import React, { useState } from "react"
import * as cardStyles from "./card.module.css"
import { Button, Link as MuiLink } from "@material-ui/core"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Card = ({ project }) => {
  const [hoverClass, setHoverClass] = useState(false)

  const cardHoverStyle = {
    top: "200px",
  }

  return (
    <div
      className={cardStyles.card}
      onClick={() =>
        setHoverClass(hoverClass => (hoverClass === false ? true : false))
      }
    >
      {project.name === "Sunset Canines" ? (
        <StaticImage
          src="../images/sunsetcard.png"
          alt="sunset main page"
          loading="eager"
          placeholder="blurred"
          width={300}
          height={400}
        />
      ) : project.name === "My Fleet Tracker" ? (
        <StaticImage
          src="../images/volvocard.jpg"
          alt="sunset main page"
          loading="eager"
          placeholder="blurred"
          width={300}
          height={400}
        />
      ) : (
        <StaticImage
          src="../images/luckyCharm.jpg"
          alt="sunset main page"
          loading="eager"
          placeholder="blurred"
          width={300}
          height={400}
        />
      )}

      <div
        className={cardStyles.content}
        style={hoverClass ? cardHoverStyle : null}
      >
        <h3 className={cardStyles.heading}>{project.name}</h3>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <MuiLink
            to={project.git}
            target="_blank"
            component={Link}
            style={{ margin: "0 3px" }}
          >
            <Button size="small" color="secondary" variant="contained">
              Code
            </Button>
          </MuiLink>
          <MuiLink
            to={project.url}
            target="_blank"
            component={Link}
            style={{ margin: "0 3px" }}
          >
            <Button size="small" color="secondary" variant="contained">
              Site
            </Button>
          </MuiLink>
          <MuiLink
            to="/projects"
            component={Link}
            style={{ margin: "0 3px" }}
            state={project}
          >
            <Button size="small" color="secondary" variant="contained">
              ...More
            </Button>
          </MuiLink>
        </div>
      </div>
    </div>
  )
}

export default Card

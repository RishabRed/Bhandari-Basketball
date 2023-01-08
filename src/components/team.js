import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Team = ({ team, slug }) => {
  const profile = getImage(team.artistMeta.image.localFile)
  return (
    <Link to={slug}>
      <GatsbyImage
        image={profile}
        alt={team.basketballMeta.image.altText}
      />
      <article>
        {team.basketballMeta.title && <p>{team.basketballMeta.title}</p>}
        <p>
          {team.basketballMeta.owner} {team.basketballMeta.founded}
        </p>
      </article>
    </Link>
  )
}

export default Team;
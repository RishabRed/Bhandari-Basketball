import { graphql } from 'gatsby'
import * as React from 'react'
import Layout from '../../components/layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const TeamPage = ({ data: { wpTeam: { basketballMeta: team } } }) => {
  const image = getImage(team.image.localFile)
  return (
    <Layout pageTitle="Team">
      <div>
        <GatsbyImage image={image} alt={team.image.altText}/>
        <h1>{team.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: team.description }} />
        <p>Owner: {team.owner}</p>
        <p>Team colors: {team.teamColors}</p>
        <p>Main sponsor: {team.mainSponsor}</p>
        <p>Location: {team.location}</p>
        <p>Founded: {team.founded}</p>
        <p>Championships: {team.championships}</p>
        <p>Arena: {team.arena}</p>
      </div>
    </Layout>
  )
}

export const query = graphql`
query($id: String) {
  wpTeam(id: {eq: $id}) {
    basketballMeta {
      title
      teamColors
      owner
      mainSponsor
      location
      founded
      description
      championships
      arena
      image {
        localFile {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
        altText
      }
    }
  }
}
`

export default TeamPage
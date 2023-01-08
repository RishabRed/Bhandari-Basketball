import * as React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../../components/layout'


const TeamsPage = ({ data: { allWpTeam: { edges } } }) => {
  return (
    <Layout pageTitle="Teams of NBA">
      {edges.map((item) => {
        const team = item.node.basketballMeta;
        const slug = item.node.slug;
        return <Link to={`/teams/${slug}`}>
          <p key={item.node.id}>{team.title} ({team.location}) {team.founded} </p>
        </Link>

      })}
    </Layout>
  )
}

export const query = graphql`
query MyQuery {
  allWpTeam {
    edges {
      node {
        basketballMeta {
          title
          location
          founded
        }
        id
        slug
      }
    }
  }
}
`



export default TeamsPage
import { graphql, Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import * as React from 'react'
import Layout from '../components/layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import {
  header,
  headerInfo,
  headerPicture,
  headerTitle,
} from "../page.module.css"
import Team from '../components/team'


const IndexPage = ({ data: { wpPage: { homeFields } } }) => {
  const image = getImage(homeFields.picture.localFile)
  return (
    <Layout>
      <section className={header}>
        <article className={headerInfo}>
          <h1 className={headerTitle} >{homeFields.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: homeFields.description }} />
        </article>
        <div>
          <GatsbyImage image={image} alt={homeFields.picture.altText}/>

        </div>
      </section>
      <section>
        <h2>Featured Artists</h2>
        <article>
          {/* {homeFields.featuredProducts.map(team => {
            return<Team slug={`teams/${team.slug}`} key={team.id}  team={team} />
          })} */}
        </article>
      </section>

    </Layout>
  )
}

export const query = graphql`
query{
  wpPage(slug: {eq: "home"}) {
    homeFields {
      featuredProducts {
        ... on WpTeam {
          id
          slug
          basketballMeta {
            title
            founded
            arena
            image {
              altText
              localFile {
                childImageSharp {
                  gatsbyImageData(placeholder: BLURRED)
                }
              }
            }
          }
        }
      }
      title
      description
      picture {
        altText
        localFile {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED)
          }
        }
      }
    }
  }
}

`

export default IndexPage
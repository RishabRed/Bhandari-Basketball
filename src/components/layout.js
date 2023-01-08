import * as React from 'react'
import { container, nav, navLinks, navLinkItem, navLinkText, siteTitle } from './layout.module.css'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Footer from './footer'

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
  query{
    site {
      siteMetadata {
        title
      }
    }
      wpPage(slug: {eq: "contact-us"}) {
        contactUsFields {
          address
          email
          phoneNumber
        }
      }
       
  }
  `)
  return (
    <div className={container}>
      <title>{data.site.siteMetadata.title}</title>
      <nav className={nav}>
        <header className={siteTitle}><h1>{data.site.siteMetadata.title}</h1></header>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link className={navLinkText} to="/">
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link className={navLinkText} to="/about">
              About
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link className={navLinkText} to="/teams" >
              Teams
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        {children}
      </main>
      <Footer 
      siteTitle={data.site.siteMetadata.title}
      companyInfo={data.wpPage.contactUsFields}/>
    </div>
  )
}

export default Layout
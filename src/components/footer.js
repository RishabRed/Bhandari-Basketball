import React from "react"
import {
    wrapper,
    title,
    socials,
    instagram,
    facebook,
  } from "./footer.module.css"

const Footer = ({ siteTitle, companyInfo }) => {
  return (
    <footer className={wrapper}>
      <section>
        <p className={title} >{siteTitle}</p>
        <p>BHANDARI</p>
        <p>All rights reserved.</p>
      </section>
      <section>
        <p>{`${companyInfo.address}, ${companyInfo.email} ${companyInfo.phoneNumber}`}</p>
      </section>
    </footer>
  )
}

export default Footer
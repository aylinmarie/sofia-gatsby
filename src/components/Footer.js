import React from "react"

import "./Footer.less"

const Footer = ({ children }) => {
  return (
    <footer className="sofia-footer">
        <p>hello@example.com</p>
      Built by <a href="https://www.aylinmarie.co" target="_blank" rel="noopener noreferrer">Aylin Marie</a> {new Date().getFullYear()} with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </footer>
  )
}

export default Footer

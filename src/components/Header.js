import { Link } from "gatsby"
import React from "react"
import "./Header.less"

const Header = () => (
  <header>
    <ul className="header-wrapper">
      <li>Welcome</li>
      <li><Link to="#contact">Contact</Link></li>
      <li className="header-branding"><Link to="/">Sofia Rey</Link></li>
      <li>
        <a href="www.instagram.com" target="_blank">Instagram</a>
      </li>
      <li>LinkedIn</li>
    </ul>
  </header>
)

export default Header

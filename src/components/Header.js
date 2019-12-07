import { Link } from "gatsby"
import React from "react"
import "./Header.less"

const Header = () => (
  <header>
    <ul className="header-wrapper">
      <li>Welcome</li>
      <li>Contact</li>
      <li>Sofia Rey</li>
      <li>
        <Link to="www.instagram.com">Instagram</Link>
      </li>
      <li>LinkedIn</li>
    </ul>
  </header>
)

export default Header

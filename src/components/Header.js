import { Link } from "gatsby"

import React from "react"
import "./Header.less"

const Header = () => {
  return (
  <header className="header-wrapper">
    <nav>
      <ul className="header-nav">
        <li>Welcome</li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
    <div>
      <Link to="/" className="header-branding">
        Sofia Rey
      </Link>
    </div>
    <nav>
      <ul className="header-nav">
        <li>
          <a href="www.instagram.com" target="_blank">
            Instagram
          </a>
        </li>
        <li>LinkedIn</li>
      </ul>
    </nav>
  </header>
  )
}

export default Header

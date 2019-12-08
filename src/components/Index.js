import React from "react"
import PropTypes from "prop-types"
import "./Index.less"

const Index = ({ children, style }) => (
  <section
    className={
      style === "alternate" ? "index-wrapper alternate" : "index-wrapper"
    }
  >
    {children}
  </section>
)

Index.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.oneOf(["alternate", "none"]),
}

export default Index

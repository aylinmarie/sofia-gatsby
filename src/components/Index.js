import React from "react";
import PropTypes from 'prop-types';
import "./Index.less";

const Index = ({ children }) => (
  <section className="indexWrapper">
      {children}
  </section>
)

Index.propTypes = {
    childrend: PropTypes.node.isRequired
  };

export default Index

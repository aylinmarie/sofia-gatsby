import React from "react";
import PropTypes from 'prop-types';
import "./Index.less";

const Index = ({ children, style }) => (
  <section className={style === `alternate` ? 'index-wrapper alternate' : 'index-wrapper'}>
      {children}
  </section>
)

Index.propTypes = {
    children: PropTypes.node.isRequired,
    children: PropTypes.oneOf(['alternate']),

  };

export default Index

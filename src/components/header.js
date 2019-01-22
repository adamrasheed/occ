import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle, description }) => (
  <header class="header">
    <h1 className="header__title">{siteTitle}</h1>
    <p className="header__description">{description}</p>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import SEO from './seo'
import Header from './header'
import Footer from './footer'
import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
            author {
              name
              twitter
            }
            airtableRefLink
          }
        }
      }
    `}
    render={data => (
      <div class="site-wrapper">
        <SEO title="OC Creative" />
        <Header
          siteTitle={data.site.siteMetadata.title}
          description={data.site.siteMetadata.description}
        />
        <main class="main">{children}</main>
        <Footer
          name={data.site.siteMetadata.author.name}
          twitterName={data.site.siteMetadata.author.twitter}
          referralLink={data.site.siteMetadata.airtableRefLink}
        />
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql, Link } from "gatsby"
import { ScrollingProvider } from 'react-scroll-section';

import Header from "./header"
import './all.sass'

const Layout = ({ children, isIndex }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <ScrollingProvider>
          <Header siteTitle={data.site.siteMetadata.title} isIndex={isIndex} />
          <main>{children}</main>
          <footer className="footer">
            <div className="content has-text-centered">
              <Link to="/mentions-legales/">Mentions légales</Link>
            </div>
          </footer>
        </ScrollingProvider>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  isIndex: PropTypes.bool,
}

Layout.defaultProps = {
  isIndex: false,
}

export default Layout

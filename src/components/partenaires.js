import React from "react"
import PropTypes from "prop-types"
import { graphql, StaticQuery } from "gatsby"

class Partenaires extends React.Component {
  render() {
    const { data } = this.props
    const { edges: partenaires } = data.allMarkdownRemark

    return (
      <section className="section">
        <div className="container">
          <div className="columns is-multiline">
            {partenaires &&
              partenaires.map(({ node: post }, index) => (
                <article className="column is-half" key={index}>
                  <h2>{post.frontmatter.title}</h2>
                  <div dangerouslySetInnerHTML={{ __html: post.frontmatter.content }} />
                </article>
              ))}
          </div>
        </div>
      </section>
    )
  }
}

Partenaires.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query PartenairesQuery {
        allMarkdownRemark(
          limit: 2
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "partenaires" } } }
        ) {
          totalCount
          edges {
            node {
              excerpt(pruneLength: 5000)
              id
              frontmatter {
                title
                content
                date(formatString: "DD/MM/YYYY")
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <Partenaires data={data} count={count} />}
  />
)

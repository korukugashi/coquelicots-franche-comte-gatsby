import React from "react"
import PropTypes from "prop-types"
import { graphql, StaticQuery } from "gatsby"
import Content, { HTMLContent } from "./Content"

export const PartenaireTemplate = ({ title, content, contentComponent }) => {
  const PostContent = contentComponent || Content

  return (
    <div>
      <h2>{title}</h2>
      <PostContent content={content} />
    </div>
  )
}

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
                  <PartenaireTemplate
                    title={post.frontmatter.title}
                    content={post.html}
                    contentComponent={HTMLContent}
                  />
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
              html
              frontmatter {
                title
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

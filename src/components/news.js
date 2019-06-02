import React from "react"
import PropTypes from "prop-types"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"

const Image = ({ photo }) => ( 
  <div className="column is-6">
    <Img
      fluid={photo.image.childImageSharp.fluid}
      alt={photo.description}
      style={{
        maxWidth: photo.image.childImageSharp.fluid.presentationWidth,
        height: photo.image.childImageSharp.fluid.presentationWidth,
        margin: "0 auto",
      }}
      imgStyle={{ objectFit: "contain" }}
    />
  </div>
)

class News extends React.Component {
  render() {
    const { data } = this.props
    const { edges: news } = data.allMarkdownRemark

    return (
      <section className="section">
        <div className="container">
          <h1 style={{ color: '#fff', marginBottom: '3rem' }}><span>Actualités</span></h1>
          <div className="columns is-multiline">
            {news && news.map(({ node: post}, index) => (
                <article className="column is-half" key={index}>
                    <div className="box">
                        <h2>{post.frontmatter.title}</h2>
                        <time dateTime="2019-05-19">{post.frontmatter.date}</time>
                        <div dangerouslySetInnerHTML={{ __html: post.frontmatter.content }} />
                        {post.frontmatter.photos ? (
                          <div className="columns is-multiline is-centered" style={{ marginTop: '0.5rem' }}>
                          {post.frontmatter.photos.map((photo, index) => (
                              <Image photo={photo} key={index} />
                            ))}
                          </div>
                        ) : null}
                    </div>
                </article>
              ))}
          </div>
        </div>
      </section>
    )
  }
}

News.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query NewsQuery {
        allMarkdownRemark(
          limit: 4
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "actualites" } } }
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
                photos {
                  image {
                    childImageSharp {
                      fluid(maxWidth: 120, quality: 80) {
                        ...GatsbyImageSharpFluid_withWebp_noBase64
                        presentationWidth
                      }
                    }
                  }
                  description
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <News data={data} count={count} />}
  />
)

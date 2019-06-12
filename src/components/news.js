import React from "react"
import PropTypes from "prop-types"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import Content, { HTMLContent } from "./Content"

const Image = ({ photo }) => (
  <div className="column is-6">
    {photo.image && photo.image.childImageSharp ? (
      <Img
        fluid={photo.image.childImageSharp.fluid}
        alt={photo.description}
        style={{
          maxWidth: photo.image.childImageSharp.fluid.presentationWidth,
          margin: "0 auto",
        }}
        imgStyle={{ objectFit: "contain" }}
      />
    ) : (
      <img
        src={photo.image}
        alt={photo.description}
        style={{ maxWidth: 300 }}
      />
    )}
  </div>
)

export const ActualiteTemplate = ({
  title,
  date,
  content,
  photos,
  contentComponent,
}) => {
  const PostContent = contentComponent || Content

  return (
    <div className="box">
      <h2>{title}</h2>
      <time dateTime="2019-05-19">{date}</time>
      <PostContent content={content} />
      {photos ? (
        <div
          className="columns is-multiline is-centered"
          style={{ marginTop: "0.5rem" }}
        >
          {photos.map((photo, index) => (
            <Image photo={photo} key={index} />
          ))}
        </div>
      ) : null}
    </div>
  )
}

class News extends React.Component {
  render() {
    const { data } = this.props
    const { edges: news } = data.allMarkdownRemark

    return (
      <section className="section">
        <div className="container">
          <h1 style={{ color: "#fff", marginBottom: "3rem" }}>
            <span>Actualités</span>
          </h1>
          <div className="columns is-multiline is-centered">
            {news &&
              news.map(({ node: post }, index) => (
                <article className="column is-half" key={index}>
                  <ActualiteTemplate
                    title={post.frontmatter.title}
                    date={post.frontmatter.date}
                    content={post.html}
                    contentComponent={HTMLContent}
                    photos={post.frontmatter.photos}
                  />
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
              html
              frontmatter {
                title
                date(formatString: "DD/MM/YYYY")
                photos {
                  image {
                    childImageSharp {
                      fluid(maxWidth: 300, quality: 80) {
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

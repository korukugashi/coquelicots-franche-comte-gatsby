import React from "react"
import PropTypes from "prop-types"
import { graphql, StaticQuery } from "gatsby"
import Img from "gatsby-image"
import Slider from "react-slick"

class Galerie extends React.Component {
  render() {
    const { data } = this.props
    const { edges: galerie } = data.allMarkdownRemark
    const settings = {
      className: "slider variable-width center",
      centerMode: true,
      infinite: true,
      variableWidth: true,
      autoplay: true,
      speed: 1000,
      autoplaySpeed: 3000
    }

    return (
      <section className="section" style={{ padding: 0 }}>
        <Slider {...settings}>
          {galerie &&
            galerie.map(({ node: item }, index) => (
              <div key={index} className="galerie-item">
                <Img
                  fixed={item.frontmatter.image.childImageSharp.fixed}
                  alt={item.frontmatter.title}
                />
                <div className="galerie-title">{item.frontmatter.title}</div>
                <div className="galerie-date">{item.frontmatter.date}</div>
              </div>
            ))}
        </Slider>
      </section>
    )
  }
}

Galerie.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query GalerieQuery {
        allMarkdownRemark(
          limit: 15
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "galerie" } } }
        ) {
          totalCount
          edges {
            node {
              excerpt(pruneLength: 5000)
              id
              frontmatter {
                title
                date(formatString: "DD/MM/YYYY")
                image {
                  childImageSharp {
                    fixed(height: 300, quality: 80) {
                      ...GatsbyImageSharpFixed_withWebp_noBase64
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <Galerie data={data} count={count} />}
  />
)

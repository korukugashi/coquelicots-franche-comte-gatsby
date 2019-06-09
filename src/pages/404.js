import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404 : page non trouvée" />
    <section className="section">
      <div className="container">
        <h1>Page non trouvée</h1>
        <p className="has-text-centered">Malheureusement, nous n'avons pas pu trouver la page que vous recherchez.</p>
      </div>
    </section>
    
  </Layout>
)

export default NotFoundPage

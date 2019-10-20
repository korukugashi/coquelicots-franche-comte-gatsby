import React from "react"
import { Section } from "react-scroll-section"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Affiches from "../components/affiches"
import Groups from "../components/groups"
import Associations from "../components/associations"
import Mairies from "../components/mairies"
import Commercants from "../components/commercants"
import News from "../components/news"
import Galerie from "../components/galerie"
import Partenaires from "../components/partenaires"

import { ReactComponent as IconsSprite } from "../images/icons-sprite.svg"

const IndexPage = () => (
  <Layout isIndex={true}>
    <SEO
      title="Accueil"
      keywords={[`pesticides`, `coquelicots`, `Franche-Comté`, `glyphosate`]}
      jsonLd={[
        {
          "@context": "https://schema.org",
          "@id": "https://www.coquelicots-franche-comte.org/",
          "@type": "NGO",
          name: "Coquelicots Franche-Comté",
          legalName: "Nous voulons des coquelicots Franche-Comté",
          url: "https://www.coquelicots-franche-comte.org",
          logo:
            "https://www.coquelicots-franche-comte.org/logo-les-coquelicots.svg",
          description:
            "Collectif pour l'interdiction des pesticides en Franche-Comté. Organisé par les coquelicots de Besançon.",
          address: [
            {
              "@type": "PostalAddress",
              addressLocality: "Besançon",
              postalCode: "25000",
            },
          ],
          sameAs: [
            "https://www.facebook.com/groups/coquelicots.besancon/",
            "https://www.instagram.com/coquelicots_besancon/?hl=fr",
          ],
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Coquelicots Franche-Comté",
              item: "https://www.coquelicots-franche-comte.org/",
            },
          ],
        },
      ]}
    />
    <Section id="banner">
      <section className="hero">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="subtitle" style={{ color: "#fff" }}>
              <span>
                Les{" "}
                <strong style={{ color: "#fff" }}>
                  Franc-Comtois&middot;es
                </strong>{" "}
                s'organisent pour
              </span>
            </div>
            <h1 className="moon" style={{ color: "#f3ca83" }}>
              <span>l'interdiction des pesticides de synthèse</span>
            </h1>
          </div>
        </div>
      </section>
    </Section>
    <Section id="evenements">
      <Affiches />
    </Section>
    <div className="is-hidden">
      <IconsSprite />
    </div>
    <Section id="contacts">
      <Groups />
    </Section>
    <Section id="glyphosate25">
      <Partenaires />
    </Section>
    <Section id="photos">
      <Galerie />
    </Section>
    <Section id="actualite">
      <News />
    </Section>
    <Section id="nos-soutiens">
      <h1 style={{ marginTop: "4rem" }}>Nos soutiens</h1>
      <Associations />
      <Mairies />
      <Commercants />
    </Section>
    <Section id="l-appel">
      <section className="section">
        <div className="container">
          <h1>
            <span>Soutenez-nous, signez l'appel national !</span>
          </h1>
          <iframe
            className="lazyload"
            data-src="https://nousvoulonsdescoquelicots.org/widget/"
            scrolling="no"
            frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media"
            title="Appel des coquelicots"
          />
        </div>
      </section>
    </Section>
  </Layout>
)

export default IndexPage

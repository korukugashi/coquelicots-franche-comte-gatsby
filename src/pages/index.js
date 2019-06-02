import React from "react"
import { Section } from "react-scroll-section";

import Layout from "../components/layout"
import SEO from "../components/seo"
import Groups from "../components/groups"
import Associations from "../components/associations"
import Mairies from "../components/mairies"
import Commercants from "../components/commercants"
import News from "../components/news"

import AfficheAvril from "../images/2019-04-affiche.svg"
import AfficheMai from "../images/2019-05-affiche.svg"
import { ReactComponent as IconsSprite } from "../images/icons-sprite.svg"
import JeunesClimat from "../images/jeunes-et-climat.jpg"
import Couture from "../images/galerie/couture.jpg"
import Plantation from "../images/galerie/plantation.jpg"
import Chant from "../images/galerie/chant.jpg"
import Marche from "../images/galerie/marche.jpg"
import Rassemblement from "../images/galerie/rassemblement.jpg"

const IndexPage = () => (
  <Layout isIndex={true}>
    <SEO title="Accueil" keywords={[`pesticides`, `coquelicots`, `Franche-Comté`, `glyphosate`]} />
    <Section id="banner">
      <section className="hero">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="subtitle" style={{ color: '#fff' }}>
              <span style={{ maxWidth: 422 }}>Les <strong style={{ color: '#fff' }}>Franc-Comtois&middot;es</strong> s'organisent pour</span>
            </div>
            <h1 className="moon" style={{ color: '#f3ca83' }}>
              <span style={{ maxWidth: 722 }}>l'interdiction des pesticides de synthèse</span>
            </h1>
          </div>
        </div>
      </section>
    </Section>
    <Section id="evenements">
      <section className="section">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-hidden-touch">
              <img src={AfficheAvril} alt="Le 5 avril 2019, les jeunes à la une" style={{ width: '100%', minHeight: 195 }} />
            </div>
            <div className="column">
              <img src={AfficheMai} alt="Le 3 mai 2019, retour des hirondelles avec la LPO" style={{ width: '100%', minHeight: 195 }} />
            </div>
          </div>
        </div>
      </section>
    </Section>
    <div className="is-hidden">
      <IconsSprite />
    </div>
    <Section id="contacts">
      <Groups />
    </Section>
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column">
            <article>
              <h2>Glyphosate 25</h2>
              <p>Quelques signataires de Besançon ont créé l’association <strong>Campagne glyphosate 25</strong> pour permettre aux citoyens volontaires de faire un <strong>dosage de leur taux de Glyphosate dans les urines</strong> et de participer à l’action juridique engagée contre les responsables de cet empoisonnement.</p>
              <p>Plus de 100 personnes se sont déjà engagées dans cette action !</p>
              <p>Si vous souhaitez des informations ou participer à la campagne écrivez à <a href="mailto:campagne.glyphosate25@gmail.com">campagne.glyphosate25@gmail.com</a></p>
            </article>
          </div>
          <div className="column">
            <article>
              <h2>Les jeunes coquelicots</h2>
              <p className="has-text-centered"><img className="lazyload" data-src={JeunesClimat} alt="Jeunes et climat" style={{ maxWidth: 300 }} /></p>
              <p>De jeunes collégiens, lycéens et étudiants sont engagés dans le mouvement des coquelicots depuis octobre.</p>
              <p>Le lien s’est fait naturellement avec les marches pour le climat et les grèves climatiques de la jeunesse d’Europe et de Besançon !</p>
            </article>
          </div>
        </div>
      </div>
    </section>
    <Section id="photos" className="is-hidden-touch">
      <section className="section columns has-text-centered" style={{ padding: 0 }}>
        <img className="lazyload" data-src={Rassemblement} alt="Rassemblement" />
        <img className="lazyload" data-src={Chant} alt="Chant" />
        <img className="lazyload" data-src={Couture} alt="Couture" />
        <img className="lazyload" data-src={Plantation} alt="Plantation" />
        <img className="lazyload" data-src={Marche} alt="Marche" />
      </section>
    </Section>
    <Section id="actualite">
      <News />
    </Section>
    <Section id="nos-soutiens">
      <h1 style={{ marginTop: '4rem' }}>Nos soutiens</h1>
      <Associations />
      <Mairies />
      <Commercants />
    </Section>
    <Section id="l-appel">
      <section className="section">
        <div className="container">
          <h1><span>Soutenez-nous, signez l'appel national !</span></h1>
          <iframe className="lazyload" data-src="https://nousvoulonsdescoquelicots.org/widget/" scrolling="no" frameBorder="0" allowtransparency="true" allow="encrypted-media" title="Appel des coquelicots"></iframe>
        </div>
      </section>
    </Section>
  </Layout>
)

export default IndexPage

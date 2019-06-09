import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Obfuscate from "react-obfuscate"

const MentionsLegalesPage = () => (
  <Layout>
    <SEO title="Mentions légales" />
    <section className="section">
      <div className="container">
        <h1>Mentions légales</h1>
        <h2 className="has-text-left" style={{ marginTop: 40 }}>Editeur</h2>
        <p>Collectif "Nous voulons des Coquelicots Besançon"</p>
        <p><Obfuscate email="coquelicots.besancon@gmail.com">coquelicots.besancon@gmail.com</Obfuscate></p>
        <h2 className="has-text-left" style={{ marginTop: 40 }}>Hébergeur</h2>
        <h3>Netlify, Inc.</h3>
        <p>2325 3rd Street, Suite 215<br />San Francisco<br />California 94107<br />United States</p>
        <p><Obfuscate email="support@netlify.com">support@netlify.com</Obfuscate></p>
        <h2 className="has-text-left" style={{ marginTop: 40 }}>Données personnelles (RGPD)</h2>
        <p>Le site <a href="https://www.coquelicots-franche-comte.org/">www.coquelicots-franche-comte.org</a> ne stocke pas de cookies de tracking et ne collecte pas de données personnelles des visiteurs.</p>
        <p>Cependant nous incluons sur la page d'accueil une iframe du site <a href="https://nousvoulonsdescoquelicots.org">nousvoulonsdescoquelicots.org</a>, afin d'afficher la pétition de l'appel national "nous voulons des coquelicots", qui utilise un cookie Google Analytics accompagné d'un message permettant à l'internaute de refuser le cookie de tracking.</p>
        <p>Les informations que vous renseignez pour vous abonner aux newsletters sont gérées par le responsable du groupe local en charge de la newsletter : se référer à l'adresse de contact du groupe associé pour toute demande de consultation, modification ou suppression de vos données personnelles.</p>
        <p>Les données des responsables de groupes ainsi que les photos des évènements sont collectées par le collectif "Nous vouslons des coquelicots Besançon". Contacter <Obfuscate email="coquelicots.besancon@gmail.com">coquelicots.besancon@gmail.com</Obfuscate> pour toute demande de consultation, modification ou suppression de vos données personnelles.</p>
      </div>
    </section>
  </Layout>
)

export default MentionsLegalesPage

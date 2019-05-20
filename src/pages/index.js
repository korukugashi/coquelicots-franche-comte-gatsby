import React from "react"
import { Section } from "react-scroll-section";

import Layout from "../components/layout"
import SEO from "../components/seo"
import AfficheAvril from "../images/2019-04-affiche.svg"
import AfficheMai from "../images/2019-05-affiche.svg"
import { ReactComponent as IconsSprite } from "../images/icons-sprite.svg"
import JeunesClimat from "../images/jeunes-et-climat.jpg"
import Couture from "../images/galerie/couture.jpg"
import Plantation from "../images/galerie/plantation.jpg"
import Chant from "../images/galerie/chant.jpg"
import Marche from "../images/galerie/marche.jpg"
import Rassemblement from "../images/galerie/rassemblement.jpg"
import Biocoop from "../images/partenaires/biocoop.png"
import Fne from "../images/partenaires/fne.png"
import Gloria from "../images/partenaires/gloria.jpeg"
import Hophophop from "../images/partenaires/hophophop.jpg"
import Humanimo from "../images/partenaires/humanimo.png"
import Interbio from "../images/partenaires/interbio.png"
import Natureetdecouverte from "../images/partenaires/natureetdecouverte.jpg"
import Terredelien from "../images/partenaires/terredelien.jpg"
import Velorution from "../images/partenaires/velorution.png"

const IndexPage = () => (
  <Layout isIndex={true}>
    <SEO title="Accueil" keywords={[`pesticides`, `coquelicots`, `Franche-Comté`, `glyphosate`]} />
    <section className="hero" id="banner">
      <div className="hero-body">
        <div className="container has-text-centered">
          <div className="subtitle" style={{ color: '#fff' }}>Les <strong style={{ color: '#fff' }}>Franc-Comtois&middot;es</strong> s'organisent pour</div>
          <h1 className="moon" style={{ color: '#f3ca83' }}>l'interdiction des pesticides de synthèse</h1>
        </div>
      </div>
    </section>
    <Section id="evenements">
      <section className="section">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-hidden-touch">
              <img src={AfficheAvril} alt="Le 5 avril 2019, les jeunes à la une" style={{ width: '100%' }} />
            </div>
            <div className="column">
              <img src={AfficheMai} alt="Le 3 mai 2019, retour des hirondelles avec la LPO" style={{ width: '100%' }} />
            </div>
          </div>
        </div>
      </section>
    </Section>
    <div className="is-hidden">
      <IconsSprite />
    </div>
    <Section id="contacts">
      <section className="section region">
        <div className="container">
          <h1 style={{ color: '#fff' }}>Nous rejoindre en Franche-Comté</h1>
          <div className="columns has-text-centered">
            <div className="column">
              <h2>25 - Besançon</h2>
              <div className="columns is-centered">
                <a className="follow" href="mailto:coquelicots.besancon@gmail.com">
                  <svg className="email"><use xlinkHref="#icon-email"></use></svg>
                </a>
                <a className="follow" href="https://www.facebook.com/groups/coquelicots.besancon/">
                  <svg><use xlinkHref="#icon-facebook"></use></svg>
                </a>
                <a className="follow" href="https://www.instagram.com/coquelicots_besancon/?hl=fr">
                  <svg><use xlinkHref="#icon-instagram"></use></svg>
                </a>
              </div>
              <div className="newsletter">
                <a href="https://us19.campaign-archive.com/home/?u=e4f8d15b855aa248931c06c42&id=4c400b31f4">S'abonner à la newsletter</a>
              </div>
              <div><span className="has-text-weight-bold">Correspondante :</span> Emmanuelle Mercier</div>
            </div>
            <div className="column">
              <h2>70 - Melisey</h2>
              <div className="columns is-centered">
                <a className="follow" href="mailto:sylvie.claudel70@gmail.com">
                  <svg className="email"><use xlinkHref="#icon-email"></use></svg>
                </a>
                <a className="follow" href="https://www.facebook.com/Nous-voulons-des-coquelicots-Haute-Sa%C3%B4ne-299595797294662/">
                  <svg><use xlinkHref="#icon-facebook"></use></svg>
                </a>
              </div>
              <div><span className="has-text-weight-bold">Correspondante :</span> Sylvie Claudel</div>
            </div>
            <div className="column">
              <h2>25 - Valdahon</h2>
              <div className="columns is-centered">
                <a className="follow" href="mailto:lescoquelicotsduval@orange.fr">
                  <svg className="email"><use xlinkHref="#icon-email"></use></svg>
                </a>
                <a className="follow" href="https://www.facebook.com/groups/587648611657634/">
                  <svg><use xlinkHref="#icon-facebook"></use></svg>
                </a>
              </div>
              <div><span className="has-text-weight-bold">Correspondant :</span> Patrick</div>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <h2>25 - Trépot</h2>
              <div className="columns is-centered">
                <a className="follow" href="mailto:christine.grandjeanc@gmail.com">
                  <svg className="email"><use xlinkHref="#icon-email"></use></svg>
                </a>
              </div>
              <div><span className="has-text-weight-bold">Correspondante :</span> Christine Grandjean</div>
            </div>
            <div className="column">
              <h2>25 - Pelousey</h2>
              <div className="columns is-centered">
                <a className="follow" href="mailto:laujeang@gmail.com">
                  <svg className="email"><use xlinkHref="#icon-email"></use></svg>
                </a>
              </div>
              <div><span className="has-text-weight-bold">Correspondante :</span> Laurence Jeanguyot</div>
            </div>
            <div className="column">
              <h2>25 - Avanne</h2>
              <div className="columns is-centered">
                <a className="follow" href="mailto:jacqueline.poux@laposte.net">
                  <svg className="email"><use xlinkHref="#icon-email"></use></svg>
                </a>
              </div>
              <div><span className="has-text-weight-bold">Correspondante :</span> Jacqueline Poux</div>
            </div>
          </div>
        </div>
      </section>
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
              <p className="has-text-centered"><img src={JeunesClimat} alt="Jeunes et climat" style={{ maxWidth: 300 }} /></p>
              <p>De jeunes collégiens, lycéens et étudiants sont engagés dans le mouvement des coquelicots depuis octobre.</p>
              <p>Le lien s’est fait naturellement avec les marches pour le climat et les grèves climatiques de la jeunesse d’Europe et de Besançon !</p>
            </article>
          </div>
        </div>
      </div>
    </section>
    <Section id="photos" className="is-hidden-touch">
      <section className="section columns has-text-centered" style={{ padding: 0 }}>
        <img src={Rassemblement} alt="Rassemblement" />
        <img src={Chant} alt="Chant" />
        <img src={Couture} alt="Couture" />
        <img src={Plantation} alt="Plantation" />
        <img src={Marche} alt="Marche" />
      </section>
    </Section>
    <Section id="actualite">
      <section className="section" style={{ background: '#666' }}>
        <div className="container">
          <h1 style={{ color: '#fff', marginBottom: '3rem' }}>Actualité</h1>
          <div className="columns is-multiline">
            <article className="column is-half">
              <div className="box">
                <h2>Fleurissement</h2>
                <time datetime="2019-05-19">06/05/2019</time>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel semper augue. Maecenas volutpat vitae elit a aliquet. Vestibulum malesuada eros sit amet accumsan consequat. Phasellus dolor erat, cursus id aliquam ut, pretium sit amet nibh. Integer ultricies magna quis magna scelerisque gravida. Nulla eu erat placerat, molestie urna gravida, vestibulum felis. Aliquam a euismod nisl. Nunc quis pharetra eros. Curabitur eget sagittis diam.</p>
              </div>
            </article>
            <article className="column is-half">
              <div className="box">
                <h2>Rassemblements</h2>
                <time datetime="2019-05-19">06/05/2019</time>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel semper augue. Maecenas volutpat vitae elit a aliquet. Vestibulum malesuada eros sit amet accumsan consequat. Phasellus dolor erat, cursus id aliquam ut, pretium sit amet nibh. Integer ultricies magna quis magna scelerisque gravida. Nulla eu erat placerat, molestie urna gravida, vestibulum felis. Aliquam a euismod nisl. Nunc quis pharetra eros. Curabitur eget sagittis diam.</p>
              </div>
            </article>
            <article className="column is-half">
              <div className="box">
                <h2>Glyphosate 25</h2>
                <time datetime="2019-05-19">06/05/2019</time>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel semper augue. Maecenas volutpat vitae elit a aliquet. Vestibulum malesuada eros sit amet accumsan consequat. Phasellus dolor erat, cursus id aliquam ut, pretium sit amet nibh. Integer ultricies magna quis magna scelerisque gravida. Nulla eu erat placerat, molestie urna gravida, vestibulum felis. Aliquam a euismod nisl. Nunc quis pharetra eros. Curabitur eget sagittis diam.</p>
              </div>
            </article>
            <article className="column is-half">
              <div className="box">
                <h2>Creatifs Killers</h2>
                <time datetime="2019-05-19">06/05/2019</time>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel semper augue. Maecenas volutpat vitae elit a aliquet. Vestibulum malesuada eros sit amet accumsan consequat. Phasellus dolor erat, cursus id aliquam ut, pretium sit amet nibh. Integer ultricies magna quis magna scelerisque gravida. Nulla eu erat placerat, molestie urna gravida, vestibulum felis. Aliquam a euismod nisl. Nunc quis pharetra eros. Curabitur eget sagittis diam.</p>
              </div>
            </article>
          </div>
        </div>
      </section>
    </Section>
    <Section id="nos-soutiens">
      <section className="section" style={{ paddingTop: '4rem', paddingBottom: '6rem' }}>
        <div className="container">
          <h1 style={{ marginBottom: '4rem' }}>Nos soutiens</h1>
          <div className="columns is-multiline is-vcentered has-text-centered">
            <div className="column">
              <a href="#nos-soutiens">
                <img src={Biocoop} alt="Biocopop" />
              </a>
            </div>
            <div className="column">
              <a href="#nos-soutiens">
                <img src={Fne} alt="FNE 25-90" />
              </a>
            </div>
            <div className="column">
              <a href="#nos-soutiens">
                <img src={Gloria} alt="Gloria" />
              </a>
            </div>
            <div className="column">
              <a href="#nos-soutiens">
                <img src={Hophophop} alt="HopHopHop" />
              </a>
            </div>
            <div className="column">
              <a href="#nos-soutiens">
                <img src={Humanimo} alt="Humanimo" />
              </a>
            </div>
            <div className="column">
              <a href="#nos-soutiens">
                <img src={Interbio} alt="Interbio" />
              </a>
            </div>
            <div className="column">
              <a href="#nos-soutiens">
                <img src={Natureetdecouverte} alt="Nature et découverte" />
              </a>
            </div>
            <div className="column">
              <a href="#nos-soutiens">
                <img src={Terredelien} alt="Terre de Liens" />
              </a>
            </div>
            <div className="column">
              <a href="#nos-soutiens">
                <img src={Velorution} alt="Vélorution" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </Section>
    <Section id="l-appel">
      <section className="section" style={{ background: '#097c47' }}>
        <div className="container">
          <h1 style={{ color: '#fff' }}>Soutenez-nous, signez l'appel national !</h1>
          <iframe src="https://nousvoulonsdescoquelicots.org/widget/" width="340" height="500" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media" title="Appel des coquelicots"></iframe>
        </div>
      </section>
    </Section>
  </Layout>
)

export default IndexPage

import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { SectionLink } from "react-scroll-section"

import { ReactComponent as Logo}  from "../images/logo-les-coquelicots.svg"

const MenuItem = ({sectionName, sectionLabel, isIndex, toggleHamburger}) => (
  <SectionLink section={sectionName}>
    {({ onClick, isSelected}) => 
      <Link
        to={`/#${sectionName}`}
        className={`navbar-item ${isSelected ? `is-active` : ``}`}
        onClick={
          (evt) => {
            if (isIndex) {
              evt.preventDefault()
            }
            
            toggleHamburger()
            onClick()
          }
        }
      >
        <span>{sectionLabel}</span>
      </Link>
    }
  </SectionLink>
)

const Header = class extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    this.setState({ active: !this.state.active },
      () => {
        this.state.active
          ? this.setState({ navBarActiveClass: 'is-active' })
          : this.setState({ navBarActiveClass: '' })
      }
    )
  }

  render() {
    return (
      <header className="header">
        <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
          <div className="container is-fluid">
            <div className="navbar-brand">
              <Link className="navbar-item logo" to="/" title={this.props.siteTitle}>
                <Logo style={{ width: 60,  height: 60 }} />
                <h1 className="moon">
                  <span className="is-hidden-desktop-only is-hidden-mobile">Nous voulons des coquelicots - </span>
                  Franche-Comté
                </h1>
              </Link>
    
              <div
                className={`navbar-burger burger ${this.state.navBarActiveClass}`}
                aria-label="menu"
                aria-expanded="false"
                data-target="mainNavbar"
                onClick={ () => this.toggleHamburger() }
              >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </div>
            </div>
    
            <div id="mainNavbar" className={`navbar-menu ${this.state.navBarActiveClass}`}>
              <div className="navbar-end">
                <MenuItem sectionName="evenements" sectionLabel="Évènements" isIndex={this.props.isIndex} toggleHamburger={this.toggleHamburger} />
                <MenuItem sectionName="contacts" sectionLabel="Les groupes locaux" isIndex={this.props.isIndex} toggleHamburger={this.toggleHamburger} />
                <MenuItem sectionName="actualite" sectionLabel="Actualité" isIndex={this.props.isIndex} toggleHamburger={this.toggleHamburger} />
                <MenuItem sectionName="nos-soutiens" sectionLabel="Nos soutiens" isIndex={this.props.isIndex} toggleHamburger={this.toggleHamburger} />
                <MenuItem sectionName="l-appel" sectionLabel="L'appel des coquelicots" isIndex={this.props.isIndex} toggleHamburger={this.toggleHamburger} />
              </div>
            </div>
          </div>
        </nav>
      </header>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  isIndex: PropTypes.bool.isRequired,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

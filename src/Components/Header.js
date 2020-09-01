import React, { Component } from "react";

class Header extends Component {
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var profilepic = "images/" + this.props.data.image;
      var occupation = this.props.data.occupation;
      var description = this.props.data.description;
      var city = this.props.data.address.city;
      var networks = this.props.data.social.map(function (network) {
        return (
          <li key={network.name}>
            <a href={network.url}>
              <i className={network.className}></i>
            </a>
          </li>
        );
      });
    }

    return (
      <header id="home">
        <div class="box">
          <div className="row banner">
            <div className="banner-text">
              <h1 class="animate__animated animate__zoomIn animate__delay-1s">
                {name}
              </h1>
              <h3 class="animate__animated animate__fadeIn animate__delay-2s">
                A {city} based <span>{occupation}</span>. {description}
              </h3>
              <hr class="animate__animated animate__fadeIn animate__delay-2s" />
              <ul className="social animate__animated animate__fadeInUp animate__delay-3s">
                {networks}
              </ul>
            </div>
          </div>
        </div>
        <div className="three columns lol">
          <img
            className="profile-pic animate__animated animate__fadeIn animate__delay-5s"
            src={profilepic}
            alt="Laufey Profile Pic"
          />
        </div>
        <nav
          id="nav-wrap"
          className="animate__animated animate__fadeInDown animate__delay-5s"
        >
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav App">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#portfolio">
                Portfolio
              </a>
            </li>
          </ul>
        </nav>
        <div className="animate__animated animate__fadeIn animate__delay-5s">
          <div class="arrow">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;

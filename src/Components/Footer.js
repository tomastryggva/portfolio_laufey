import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    if (this.props.data) {
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
      <footer className="App">
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">{networks}</ul>

            <ul className="copyright">
              <li>
                &copy;{new Date().getFullYear()} LAUFEY INC | All rights
                reserved
              </li>
            </ul>
          </div>
          {/* <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open"></i>
            </a>
          </div> */}
        </div>
      </footer>
    );
  }
}

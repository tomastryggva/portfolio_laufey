import React, { Component } from "react";
import { Link } from "react-router-dom";

class Portfolio extends Component {
  render() {
    if (this.props.data) {
      var projects = this.props.data.projects.map(function (projects) {
        var projectImage = "images/portfolio/" + projects.image;
        return (
          <div key={projects.title} className="columns portfolio-item">
            <div className="item-wrap">
              <img alt={projects.title} src={projectImage} />
              {/* <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>{projects.title}</h5>
                  <p>{projects.category}</p>
                </div>
              </div> */}
            </div>
          </div>
        );
      });
    }

    return (
      <section id="portfolio" className="d-flex justify-content-center">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works</h1>

            <div
              id="portfolio-wrapper"
              className="bgrid-halves s-bgrid-thirds cf"
            >
              {projects}
            </div>
            <Link to="/portfolio">
              <div class="btn from-left">View portfolio</div>
            </Link>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;

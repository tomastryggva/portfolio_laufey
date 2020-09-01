import React, { Component } from "react";
import ReactGA from "react-ga";
import $ from "jquery";
import "./App.css";
import Header from "./Components/Header";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Portfolios from "./Components/Portfolios";
import Footer from "./Components/Footer";
import { Helmet } from "react-helmet";
import SimpleReactLightbox from "simple-react-lightbox";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      portfolioData: {},
    };

    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }

  getPortfolioData() {
    $.ajax({
      url: "/portfolioData.json",
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ portfolioData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        console.log(err);
        alert(err);
      },
    });
  }

  componentDidMount() {
    this.getPortfolioData();
  }

  render() {
    return (
      <div className="Apps">
        <Router>
          <Header data={this.state.portfolioData.main} />
          <Switch>
            <Route path="/" exact>
              <About data={this.state.portfolioData.main} />
              <Portfolio data={this.state.portfolioData.portfolio} />
            </Route>
            <Route path="/portfolio">
              <SimpleReactLightbox>
                <Helmet>
                  <style type="text/css">{`
                      .nav {
                            display: none
                            }
                      header {
                              height: 0px;
                              background-position: 50% 160%;
                            }
                      .arrow {
                            display: none;
                      }
                      #home .profile-pic {
                        height: 550px;
                        align-items: center;
                        position: relative;
                        left: 30px;
                        border-radius: 50%;
                        margin-top: 25%;
                        content:url("https://scontent.frkv1-1.fna.fbcdn.net/v/t1.0-9/20664804_10209935785368335_1563252904393793110_n.jpg?_nc_cat=107&_nc_sid=174925&_nc_ohc=ZP4knzEosvIAX8pgC85&_nc_oc=AQmdNHTmWAN4f-RD4tBH9SvYOwiw0yu7c_TvDYb3ho92gJ2z_NQ-VOcDn8AT1sG1Bv9kLh_G8Y5RQnw-UXRQu5XG&_nc_ht=scontent.frkv1-1.fna&oh=01bfbb8b360fff35603234dcf06277df&oe=5F57BBB4");
                    }
                    `}</style>
                </Helmet>
                <Portfolios data={this.state.portfolioData.main} />
              </SimpleReactLightbox>
            </Route>
          </Switch>
          <Footer data={this.state.portfolioData.main} />
        </Router>
      </div>
    );
  }
}

export default App;

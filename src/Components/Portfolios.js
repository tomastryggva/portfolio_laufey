import React, { Component } from "react";
import { SRLWrapper } from "simple-react-lightbox";

const options = {
  buttons: {
    iconPadding: "7px",
    iconColor: "rgb(255, 24, 101)",
  },
  caption: {
    captionFontFamily: "Montserrat, serif",
    captionFontSize: "30px",
    captionContainerPadding: "0px 10px",
    captionColor: "rgb(255, 24, 101);",
    captionFontWeight: 400,
    captionTextTransform: "uppercase",
  },
  settings: {
    overlayColor: "rgba(93, 87, 107, 0.9)",
    lightboxTransitionSpeed: 0.6,
    slideAnimationType: "fade",
    slideSpringValues: [300, 200],
    autoplaySpeed: 3000,
    hideControlsAfter: 3000,
  },
  progressBar: {
    height: "3px",
    fillColor: "rgb(255, 24, 101)",
    backgroundColor: "rgba(43, 45, 66, 0.9)",
  },
  thumbnails: {
    showThumbnails: true,
    thumbnailsPosition: "right",
    thumbnailsOpacity: 0.4,
    thumbnailsAlignment: "space-between",
    thumbnailsSize: ["230px", "200px"],
  },
};

class Portfolios extends Component {
  constructor() {
    super();
    this.myRef = React.createRef(); // Create a ref object
    this.state = {
      pictures: [],
      pictures2: [],
      pictures3: [],
      showHideFName: true,
      showHideLName: true,
      showHideNext: true,
    };
    this.hideComponent = this.hideComponent.bind(this);
  }

  hideComponent(name) {
    switch (name) {
      case "showHideFName":
        this.setState({ showHideFName: !this.state.showHideFName });
        break;
      case "showHideLName":
        this.setState({ showHideLName: !this.state.showHideLName });
        break;
      case "showHideNext":
        this.setState({ showHideNext: !this.state.showHideNext });
        break;
      default:
    }
  }

  componentDidMount() {
    fetch(
      "https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=91ba5a03340498df9458c5881e312b73&photoset_id=72157715448407111&user_id=144156250%40N04&format=json&nojsoncallback=1"
    )
      .then(function (res) {
        return res.json();
      })
      .then(
        function (j) {
          let picArray = j.photoset.photo.map((pic) => {
            var srcPath =
              "https://farm" +
              pic.farm +
              ".staticflickr.com/" +
              pic.server +
              "/" +
              pic.id +
              "_" +
              pic.secret +
              "_b.jpg";
            return (
              <img alt={pic.title} src={srcPath} class="imgBox zoom"></img>
            );
          });
          this.setState({ pictures: picArray });
        }.bind(this)
      );
    fetch(
      "https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=4516c1e2b980940fa9b226abb7e0d72a&photoset_id=72157715300628038&user_id=99830945%40N07&format=json&nojsoncallback=1"
    )
      .then(function (res) {
        return res.json();
      })
      .then(
        function (j) {
          let picArray = j.photoset.photo.map((pic) => {
            var srcPath =
              "https://farm" +
              pic.farm +
              ".staticflickr.com/" +
              pic.server +
              "/" +
              pic.id +
              "_" +
              pic.secret +
              "_b.jpg";
            return (
              <img alt={pic.title} src={srcPath} class="imgBox zoom"></img>
            );
          });
          this.setState({ pictures2: picArray });
        }.bind(this)
      );
    fetch(
      "https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=4516c1e2b980940fa9b226abb7e0d72a&photoset_id=72157715489412243&user_id=99830945%40N07&format=json&nojsoncallback=1"
    )
      .then(function (res) {
        return res.json();
      })
      .then(
        function (j) {
          let picArray = j.photoset.photo.map((pic) => {
            var srcPath =
              "https://farm" +
              pic.farm +
              ".staticflickr.com/" +
              pic.server +
              "/" +
              pic.id +
              "_" +
              pic.secret +
              "_b.jpg";
            return (
              <img alt={pic.title} src={srcPath} class="imgBox zoom"></img>
            );
          });
          this.setState({ pictures3: picArray });
        }.bind(this)
      );
    window.scrollTo(0, 0);
  }

  componentDidUpdate() {
    this.myRef.current.scrollTo(0, 0);
  }

  render() {
    const { showHideFName, showHideLName, showHideNext } = this.state;
    return (
      <div>
        <div className="filter fixme animate__animated animate__fadeIn animate__delay-1s">
          <h2>My full portfolio</h2>
        </div>
        <div class="multi-button buttonSize fixme2">
          <button onClick={() => this.hideComponent("showHideFName")}>
            LAUFEY PORTFOLIO
          </button>
          <button onClick={() => this.hideComponent("showHideLName")}>
            TOMAS
          </button>
          <button onClick={() => this.hideComponent("showHideNext")}>
            TOMAS PORTFOLIO 2
          </button>
        </div>
        <SRLWrapper options={options}>
          {showHideFName && (
            <div className="topbottomspace">
              <div className="container-fluid">
                <div className="row m-auto test">
                  <div>{this.state.pictures}</div>
                </div>
              </div>
            </div>
          )}
          {showHideLName && (
            <div className="topbottomspace">
              <div className="container-fluid">
                <div className="row m-auto test">
                  <div>{this.state.pictures2}</div>
                </div>
              </div>
            </div>
          )}
          {showHideNext && (
            <div className="topbottomspace">
              <div className="container-fluid">
                <div className="row m-auto test">
                  <div>{this.state.pictures3}</div>
                </div>
              </div>
            </div>
          )}
        </SRLWrapper>
        <div ref={this.myRef}></div>
      </div>
    );
  }
}

export default Portfolios;

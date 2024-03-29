import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      about_me: [
        {
          content:
            "GanaNaad, a news media house in Tripura,has a motto of walking on the path of truth, for the people."
        }
      ]
    };
  }

  render() {
    return (
      <>
        <Navbar />
        <section id="about" className="about-mf sect-pt4 route">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="box-shadow-full">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="row">
                        <div
                          className="col-sm-6 col-md-5"
                          style={{ margin: "0 auto" }}
                        >
                          <div
                            className="about-img"
                            style={{ textAlign: "center" }}
                          >
                            <img
                              src="/gananaad_logo.jpg"
                              className="img-fluid rounded b-shadow-a"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>

                    </div>
                    <div className="col-md-6">
                      <div className="about-me pt-4 pt-md-0">
                        <div className="title-box-2">
                          <h5 className="title-left">About Us</h5>
                        </div>
                        {this.state.about_me.map(content => {
                          return (
                            <p className="lead" >
                              {content.content}
                            </p>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </>
    );
  }
}

export default About;
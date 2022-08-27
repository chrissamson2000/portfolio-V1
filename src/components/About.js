import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";


export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="images/profile.jpeg" alt="" />
          </div>

          <div className="nine columns main-col">
            <h2>
              <span>About Me</span>
            </h2>
            <Fade left>
              <p>{resumeData.aboutme}</p>
            </Fade>
            <div className="row">
              <div className="columns contact-details">
                <h2>
                  <span>Contact Details</span>
                </h2>
                <Slide right>
                  <p className="address">
                    <span>{resumeData.name}</span>
                    <br />
                    <span>{resumeData.address}</span>
                    <br />
                    <span>{resumeData.website}</span>
                  </p>
                </Slide>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

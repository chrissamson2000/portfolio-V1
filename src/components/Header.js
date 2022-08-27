import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <header id="home">
        <nav id="nav-wrap">
          <ul id="nav" className="nav">
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
              <a className="smoothscroll" href="#resume">
                Resume
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#portfolio">
                Works
              </a>
            </li>
            {/* <li>
              <a className="smoothscroll" href="#testimonials">
                Testimonials
              </a>
            </li> */}
            {/* <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li> */}
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <Fade left>
              <h1 className="responsive-headline">{resumeData.name}</h1>
            </Fade>
            <Slide right>
              <h3 style={{ color: "#fff", fontFamily: "sans-serif " }}>
                  I am a {resumeData.role}.{resumeData.roleDescription}
                </h3>
            </Slide>
            <hr />
            <ul className="social">
              {resumeData.socialLinks &&
                resumeData.socialLinks.map((item) => {
                  return (
                    <li key={item.name}>
                      <a href={item.url} target="_blank">
                        <i className={item.className} />
                      </a>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle" />
          </a>
        </p>
      </header>
    );
  }
}

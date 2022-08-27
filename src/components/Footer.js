import React, { Component } from 'react';
export default class Footer extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <footer>
      <div className="row">
        <div className="twelve columns">
          <ul>
            <li>
              <h6>Built and designed by Chris Samson.</h6>
            </li>
            <li>
              <p>All rights reserved. ©</p>
            </li>
          </ul>
    
        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
      </div>
    </footer>
    );
  }
}
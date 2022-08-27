import React, { Component } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Link from '@mui/material/Link';
import CodeIcon from '@mui/icons-material/Code';

export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>
            <span>Check Out some of my Projects</span>
          </h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href={item.link}>
                      <img src={`${item.imgurl}`} className="item-img"/>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className='portfolio-icons'>
                    <Link href={item.link} target="_blank">
                      <VisibilityIcon fontSize='large'/>
                    </Link>
                    <Link href={item.code} target="_blank">
                      <CodeIcon fontSize='large'/>
                    </Link>
                  </div>
                </div>
              )
            })
          }
          </div>
        </div>
      </div>
  </section>
        );
  }
}
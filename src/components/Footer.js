import React, { Component } from "react";
import IconFacebook from "../assets/icons/facebook-logo.png"
import IconTwitter from "../assets/icons/twitter-logo.png"
import IconYoutube from "../assets/icons/youtube-logo.png"
import IconTwitch from "../assets/icons/twitch-logo.png"

class Footer extends Component {
    
    
    render() {
        return(
            <footer className="foot-section">
      <div className="container">
        <div className="footer-first">
          <div className="footer-first-content">
            <div className="nav-foot">
              <ul className="site-map-foot">
                <li className="site-map-item nav-item">
                  <a className="site-link" href="/#heroSection">Home</a>
                </li>
                <li className="site-map-item nav-item">
                  <a className="site-link" href="/#aboutUsSection">About</a>
                </li>
                <li className="site-map-item nav-item">
                  <a className="site-link" href="/#requireSection"
                    >System Requirements</a
                  >
                </li>
                <li className="site-map-item nav-item">
                  <a className="site-link" href="/#quotesSection">Quotes</a>
                </li>
                <li className="site-map-item nav-item">
                  <a className="site-link" href="/#featuresSection">Feature</a>
                </li>
              </ul>
              <ul className="socmed-list-box">
                <li className="nav-item">
                  <a className="socmed-link" href="#">
                    <img
                      src={IconFacebook}
                      alt="Facebook Icon"
                    />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="socmed-link pl-5" href="#">
                    <img
                      src={IconTwitter}
                      alt="Twitter Icon"
                    />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="socmed-link pl-5" href="#">
                    <img
                      src={IconYoutube}
                      alt="Youtube Icon"
                    />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="socmed-link pl-5" href="#">
                    <img
                      src={IconTwitch}
                      alt="Twitch Icon"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-second">
          <div className="footer-second-content d-flex justify-content-between">
            <div className="copyright">
              <span> © 2018 Your Games, Inc. All Rights Reserved</span>
            </div>
            <div className="rules-net">
              <ul className="rulnet-unlst">
                <li className="rulnet-lst">
                  <a className="rulnet-link" href="#">Privacy Policy</a>
                </li>
                <li className="rulnet-lst">
                  <a className="rulnet-link" href="#">Terms Of Services</a>
                </li>
                <li className="rulnet-lst">
                  <a className="rulnet-link" href="#">Code Of Conduct</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
        )
    }
}

export default Footer
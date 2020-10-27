import React from "react";
import Anchor from "../elements/Anchor"


import IconFacebook from "../assets/icons/facebook-logo.png"
import IconTwitter from "../assets/icons/twitter-logo.png"
import IconYoutube from "../assets/icons/youtube-logo.png"
import IconTwitch from "../assets/icons/twitch-logo.png"

export default function Footer() {
  
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
                  <a className="socmed-link" href="https://facebook.com">
                    <img
                      src={IconFacebook}
                      alt="Facebook Icon"
                    />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="socmed-link pl-5" href="https://facebook.com">
                    <img
                      src={IconTwitter}
                      alt="Twitter Icon"
                    />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="socmed-link pl-5" href="https://facebook.com">
                    <img
                      src={IconYoutube}
                      alt="Youtube Icon"
                    />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="socmed-link pl-5" href="https://facebook.com">
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
                  <Anchor className="rulnet-link" href="/privacy-policy">Privacy Policy</Anchor>
                </li>
                <li className="rulnet-lst">
                  <a className="rulnet-link" href="/term">Terms Of Services</a>
                </li>
                <li className="rulnet-lst">
                  <a className="rulnet-link" href="/code-of-conduct">Code Of Conduct</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
        )
    }

import React from 'react'
import { Link } from 'react-router-dom';
import { StyledFooter } from './styles';
import {BsFacebook} from 'react-icons/bs'
import {BsTwitter} from "react-icons/bs";
import {FaMeetup} from "react-icons/fa";
import {ImYoutube} from "react-icons/im";
import footerLogo from '../../../public/image/logo/logo.svg'

export const Footer = () => {
  return (
    <StyledFooter>
      <div className="footerWrap">
        <div className="footerData">
          <div className="footerLogo">
            <img src={footerLogo} alt="footer logo" />
          </div>
          <p className="description">
            A minimal, functional theme for running a paid-membership
            publication on Ghost.
          </p>
          <div className="footerLinks">
            <Link to="/">
              <span>
                <BsFacebook  size={25} />
              </span>
            </Link>
            <Link to="/">
              <span>
                <BsTwitter size={25} />
              </span>
            </Link>
            <Link to="/">
              <span>
                <FaMeetup size={25} />
              </span>
            </Link>
            <Link to="/">
              <span>
                <ImYoutube size={25} />
              </span>
            </Link>
          </div>
        </div>
        <div className="footerNav">
          <div className="footerNavColumn">
            <small>About</small>
            <ul>
              <li>
                <Link to="/">Features</Link>
              </li>
              <li>
                <Link to="/">Style Guide</Link>
              </li>
              <li>
                <Link to="/">Contact</Link>
              </li>
              <li>
                <Link to="/">Get Theme</Link>
              </li>
            </ul>
          </div>
          <div className="footerNavColumn">
            <small>FEATURES</small>
            <ul>
              <li>
                <Link to="/">Account</Link>
              </li>
              <li>
                <Link to="/">Membership</Link>
              </li>
              <li>
                <Link to="/">Sign in</Link>
              </li>
              <li>
                <Link to="/">Sign up</Link>
              </li>
            </ul>
          </div>
          <div className="footerNavColumn">
            <small>SUPPORT</small>
            <ul>
              <li>
                <Link to="/">Authors</Link>
              </li>
              <li>
                <Link to="/">Tags</Link>
              </li>
              <li>
                <Link to="/">Dark version</Link>
              </li>
              <li>
                <Link to="/">404</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footerCopyWright">
        <Link to="/">Okiro </Link>
        <span to="/">© 2022. All Right Reserved. Published with </span>
        <Link to="/">Ghost </Link>
        <span>& </span>
        <Link to="/">Okiro.</Link>
      </div>
    </StyledFooter>
  );
}

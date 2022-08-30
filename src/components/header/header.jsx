import React, { useState } from "react";
import {StyledHeader} from "./style";
import {Link} from "react-router-dom";
import {ROUTES} from "../../routes";
import {BsThreeDots} from "react-icons/bs";
import logo from "../../../public/image/logo/logo.svg";
import {Button} from "../button/button";
import {FaSearch} from "react-icons/fa";

export const Header = () => {
  const [subMenu,setSubMenu] =useState(false);
  const subMenuClick = () => {
    setSubMenu (subMenu => !subMenu);
  }
  return (
    <StyledHeader>
      <div className="header">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>

        <div className="navbar">
          <ul className="navLinks">
            <li className="link">
              <Link to="/">Home</Link>
            </li>
            <li className="link">
              <Link to="membership">Membership</Link>
            </li>
            <li className="link">
              <Link to="styleGuide">Style guide</Link>
            </li>
            <li className="link submenuClick">
              <span className="subMenuIcon">
                <BsThreeDots size={30} onClick={subMenuClick}/>
              </span>
              <ul
                className={
                  subMenu
                    ? "subMenuLinks subMenuLinksOpen"
                    : "subMenuLinks subMenuLinksClose"
                }
              >
                {ROUTES.map(({to, name}, i) => {
                  return (
                    <li key={i} className="subMenuLink">
                      <Link to={to}>{name}</Link>
                    </li>
                  );
                })}
              </ul>
            </li>
          </ul>
        </div>

        <div className="headerLink">
          <div className="searchIcon">
            <FaSearch size={18} />
          </div>
          <div className="signUpLink">
            <Link to="/">Sign Up</Link>
          </div>
          <div className="btn">
            <Button to="tags" name="Sign up" className="btnSmall" />
          </div>
        </div>
      </div>
    </StyledHeader>
  );
};

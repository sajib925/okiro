import React, {useState,useRef} from "react";
import {StyledHeader} from "./style";
import {Link} from "react-router-dom";
import {ROUTES} from "../../routes";
import {BsThreeDots} from "react-icons/bs";
import logo from "../../../public/image/logo/logo.svg";
import {Button} from "../button/button";
import {FaSearch} from "react-icons/fa";
import {GiHamburgerMenu} from "react-icons/gi";
import {MdClose} from "react-icons/md";
export const Header = () => {
  const closeMenu = useRef()
  const [subMenu, setSubMenu] = useState(false);
  const subMenuClick = () => {
    setSubMenu((subMenu) => !subMenu);
  };
  
  const [mobileMenu, setMobileMenu] = useState(false);
  const mobileMenuClick = () => {
    setMobileMenu((mobileMenu) => !mobileMenu);
    closeMenu.current.classList.toggle("closeMobileMenu")
  };
  const [searchBar, setSearchBar] = useState(false);
  const searchBarClick = () => {
    setSearchBar((searchBar) => !searchBar);
  };
  const [change , setChange] = useState({})
  const handleChange = (e) => {
    setChange(e.target.value)
  }
  return (
    <StyledHeader>
      <div className="header">
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
            <li className="link subMenuClick">
              <span className="subMenuIcon">
                <BsThreeDots size={30} onClick={subMenuClick} />
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
                    <li key={i} className="subMenuLink" onClick={subMenuClick}>
                      <Link to={to}>{name}</Link>
                    </li>
                  );
                })}
              </ul>
            </li>
          </ul>
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="headerLink">
            <div className="searchIcon" onClick={searchBarClick}>
              <FaSearch size={18} />
            </div>
            <div className="signUpLink">
              <Link to="/">Sign in</Link>
            </div>
            <div className="btn">
              <Button to="tags" name="Sign up" className="btnSmall btn" />
            </div>
            <div className="mobileBar" onClick={mobileMenuClick}>
              <div ref={closeMenu} className="toggleMenu">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
              </div>
            </div>
          </div>
        </div>

        {/* mobile menu start here */}
        <div
          className={
            mobileMenu ? "mobileNav mobileNavOpen" : "mobileNav mobileNavClose"
          }
        >
          <ul className="mobileMenuLinks">
            <li className="link" onClick={mobileMenuClick}>
              <Link to="/">Home</Link>
            </li>
            <li className="link" onClick={mobileMenuClick}>
              <Link to="membership">Membership</Link>
            </li>
            <li className="link" onClick={mobileMenuClick}>
              <Link to="styleGuide">Style guide</Link>
            </li>
            {ROUTES.map(({to, name}, i) => {
              return (
                <li key={i} className="link" onClick={mobileMenuClick}>
                  <Link to={to}>{name}</Link>
                </li>
              );
            })}
            <li className="link">
              <Link to="styleGuide">Sign In</Link>
            </li>
          </ul>
          <div className="btn">
            <Button to="tags" name="Sign up" className="btn btnSmall" />
          </div>
          <div className="searchLink" onClick={searchBarClick}>
            <span className="text">Search</span>
            <span>
              <FaSearch size={15} color={"#fff"} />
            </span>
          </div>
        </div>
        {/* mobile menu end here */}
      </div>
      <div
        className={
          searchBar
            ? "popupSearchBar popupSearchBarOpen"
            : "popupSearchBar popupSearchBarClose"
        }
      >
        <div className="overlay" onClick={searchBarClick}></div>
        <div className="searchCloseBtn">
          <span>
            <MdClose size={43} color={"#fff"} onClick={searchBarClick} />
          </span>
        </div>
        <div className="searchBarContent">
          <form action="/">
            <input
              id="search-input"
              type="text"
              placeholder="Type your keywords"
              onChange={handleChange}
            />
            <div className="searchMeta">
              <span>
                {change
                  ? "0 Results for your search"
                  : "Please enter at least 1 characters"}
              </span>
            </div>
          </form>
        </div>
      </div>
    </StyledHeader>
  );
};

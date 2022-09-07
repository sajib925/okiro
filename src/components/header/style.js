import styled from "styled-components";
import {THEME} from "./../../styles/theme";
import {media} from "./../../styles/responsive";

export const StyledHeader = styled.header`
  padding: 0 80px;
  margin: 0 20px;
  ${media.down("xl")} {
    padding: 0 51px;
  }
  ${media.down("sm")} {
    padding: 0 16px;
    margin: 0;
  }
  .header {
    position: relative;
    margin: 40px 0 60px;
    ${media.down("xl")} {
      padding: 0;
    }
    .navbar {
      display: grid;
      grid-template-columns: 1fr auto 1fr;
      ${media.down("lg")} {
        grid-template-columns: 1fr 1fr;
      }
    }

    .navLinks {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      column-gap: 30px;
      ${media.down("xl")} {
        padding: 0;
      }
      ${media.down("xl")} {
        column-gap: 18px;
      }
      ${media.down("lg")} {
        display: none;
      }

      .link {
        list-style: none;
        a {
          text-decoration: none;
          font-size: 19px;
          display: inline-block;
          pointer-events: auto;
          color: ${THEME.colors.primary};
          list-style: none;
          font-weight: 900;
          ${media.down("xl")} {
            font-size: 16px;
          }
        }
      }

      .subMenuClick {
        position: relative;
        cursor: pointer;
        .subMenuLinks {
          padding: 20px 20px 15px 26px;
          background-color: ${THEME.colors.colorTwo};
          position: absolute;
          z-index: 999;
          top: 50px;
          min-width: 166px;
          margin: 0;
          padding: 20px 20px 15px 26px;
          list-style: none;
          cursor: default;
          transform: translateX(-27px);
          border-radius: 22px;
          a {
            margin-right: 8px;
            display: inline-block;
            padding-bottom: 8px;
          }
        }
        .subMenuLinksOpen {
          display: block;
        }
        .subMenuLinksClose {
          display: none;
        }
      }
    }
    .logo {
      ${media.down("lg")} {
        justify-content: flex-start;
      }
      a {
        text-decoration: none;
        img {
          width: 112px;
          height: 45px;
        }
      }
    }
    .headerLink {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      column-gap: 30px;
      ${media.down("lg")} {
        justify-content: flex-end;
      }
      .searchIcon {
        cursor: pointer;
        ${media.down("lg")} {
          display: none;
        }
      }

      .signUpLink {
        ${media.down("lg")} {
          display: none;
        }
        a {
          text-decoration: none;
          color: ${THEME.colors.primary};
          font-weight: 900;
          font-size: 19px;
          display: inline-block;
          pointer-events: auto;
          ${media.down("Xl")} {
            font-size: 16px;
          }
        }
      }
      .btn {
        ${media.down("lg")} {
          display: none;
        }
      }
      .mobileBar {
        display: none;
        ${media.down("lg")} {
          display: block;
        }
        .toggleMenu {
          .bar {
            display: block;
            width: 25px;
            height: 4px;
            margin: 5px auto;
            transition: all 0.3s ease-in-out;
            background-color: ${THEME.colors.primary};
          }
        }
        .closeMobileMenu {
          .bar:nth-child(2) {
            opacity: 0;
          }
          .bar:nth-child(1) {
            transform: translateY(8px) rotate(-45deg);
          }
          .bar:nth-child(3) {
            transform: translateY(-10px) rotate(45deg);
          }
        }
      }
    }
    /* mobile menu style start here  */
    .mobileNav {
      z-index: 99999;
      position: absolute;
      top: 50px;
      right: -12px;
      display: flex;
      flex-wrap: wrap;
      min-width: 200px;
      padding-top: 15px;
      background-color: ${THEME.colors.colorTwo};
      border-radius: 22px;
      overflow: hidden;

      .mobileMenuLinks {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        row-gap: 5px;
        .link {
          list-style: none;
          a {
            line-height: 1.3;
            margin-right: 8px;
            padding: 5px 10px 5px 0;
            word-break: break-word;
            text-decoration: none;
            text-align: end;
            font-size: 16px;
            font-weight: 900;
            color: ${THEME.colors.primary};
          }
        }
      }
      .btn {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        margin-top: 10px;
      }
      .searchLink {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        column-gap: 8px;
        padding: 12px 10px 12px 0;
        margin-top: 15px;
        background-color: ${THEME.colors.btnPrimary};
        .text {
          font-size: 16px;
          font-weight: 900;
          color: ${THEME.colors.bodyColor};
        }
      }
    }
    .mobileNavOpen {
      display: block;
    }
    .mobileNavClose {
      display: none;
    }
    /* mobile menu style end here  */
  }
  /* popup search bar style start here  */

  .popupSearchBar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 998;
    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background: #000;
      opacity: 0.6;
    }
    .searchCloseBtn {
      position: absolute;
      z-index: 999;
      top: 40px;
      right: 50px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      ${media.down("xl")} {
        right: 35px;
      }
      ${media.down("lg")} {
        display: none;
      }
    }
    .searchBarContent {
      position: relative;
      z-index: 999;
      top: 20vh;
      overflow: hidden;
      width: calc(100% - 50px);
      max-width: 900px;
      margin: 0 auto;
      border-radius: calc(22px / 1.5);
      background-color: ${THEME.colors.bodyColor};
      form {
        input {
          font-size: 34px;
          font-weight: 900;
          display: block;
          width: 100%;
          padding: 32px 20px;
          color: ${THEME.colors.primary};
          border: 0;
          border-radius: 0;
          outline: 0;
          background-color: transparent;
          box-shadow: none;
        }
        .searchMeta {
          font-size: 9px;
          font-weight: 900;
          display: block;
          width: 100%;
          margin: 0;
          padding: 12px 0 12px 20px;
          text-align: left;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: ${THEME.colors.bodyColor};
          background-color: ${THEME.colors.btnPrimary};
        }
      }
    }
  }
  .popupSearchBarOpen {
    display: block;
  }
  .popupSearchBarClose {
    display: none;
  }

  /* popup search bar style start here  */
`;

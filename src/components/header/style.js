import styled from "styled-components";
import { THEME } from './../../styles/theme';

export const StyledHeader = styled.header`
  padding: 0 80px;
  margin: 0 20px;
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    margin: 40px 0 60px;
    .logo {
      position: absolute;
      z-index: 98;
      left: 50%;
      top: 0;
      display: inline-block;
      flex: 1 0 auto;
      box-sizing: border-box;
      text-align: center;
      word-break: normal;
      a {
        text-decoration: none;
        img {
          width: 112px;
          height: 45px;
        }
      }
    }
    
    .navLinks {
      display: flex;
      align-items: center;
      justify-content: center;
      column-gap: 30px;

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
        }
      }

      .submenuClick {
        position: relative;
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
    .headerLink {
      display: flex;
      align-items: center;
      justify-content: center;
      column-gap: 30px;
      .signUpLink {
        a {
          text-decoration: none;
          color: ${THEME.colors.primary};
          font-weight: 900;
          font-size: 19px;
          display: inline-block;
          pointer-events: auto;
        }
      }
    }
  }
`;

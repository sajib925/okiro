import styled from "styled-components";
import {media} from "../../styles/responsive";
import {THEME} from "./../../styles/theme";

export const StyledFooter = styled.footer`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  margin-top: 60px;

  .footerWrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 60px 0;
    position: relative;
    ${media.down("lg")} {
    }
    ${media.down("md")} {
      flex-direction: column;
      padding: 30px 0 0;
    }
    &::before {
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      height: 1px;
      content: "";
      border-radius: 100px;
      background-color: ${THEME.colors.borderColor};
    }
    .footerData {
      ${media.down("md")} {
      }
      .footerLogo {
        margin-bottom: 10px;
        ${media.down("md")} {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        img {
          width: 87px;
          height: 35px;
        }
      }
      .description {
        font-size: 16px;
        line-height: 1.4;
        max-width: 300px;
        margin: 0 0 4vh;
        color: ${THEME.colors.primary};
        ${media.down("md")} {
          max-width: 380px;
          text-align: center;
        }
      }
      .footerLinks {
        display: flex;
        ${media.down("md")} {
          justify-content: center;
          margin: 30px 0;
        }
        a {
          line-height: 1;
          display: inline-block;
          width: 40px;
          height: 40px;
          margin: 0 7px 7px 0;
          padding: 0;

          svg {
            color: ${THEME.colors.primary};
            transition: all ease-in-out 0.2s;
          }
          &:hover {
            svg {
              color: ${THEME.colors.btnPrimary};
            }
          }
        }
      }
    }
    .footerNav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 50%;
      ${media.down("lg")} {
        width: 100%;
        justify-content: space-evenly;
      }

      small {
        font-size: 10px;
        line-height: 1;
        display: block;
        margin: 10px 0 30px;
        letter-spacing: 4px;
        text-transform: uppercase;
        font-weight: 800;
      }
      ul {
        padding: 0;
        li {
          list-style: none;
          margin-bottom: 18px;
          a {
            text-decoration: none;
            color: ${THEME.colors.primary};
            font-size: 16px;
            font-weight: 900;
            position: relative;
            transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
            ${media.down("lg")}{
              font-size: 14px;
            }
            &:hover {
              &::after {
                content: "";
                position: absolute;
                left: 0;
                bottom: 4px;
                width: 100%;
                height: 1px;
                background-color: ${THEME.colors.primary};
              }
            }
          }
        }
      }
    }
  }
  .footerCopyWright {
    margin: 16px 20px;
    ${media.down("md")} {
      max-width: 340px;
      width: 100%;
      text-align: center;
      margin: 0 auto;
    }
    span {
      font-size: 12px;
      color: ${THEME.colors.primary};
    }
    a {
      text-decoration: none;
      font-size: 12px;
      color: ${THEME.colors.primary};
      position: relative;
      &:hover {
        &::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 2px;
          width: 100%;
          height: 1px;
          background-color: ${THEME.colors.primary};
        }
      }
    }
  }
`;

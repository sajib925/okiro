import styled from "styled-components";
import { media } from "../../styles/responsive";
import { THEME } from './../../styles/theme';

export const StyledFooter = styled.footer`
  /* padding: 0 80px;
  margin: 0 311px; */
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px;

  .footerWrap {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    grid-column-gap: 81px;
    padding: 60px 0;
    position: relative;
    ${media.down("lg")} {
      grid-template-columns: 1.2fr 2fr;
      grid-column-gap: 54px;
    }
    ${media.down("md")} {
      grid-template-columns: 1fr;
      grid-column-gap: 0;
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
        text-align: center;
        width: 100%;
      }
      .footerLogo {
        margin-bottom: 10px;
        ${media.down("md")} {
          width: 100%;
          margin: 0 auto;
        }
        img {
          width: 88px;
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
        }
      }
      .footerLinks {
        display: flex;
        ${media.down("md")} {
          justify-content: center;
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
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      ${media.down("md")} {
      }
      ${media.down("sm")} {
        grid-template-columns: 1fr 1fr;
      }

      small {
        font-size: 10px;
        line-height: 1;
        display: block;
        margin: 10px 0 30px;
        /* padding: 0 20px 0 15%; */
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
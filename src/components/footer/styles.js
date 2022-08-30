import styled from "styled-components";
import { THEME } from './../../styles/theme';

export const StyledFooter = styled.footer`
  padding: 0 80px;
  margin: 0 311px;
  .footerWrap {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    grid-column-gap: 81px;
    .footerData {
      .footerLogo {
        margin-bottom: 10px;
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
      }
      .footerLinks {
        display: flex;
        svg {
          line-height: 1;
          display: inline-block;
          width: 40px;
          height: 40px;
          margin: 0 7px 7px 0;
          padding: 0;
        }
      }
    }
    .footerNav {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
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
    }
  }
`;
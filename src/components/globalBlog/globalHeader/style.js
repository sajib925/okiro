import styled from "styled-components";
import { THEME } from './../../../styles/theme';
import { media } from './../../../styles/responsive';

export const StyledGlobalHeader = styled.div`
  max-width: 100%;
  flex-basis: 100%;
  width: 100%;
  margin: 0 auto;
  position: relative;
  flex: 1 0 calc(33.333% - 20px * 2);
  .itemContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 20px 7vh;
    ${media.down("md")} {
      flex-direction: column;
    }
    .itemImage {
      position: relative;
      flex: 0 0 50%;
      height: 100%;

      margin-right: 5%;
      min-height: 700px;
      ${media.down("lg")} {
        min-height: 550px;
      }
      ${media.down("md")} {
        flex-basis: 100%;
        width: 100%;
        height: initial;
        min-height: initial;
        margin-right: 0;
        margin-bottom: 20px;
      }
      img {
        position: absolute;
        top: 0;
        left: 0;
        border-radius: calc(22px * 2);
        width: 100%;
        height: 100%;
        object-fit: cover;
        ${media.down("md")} {
          position: initial;
          height: 500px;
          top: 0;
          left: 0;
          border-radius: calc(22px + 22px / 3);
        }
        ${media.down("md")} {
          height: 400px;
        }
      }
    }
    .itemContent {
      ${media.down("md")} {
        padding: 0 25px;
      }
      ${media.down("sm")} {
        padding: 0;
      }
      .itemTags {
        display: flex;
        align-items: flex-start;
        flex-wrap: wrap;
        margin-left: -3px;
        ${media.down("md")} {
          justify-content: center;
        }
        a {
          font-size: 9px;
          line-height: 10px;
          font-weight: 800;
          display: inline-block;
          margin: 0 8px 8px 0;
          padding: 12px 12px 10px;
          transition: background-color 0.15s ease;
          text-indent: 3px;
          letter-spacing: 3px;
          text-transform: uppercase;
          border-radius: 100px;
          background-color: ${THEME.colors.colorSix};
          text-decoration: none;
          color: ${THEME.colors.primary};
        }
      }
      .itemTitle {
        font-size: 62px;
        margin: 0 0 30px -2px;
        font-weight: 900;
        ${media.down("xl")} {
          font-size: 54px;
        }
        ${media.down("lg")} {
          font-size: 40px;
        }
        ${media.down("md")} {
          font-size: 48px;
          text-align: center;
        }
        ${media.down("sm")} {
          font-size: 36px;
        }
      }
      .itemDescription {
        margin: 50px 0 40px;
        font-weight: 800px;
        font-size: 20px;
        font-weight: 800px;
        max-width: 480px;
        ${media.down("md")} {
          max-width: 100%;
          text-align: center;
        }
        ${media.down("sm")} {
          margin: 25px 0 20px;
        }
        .icon {
          width: 90px;
          height: 15px;
          opacity: 0.1;
          margin-bottom: 10px;
          ${media.down("md")} {
            margin: 0 auto 10px;
          }
        }
      }
      .itemMeta {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        ${media.down("md")} {
          justify-content: center;
        }

        .itemProfile {
          display: inline-block;
          align-items: flex-start;
          flex: 0 0 auto;

          a {
            position: relative;
            display: inline-block;
            overflow: hidden;
            width: 40px;
            height: 40px;
            margin-right: -10px;
            border: 2px solid ${THEME.colors.bodyColor};
            border-radius: 100px;

            &:nth-child(1) {
              z-index: 6;
              margin-left: -4px;
            }
            &:nth-child(2) {
              z-index: 5;
              margin-right: 9px;
            }
            img {
              display: block;
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
        }
        .itemAuthors {
          a {
            font-size: 16px;
            line-height: 1.2;
            font-weight: 800;
            color: ${THEME.colors.primary};
            text-decoration: none;
          }
          .times {
            font-size: 15px;
            font-weight: 400;
            line-height: 1.6;
            display: block;
            ${media.down("md")} {
              text-align: center;
            }
          }
        }
      }
    }
  }
`;

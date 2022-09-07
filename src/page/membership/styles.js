import styled from "styled-components";
import { THEME } from './../../styles/theme';
import { media } from './../../styles/responsive';

export const StyledMemberShip = styled.div`
  max-width: 1460px;
  width: 100%;
  margin: 0 auto;
  .memberShipArchiveSection {
    position: relative;
    z-index: 1;
    overflow: hidden;
    max-width: 100%;
    margin: 0 20px;
    padding: 10vh 5%;
    border-radius: calc(22px * 2);
    .archiveWrap {
      display: flex;
      align-items: flex-start;
      max-width: calc(1240px * 2);
      margin-left: 37px;
      ${media.down("lg")} {
        margin: 0;
      }
      .archiveContent {
        align-items: center;
        flex: 0 1 auto;
        max-width: 440px;
        min-height: 126px;
        padding: 32px 52px;
        background-color: ${THEME.colors.bodyColor};
        border-radius: 22px;
        ${media.down("md")} {
          padding: 24px 26px;
        }
        .h1 {
          font-size: 45px;
          margin: 0 0 0 -2px;
          color: ${THEME.colors.primary};
          text-align: center;
          ${media.down("lg")} {
            font-size: 36px;
          }
          ${media.down("md")} {
            font-size: 30px;
          }
        }
        .icon {
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            width: 80px;
            opacity: 0.1;
            margin: 20px 0 10px 0;
          }
        }
        .description {
          max-width: 336px;
          width: 100%;
          margin: 20px 0 0;
          text-align: center;
        }
      }
    }
    .thumbnail {
      position: absolute;
      z-index: -1;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
`;

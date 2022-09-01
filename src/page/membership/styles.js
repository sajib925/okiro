import styled from "styled-components";
import { THEME } from './../../styles/theme';

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
      width: 100%;
      max-width: calc(1240px * 2);
      margin: 0 auto;
      .archiveContent {
        align-items: center;
        flex: 0 1 auto;
        max-width: 440px;
        min-height: 126px;
        padding: 32px 52px;
        background-color: ${THEME.colors.bodyColor};
        border-radius: 22px;
        .h3 {
          font-size: 45px;
          line-height: 1.2;
          margin: 0 0 0 -2px;
          font-weight: 900;
          color: ${THEME.colors.primary};
        }
        .icon {
          img {
            width: 80px;
            opacity: 0.1;
            margin: 20px 0 10px 0;
          }
        }
        .description {
          font-size: 18px;
          font-weight: 800;
          color: ${THEME.colors.primary};
          max-width: 336px;
          width: 100%;
          margin: 20px 0 0;
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

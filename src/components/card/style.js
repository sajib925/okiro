import styled from "styled-components";
import { THEME } from './../../styles/theme';
import { media } from './../../styles/responsive';

export const StyledCard = styled.div`
  .pool {
    background-color: ${THEME.colors.colorPool};
  }
  .aqua {
    background-color: ${THEME.colors.colorAqua};
  }
  .rose {
    background-color: ${THEME.colors.colorRose};
  }
  .peach {
    background-color: ${THEME.colors.colorPeach};
  }
  .cream {
    background-color: ${THEME.colors.colorCream};
  }
  article {
    width: 100%;
    position: relative;
    flex: 1 0 calc(33.333% - 20px * 2);
    box-sizing: border-box;
    max-width: calc(100% - 20px);
    margin: 20px;
    transition: transform 0.2s ease;
    border-radius: calc((22px) + (22px) / 3);
    display: flex;
    flex-wrap: wrap;
    max-width: 333px;
    /* height: 563px; */
    ${media.down("lg")} {
      max-width: 220px;
      margin: 10px;
    }
    ${media.down("md")} {
      max-width: 270px;
      margin: 10px;
    }
    .GlobalLink {
      position: absolute;
      z-index: 1;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }
    .itemContainer {
      display: flex;
      flex-direction: column;
      width: 100%;
      .thumbnail {
        img {
          height: 330px;
          border-top-left-radius: calc(22px + 22px / 3);
          border-top-right-radius: calc(22px + 22px / 3);
          object-fit: cover;
          width: 100%;
        }
      }
      .itemContent {
        width: 100%;
        height: 100%;
        padding: 0 28px 25px;
        .h2 {
          font-size: 26px;
          line-height: 1.2;
          width: 100%;
          max-width: 360px;
          margin: 20px 0 12px -1px;
          font-weight: 900;

          a {
            text-decoration: none;
            color: ${THEME.colors.primary};
          }
        }
        .author {
          a {
            color: ${THEME.colors.primary};
            font-weight: 800;
            font-size: 16px;
            text-decoration: none;
            position: relative;
            z-index: 1;
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
      .globalPointer {
        position: relative;
        z-index: 1;
        pointer-events: none;
      }
      .itemTags {
        margin-left: 26px;

        a {
          color: ${THEME.colors.primary};
          font-size: 9px;
          font-weight: 800;
          line-height: 10px;
          display: inline-block;
          margin: 0 8px 30px 0;
          padding: 12px 12px 10px;
          transition: background-color 0.15s ease;
          text-indent: 3px;
          letter-spacing: 3px;
          text-transform: uppercase;
          border-radius: 100px;
          background-color: ${THEME.colors.borderColor};
          text-decoration: none;
          pointer-events: auto;
          transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
          &:hover {
            background-color: ${THEME.colors.hoverColor};
          }
        }
      }
    }
  }
`;
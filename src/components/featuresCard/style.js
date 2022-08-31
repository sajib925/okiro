import styled from "styled-components";
import { media } from "../../styles/responsive";
import { THEME } from './../../styles/theme';

export const StyledFeaturesCard = styled.div`
  .pool {
    background-color: ${THEME.colors.colorPool};
  }
  .rose {
    background-color: ${THEME.colors.colorRose};
  }
  .sand {
    background-color: ${THEME.colors.colorSand};
  }
  .aqua {
    background-color: ${THEME.colors.colorAqua};
  }
  .peach {
    background-color: ${THEME.colors.colorPeach};
  }
  article {
    cursor: pointer;
    padding: 18px;
    margin: 0 20px;
    border-radius: 22px;
    transition: transform 0.2s ease;
    ${media.down("xl")}{
      margin: 0;
    }
    &:hover {
      margin-top: -2px;
    }

    .thumbnail {
      img {
        width: 194px;
        height: 165px;
        border-radius: 22px;
        margin-bottom: 14px;
        object-fit: cover;
      }
    }
    .cardText {
      max-width: 174px;
      width: 100%;
      margin: 0 auto;
      .h3 {
        a {
          font-size: 20px;
          text-decoration: none;
          color: ${THEME.colors.primary};
        }
      }
      .owner {
        display: inline-block;
        ${media.down("lg")}{
          display: none;
        }
        a {
          font-size: 13px;
          line-height: 1.4;
          text-decoration: none;
          color: ${THEME.colors.primary};
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
`;
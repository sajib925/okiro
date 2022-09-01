import styled from "styled-components";
import { media } from "../../styles/responsive";
import { THEME } from './../../styles/theme';

export const StyledLoopSection = styled.div`
  margin: 72px 0 30px;
  article {
    position: relative;
    small {
      font-size: 10px;
      font-weight: 900;
      line-height: 1.2;
      position: absolute;
      left: 0;
      display: flex;
      justify-content: flex-end;
      width: 300px;
      margin-top: 0;
      transform: translate(-58%, 120px) rotate(-90deg);
      text-align: right;
      letter-spacing: 8px;
      text-transform: uppercase;
      color: ${THEME.colors.primary};
    }
  }
  .itemContainer {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    column-gap: 60px;
    ${media.down("sm")} {
      flex-direction: column;
    }
  }
  .thumbnail {
    a {
      img {
        max-width: 600px;
        width: 100%;
        border-radius: 22px;
      }
    }
  }
  .itemContent {
    .globalTags {
      display: flex;
      align-items: flex-start;
      flex-wrap: wrap;
      margin-left: -3px;
      a {
        font-size: 9px;
        line-height: 10px;
        font-weight: 800;
        color: ${THEME.colors.primary};
        text-decoration: none;
        display: inline-block;
        margin: 0 8px 8px 0;
        padding: 12px 12px 10px;
        transition: background-color 0.15s ease;
        text-indent: 3px;
        letter-spacing: 3px;
        text-transform: uppercase;
        border-radius: 100px;
        background-color: ${THEME.colors.borderColor};
        transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
        &:hover {
          background-color: ${THEME.colors.hoverColor};
        }
      }
    }
    .itemTitle {
      font-size: 54px;
      margin: 0 0 30px -2px;
      font-size: 54px;
      font-weight: 900;
      line-height: 1.2;
      width: 100%;
      max-width: 540px;
      a {
        text-decoration: none;
        color: ${THEME.colors.primary};
      }
    }
    .icon {
      margin: 50px 0 10px 0;
      img {
        width: 90px;
        opacity: 0.1;
      }
    }
    .description {
      font-size: 18px;
      font-weight: 800;
      margin-bottom: 40px;
      color: ${THEME.colors.primary};
      width: 100%;
      max-width: 480px;
    }
    .itemMeta {
      display: flex;
      column-gap: 24px;
      .itemImg {
        .firstImg {
          z-index: 111;
        }
        a {
          display: inline-block;
          overflow: hidden;
          width: 40px;
          height: 40px;
          margin-right: -15px;
          border: 2px solid ${THEME.colors.bodyColor};
          border-radius: 100px;
          z-index: 1;

          .img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
      }

      .itemAuthor {
        a {
          text-decoration: none;
          color: ${THEME.colors.primary};
          font-size: 16px;
          line-height: 1.2;
          font-weight: 800;
        }
      }
      .itemTime {
        span {
          font-size: 15px;
          font-weight: 400;
          line-height: 1.6;
          color: ${THEME.colors.primary};
        }
      }
    }
  }
`;

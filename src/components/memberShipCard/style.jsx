import styled from "styled-components";
import { THEME } from './../../styles/theme';
import { media } from './../../styles/responsive';

export const StyledMemberShipCard = styled.section`
  .title {
    font-size: 22px;
    font-weight: 900;
    display: block;
    width: 100%;
    margin: 7vh 0 10px;
    text-align: center;
    color: ${THEME.colors.primary};
  }
  .switchBtn {
    width: 100%;
    max-width: 300px;
    min-height: 72px;
    margin: 5vh auto;
    padding: 10px;
    background-color: ${THEME.colors.colorTwo};
    border-radius: 100px;
    position: relative;
    display: flex;
    align-items: center;
    /* &::before {
      position: absolute;
      top: 10px;
      right: 10px;
      bottom: 10px;
      width: calc(50% - 10px);
      content: "";
      transition: transform 0.15s ease-in-out;
      background-color: ${THEME.colors.btnPrimary};
      border-radius: 100px;
      transform: translateX(-100%);
    } */
    .yearly {
      background-color: ${THEME.colors.btnPrimary};
      border-radius: 100px;
      padding: 18px 10px;
      color: ${THEME.colors.bodyColor};
    }
    button {
      font-size: 18px;
      font-weight: 900;
      line-height: 1;
      width: 50%;
      padding: 0;
      cursor: pointer;
      user-select: none;
      transition: color 0.15s ease-in-out;
      border: 0;
      outline: 0;
      background-color: transparent;
      box-shadow: none;
      color: ${THEME.colors.primary};
    }
  }
  .cards {
    display: flex;
    align-items: center;
    justify-content: center;
    ${media.down("lg")}{
      flex-wrap: wrap;
    }
  }
  .card {
    overflow: hidden;
    flex: 1 0 calc(33.333% - 20px * 2);
    box-sizing: border-box;
    min-width: 260px;
    max-width: 375px;
    margin: 20px;
    padding-bottom: 5vh;
    text-align: center;
    color: var(--color-font-one);
    border-radius: 22px;
    background-color: ${THEME.colors.colorOne};

    .cardContent {
      color: ${THEME.colors.primary};
      .h2 {
        font-size: 10px;
        line-height: 1;
        margin: 0;
        padding: 14px 0;
        text-indent: 4px;
        letter-spacing: 4px;
        text-transform: uppercase;
        color: ${THEME.colors.bodyColor};
        background-color: ${THEME.colors.btnPrimary};
      }
      .yearly {
        display: none;
      }
      .h3 {
        font-size: 82px;
        max-width: 240px;
        margin: 3vh auto;
        text-indent: -28px;
        font-weight: 900;
        span {
          font-size: 20px;
        }
      }
      .description {
        font-size: 20px;
        margin: -1vh 25px 3vh;
        font-weight: 900;
      }
      .membershipCardOptions {
        ul {
          margin: 0;
          padding: 0 20px 5vh;
          li {
            font-size: 18px;
            line-height: 1.3;
            margin: 0 0 10px;
            padding: 0;
            list-style: none;
          }
        }
      }
    }
    /* .btn {
      align-self: flex-end;
      margin: 0 auto;
    } */
  }
`;
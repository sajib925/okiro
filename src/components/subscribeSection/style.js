import styled from "styled-components";
import { THEME } from './../../styles/theme';
import { media } from './../../styles/responsive';

export const StyledSubscribeSection = styled.div`
  .subscribeWrap {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 1120px;
    margin: 20vh auto 0;
    ${media.down("lg")} {
      margin: 5vh auto 0;
      flex-direction: column;
    }
    ${media.down("md")} {
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .h3 {
      font-size: 46px;
      font-weight: 900;
      color: ${THEME.colors.primary};
      line-height: 1.1;
      min-width: 240px;
      max-width: 700px;
      margin: 0;
      padding: 25px 5% 25px 0;
      ${media.down("sm")} {
        font-size: 34px;
        text-align: center;
        padding: 15px 5%;
      }
    }

    form {
      margin-right: 98px;
      position: relative;
      display: flex;
      align-items: center;
      flex: 0 0 auto;
      box-sizing: border-box;
      margin-left: auto;
      padding: 10px;
      border-radius: 100px;
      background-color: ${THEME.colors.colorTwo};
      ${media.down("xl")} {
        margin-left: initial;
        margin-right: 0;
      }
      /* ${media.down("lg")} {
        margin-left: initial;
        margin-right: 0;
      }

      ${media.down("md")} {
        margin-left: initial;
        margin-right: 0;
      } */
      ${media.down("sm")} {
        max-width: 90%;
        padding-top: 6px;
        padding-bottom: 6px;
      }
      input {
        font-size: 20px;
        display: block;
        flex: 1 1 auto;
        width: 230px;
        margin-right: 12px;
        padding: 1px 20px 1px 30px;
        border-radius: 100px;
        outline: none;
        border: none;
        background-color: transparent;
        ${media.down("sm")} {
          font-size: 16px;
          padding-right: 10px;
          padding-left: 10px;
          width: 138px;
          height: 60px;
        }
      }
    }
  }
`;
import styled from "styled-components";
import { THEME } from './../../styles/theme';

export const StyledSubscribeSection = styled.div`
  .subscribeWrap {
    display: flex;
    width: 100%;
    max-width: 1120px;
    margin: 20vh auto 0;
    .h3 {
      font-size: 46px;
      font-weight: 900;
      color: ${THEME.colors.primary};
      line-height: 1.1;
      min-width: 240px;
      max-width: 700px;
      margin: 0;
      padding: 25px 5% 25px 0;
    }
    form {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      margin-left: auto;
      padding: 10px;
      border-radius: 100px;
      background-color: ${THEME.colors.colorTwo};
      margin-right: 98px;
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
      }
      
    }
  }
`;
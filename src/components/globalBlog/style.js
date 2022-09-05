import styled from "styled-components";
import {media} from "../../styles/responsive";

export const StyledGlobalBlog = styled.div`
  max-width: 1460px;
  width: 100%;
  margin: 0 auto;
  .nextPrevSection {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .globalSection {
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
    }
    .cards {
      max-width: 1120px;
      width: 100%;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

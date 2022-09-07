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
    margin-top: 70px;
    ${media.down("xl")} {
      margin-top: 55px;
    }
    ${media.down("lg")} {
      margin-top: 40px;
      flex-direction: column;
    }

    ${media.down("md")} {
      margin-top: 30px;
    }
    
  }
  .globalSection {
    margin-top: 70px;
    ${media.down("xl")} {
      margin-top: 55px;
    }
    ${media.down("lg")} {
      margin-top: 40px;
    }

    ${media.down("md")} {
      margin-top: 30px;
    }
    .sectionTitle {
      display: none;
      ${media.down("lg")} {
        display: block;
      }
      margin-bottom: 20px;
      .title {
        text-align: center;
      }
      .icon {
        width: 100%;
        display: flex;
        align-content: center;
        justify-content: center;
        align-items: center;
        margin: 10px 0 5px 0;
        img {
          width: 90px;
          opacity: 0.1;
        }
      }
    }
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
      ${media.down("lg")} {
        display: none;
      }
    }
    .cards {
      max-width: 1120px;
      width: 100%;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      .card {
        ${media.down("sm")} {
          width: 100%;
        }
      }
    }
  }
`;

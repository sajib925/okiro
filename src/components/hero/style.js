import styled from "styled-components";
import { media } from "../../styles/responsive";

export const StyledHero = styled.section`
  position: relative;

  ${media.down("xl")} {
  }
  ${media.down("lg")} {
  }
  .featuredTitle {
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
  .rotateTitle {
    ${media.down("lg")} {
      display: none;
    }
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
  .heroCard {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-wrap: wrap;
    column-gap: 20px;
    ${media.down("md")} {
    }
    ${media.down("sm")} {
      
    }
  }
`;
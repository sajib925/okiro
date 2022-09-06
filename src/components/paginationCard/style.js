import styled from "styled-components";
import { media } from "../../styles/responsive";

export const StyledPaginationCard = styled.div`
  position: relative;

  .paginationTitle {
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
    left: 160px;
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
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    column-gap: 10px;
    .card {
      ${media.down("sm")} {
        width: 100%;
      }
    }
  }
`;
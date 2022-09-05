import styled from "styled-components";
import { media } from './../../styles/responsive';

export const StyledLoopCard = styled.div`
  margin: 0 170px;
  ${media.down("md")} {
    margin: 0;
  }

  .cards {
    width: 100%;
    max-width: 1120px;
    margin-right: auto;
    margin-left: auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    ${media.down("md")} {
      grid-template-columns: 1fr 1fr;
    }
    ${media.down("md")} {
      grid-template-columns: 1fr;
    }
    /* .card:nth-child(4) {
      width: 50%;
    }
    .card:nth-child(5) {
      width: 50%;
    } */
  }
`;
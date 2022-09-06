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
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    ${media.down("md")} {
    }
    ${media.down("md")} {
    }
    ${media.down("sm")} {
    }
  }
`;
import styled from "styled-components";
import { media } from './../../styles/responsive';

export const StyledLoopCard = styled.div`
  padding: 0 20px;
  
  ${media.down("lg")} {
    padding: 0 15px;
  }
  ${media.down("md")} {
    padding: 0 10px;
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
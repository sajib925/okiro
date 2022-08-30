import styled from "styled-components";
import { THEME } from './../../styles/theme';

export const StyledButton = styled.div`
  .btnSmall {
    padding: 12px 22px;
    font-size: 19px;
    display: inline-block;
    pointer-events: auto;
    border-radius: 100px;
    background-color: ${THEME.colors.btnPrimary};
    color: ${THEME.colors.bodyColor};
    cursor: pointer;
    text-align: center;
    border: 0;
    outline: 0;
    font-weight: 900;
    text-decoration: none;
    transition: opacity 0.15s ease;
    &:hover {
      background-color: #4d56db;
    }
  }
`;

import React from 'react'
import  styled  from 'styled-components';
import { THEME } from './../../../styles/theme';
import { media } from './../../../styles/responsive';
const StyledQuotation = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 750px;
  padding: 0 20px;
  blockquote {
    font-size: 30px;
    font-weight: 900;
    position: relative;
    width: 100%;
    padding-left: 60px;
    margin-bottom: 40px;
    ${media.down("md")} {
      font-size: 20px;
      margin-bottom: 20px;
    }
    ${media.down("sm")} {
      font-size: 18px;
    }
    &::before {
      font-size: 110px;
      position: absolute;
      top: -28px;
      left: -8px;
      content: '"';
      color: ${THEME.colors.btnPrimary};
    }
  }
`;

export const Quotation = () => {
  return (
    <StyledQuotation>
      <blockquote>
        Utinam quidem dicerent alium alio beatiorem. Im ruinas videres. Non
        autem hoc, igitur. Audio equidem philosophi vocem, Epicure.
      </blockquote>
    </StyledQuotation>
  );
}

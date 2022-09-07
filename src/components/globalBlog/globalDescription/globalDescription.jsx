import React from 'react'
import  styled  from 'styled-components';
import { media } from './../../../styles/responsive';
const StyledGlobalDescription = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 740px;
  padding: 0 20px;
  .descp {
    margin-bottom: 40px;
    font-size: 20px;
    font-weight: 400;
    line-height: 1.65;
    text-align: center;
    ${media.down("md")} {
      font-size: 18px;
      margin-bottom: 20px;
    }
    ${media.down("sm")} {
      font-size: 16px;
    }
  }
`;

export const GlobalDescription = (props) => {
    const {className, children} = props
  return (
    <StyledGlobalDescription>
      <p className={className}>{children}</p>
    </StyledGlobalDescription>
  );
}

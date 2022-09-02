import React, { Children } from 'react'
import styled from 'styled-components'
const StyledDescription = styled.div`
  .description {
    font-size: 18px;
    font-weight: 800;
    line-height: 27px;
  }
`;

export const Description = ({className, children}) => {
  return (
    <StyledDescription>
      <p className={className}>{children}</p>
    </StyledDescription>
  );
};

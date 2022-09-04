import React from 'react'
import  styled  from 'styled-components';
const StyledGlobalDescription = styled.div`
  margin: 0 380px;
  .descp {
    margin-bottom: 40px;
    font-size: 20px;
    font-weight: 400;
    line-height: 1.65;
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

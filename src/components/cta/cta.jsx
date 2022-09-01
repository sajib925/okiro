import React from 'react'
import styled from 'styled-components';
import { Button } from './../button/button';
const StyledCta = styled.div`
    margin: 30px 0 60px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Cta = () => {
  return (
    <StyledCta>
      <div className="button">
        <Button to="/" name="Load more" className="btn btnBig" />
      </div>
    </StyledCta>
  );
}

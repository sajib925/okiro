import React from 'react'
import { Link } from 'react-router-dom';
import { StyledButton } from './style';

export const Button = ({to,name,className}) => {
  return (
    <StyledButton>
        <Link className={className} to={to}>{name}</Link>
    </StyledButton>
    )
}

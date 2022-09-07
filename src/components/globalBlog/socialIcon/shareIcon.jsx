import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import icon from '../../../../public/image/social/icon.svg'
import { BsTwitter } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'
import { THEME } from './../../../styles/theme';
import { media } from './../../../styles/responsive';
const StyledShareIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 24px;
  margin-bottom: 75px;
  ${media.down("xl")} {
    margin-bottom: 60px;
  }
  ${media.down("lg")} {
    margin-bottom: 45px;
  }
  ${media.down("md")} {
    margin-bottom: 30px;
  }
  ${media.down("md")} {
    margin-bottom: 20px;
  }
  a {
    position: relative;
    z-index: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70px;
    height: 70px;
    margin: 0 10px;
    border-radius: 100px;
    color: ${THEME.colors.primary};
  }
  a:hover::after {
    transform: scale(0.94);
  }
  a::after {
    position: absolute;
    z-index: -1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    content: "";
    transition: transform 0.2s ease;
    background-color: ${THEME.colors.borderColor};
    border-radius: 100px;
  }
  img {
    width: 25px;
    height: 18px;
  }
`;

export const ShareIcon = () => {
  return (
    <StyledShareIcon>
      <Link to="/">
        <BsTwitter size={24} />
      </Link>
      <Link to="/">
        <BsFacebook size={24} />
      </Link>
      <Link to="/">
        <img src={icon} alt="" />
      </Link>
    </StyledShareIcon>
  );
}

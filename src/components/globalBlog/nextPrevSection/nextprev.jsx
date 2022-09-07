import React from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';
// import img1 from '../../../../public/image/loop/loop_section_1.jpeg'
import { THEME } from './../../../styles/theme';
import { media } from './../../../styles/responsive';

const StyledNextPrev = styled.div`
  .prev {
    flex: 1 0 calc(50% - 20px * 2);
    box-sizing: border-box;
    margin: 20px;
    padding: 18px;
    transition: transform 0.2s ease;
    border-radius: 22px;
    display: flex;
    background-color: ${THEME.colors.colorAvocado};
    ${media.down("md")} {
      margin: 10px;
      padding: 16px;
    }
    ${media.down("md")} {
      margin: 5px;
      padding: 14px;
    }
  }
  .next {
    flex: 1 0 calc(50% - 20px * 2);
    box-sizing: border-box;
    margin: 20px;
    padding: 18px;
    transition: transform 0.2s ease;
    border-radius: 22px;
    display: flex;
    flex-direction: row-reverse;
    background-color: ${THEME.colors.colorAqua};
    ${media.down("md")} {
      margin: 10px;
      padding: 16px;
    }
    ${media.down("md")} {
      margin: 5px;
      padding: 14px;
    }
    small {
      text-align: end;
    }
    .h3 {
      text-align: end;
    }
  }

  a {
    margin-right: 10px;
    img {
      border-radius: calc(22px / 2);
      width: 120px;
      height: 120px;
      object-fit: cover;
    }
  }
  .content {
    padding: 0 10px;
    width: 100%;
    max-width: 400px;
    padding: 0 10px;
    small {
      font-size: 13px;
      font-weight: 800;
      display: block;
      margin-top: 14px;
    }
    .h3 {
      font-size: 24px;
      display: block;
      margin-top: 10px;
      margin-bottom: 14px;
      font-weight: 900;
      ${media.down("sm")} {
        font-size: 15px;
      }
      a {
        text-decoration: none;
        color: ${THEME.colors.primary};
      }
    }
  }
`;

export const NextPrev = (props) => {
    const {className ,image, smallTitle,title} = props
  return (
    <StyledNextPrev>
      <div className={className}>
        <Link to="/">
          <img src={image} alt="" />
        </Link>
        <div className="content">
          <small>{smallTitle}</small>
          <h3 className="h3">
            <Link to="/">
              {title}
            </Link>
          </h3>
        </div>
      </div>
    </StyledNextPrev>
  );
};
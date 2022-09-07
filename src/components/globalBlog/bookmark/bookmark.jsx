import React from "react";
import styled from "styled-components";
import icon from '../../../../public/image/globalBlog/apple-touch-icon.png'
import img from "../../../../public/image/globalBlog/global_2.jpg";
import { Link } from 'react-router-dom';
import { THEME } from './../../../styles/theme';
import { media } from './../../../styles/responsive';
const StyledBookmark = styled.div`
  margin: 0 auto 50px;
  width: 100%;
  max-width: 740px;
  padding: 0 20px;
  ${media.down("md")} {
    margin: 0 auto 30px;
  }
  ${media.down("sm")} {
    margin: 0 auto 20px;
  }
  a {
    position: relative;
    z-index: 2;
    min-height: 150px;
    padding-bottom: 0;
    transition: transform 0.2s ease;
    text-decoration: none;
    background-color: #f4f4f7;
    color: ${THEME.colors.primary};
    display: flex;
    overflow: hidden;
    border-radius: calc(22px / 1.2);
  }
  .content {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    flex-grow: 1;
    justify-content: start;
    padding: 20px;
    .title {
      font-size: 18px;
      font-weight: 900;
      line-height: 1.3;
    }
    .description {
      font-size: 16px;
      max-height: 60px;
      margin-top: 12px;
    }
    img {
      width: 20px;
      height: 20px;
      margin-right: 6px;
      margin-bottom: -5px;
      border-radius: 0;
    }
    .meta {
      font-size: 14px;
      font-weight: 800;
      height: 20px;
      margin-top: 40px;
      display: flex;
      .publisher::before {
        margin-right: 6px;
        margin-left: 6px;
        content: "•";
      }
    }
  }
  .bookmarkThumbnail {
    position: relative;
    min-width: 28%;
    max-height: 100%;
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 0;
      object-fit: cover;
    }
  }
`;

export const Bookmark = () => {
  return (
    <StyledBookmark>
      <Link to="/">
        <div className="content">
          <div className="title">Photo by Gabrielle Henderson on Unsplash</div>
          <div className="description">pink and blue icing coated doughnut</div>
          <div className="meta">
            <img src={icon} alt="" />
            <span>Unsplash</span>
            <span className="publisher">Gabrielle Henderson</span>
          </div>
        </div>
        <div className="bookmarkThumbnail">
          <img src={img} alt="" />
        </div>
      </Link>
    </StyledBookmark>
  );
};

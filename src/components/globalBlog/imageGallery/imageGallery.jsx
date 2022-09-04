import React from 'react'
import  styled  from 'styled-components';
import img1 from '../../../../public/image/globalBlog/image_gallery_1.jpg'
import img2 from '../../../../public/image/globalBlog/image_gallery_2.jpg'
import { Link } from 'react-router-dom';
import { THEME } from './../../../styles/theme';
const StyledImageGallery = styled.div`
  margin: 0 380px;
  figure {
    .galleryRow {
      width: calc(100% + 210px - 20px + 210px - 20px);
      margin-left: calc(-210px + 20px);
      display: flex;

      .imgGallery1 {
        flex: 0.8 1 0%;
        img {
          border-top-left-radius: 22px;
          border-bottom-left-radius: 22px;
        }
      }
      .imgGallery2 {
        flex: 1.50038 1 0%;
        margin-left: 15px;
        img {
          border-top-right-radius: 22px;
          border-bottom-right-radius: 22px;
        }
      }
    }
    figcaption {
      margin-top: 15px;
      font-size: 11px;
      line-height: 1.2;
      display: block;
      width: 100%;
      text-align: center;
      letter-spacing: 0.5px;
      a{
        color: ${THEME.colors.primary};
      }
    }
  }
`;

export const ImageGallery = () => {
  return (
    <StyledImageGallery>
      <figure>
        <div className="galleryRow">
          <div className="imgGallery1">
            <img src={img1} alt="" />
          </div>
          <div className="imgGallery2">
            <img src={img2} alt="" />
          </div>
        </div>
        <figcaption>
          Photos by <Link to="/">Mae Mu</Link> /{" "}
          <Link to="/">Gabrielle Henderson</Link>
        </figcaption>
      </figure>
    </StyledImageGallery>
  );
}

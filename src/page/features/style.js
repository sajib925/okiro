import styled from "styled-components";

export const StyledFeatures= styled.div`
.postContentSection {
    margin: 0 380px;
    .description {
      font-size: 20px;
    }
    .one {
      margin-bottom: 30px;
    }
    .quote {
      /* font-size: 30px;
      font-weight: 900;
      line-height: 1.2px; */
      height: 150px;
      position: relative;
      width: 100%;
      padding-left: 60px;
      margin: 65px 0;
      ::before {
        font-size: 110px;
        position: absolute;
        top: -35px;
        left: -8px;
        content: '"';
        color: ${THEME.colors.btnPrimary};
      }
    }
    figure {
      margin: 50px 0;
      a {
        min-height: 150px;
        padding-bottom: 0;
        transition: transform 0.2s ease;
        text-decoration: none;
        background-color: ${THEME.colors.colorOne};
        display: flex;
        justify-content: space-between;
        overflow: hidden;
        border-radius: calc(22px / 1.2);
        text-decoration: none;
        color: ${THEME.colors.primary};
        .bookmarkContent {
          padding: 20px;
          .title {
            font-size: 18px;
            font-weight: 900;
            line-height: 1.3;
          }
          .description {
            font-size: 16px;
            margin-top: 12px;
          }
          .metaData {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            column-gap: 5px;
            font-size: 14px;
            font-weight: 800;
            height: 20px;
            margin-top: 40px;
            .publisher {
              margin-right: 6px;
              margin-left: 6px;
              content: "•";
            }
            img {
              width: 20px;
              height: 20px;
            }
          }
        }
        .bookmarkThumbnail {
          img {
            object-fit: cover;
            min-width: 196;
            height: 160px;
          }
        }
      }
    }
  }
`

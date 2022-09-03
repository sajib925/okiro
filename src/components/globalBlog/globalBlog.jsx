import React from "react";
import {StyledGlobalBlog} from "./style";
import {Link} from "react-router-dom";
import img1 from "../../../public/image/featuresCard/feature_card_img_1.jpeg";
import icon from "../../../public/image/featuresCard/pagination.svg";
import img2 from "../../../public/image/globalBlog/global_blog_1.jpg";
import img3 from "../../../public/image/loop/loop_section_3.jpg";
import { Title } from './../title/title';
import {Description} from "./../description/description";
import bookmarkImg from '../../../public/image/globalBlog/global_2.jpg'
import bookmarkIcon from "../../../public/image/globalBlog/apple-touch-icon.png";
import { SubscribeSection } from "../subscribeSection/subscribeSection";
import { NextPrev } from "./nextPrevSection/nextprev";
import imgNP from '../../../public/image/loop/loop_section_1.jpeg'
import imgPN from "../../../public/image/featuresCard/feature_card_img_6.jpeg";
import imgCard1 from "../../../public/image/featuresCard/feature_card_img_6.jpeg";
import { FeaturesCard } from './../featuresCard/featuresCard';

export const GlobalBlog = () => {
  return (
    <StyledGlobalBlog>
      <article className="postSection">
        <div className="postHeaderSection">
          <div className="thumbnail">
            <img src={img1} alt="banner image" />
          </div>
          <div className="itemContent">
            <div className="globalTags">
              <Link to="/">Story</Link>
              <Link to="/">Creative</Link>
            </div>
            <Title tag="h2" className="h2">
              Don’t be afraid
            </Title>
            <div className="icon">
              <img src={icon} alt="icon" />
            </div>
            <Description>
              <p className="description">
                Quae quo sunt excelsiores, eo dant clariora indicia naturae. Sed
                haec quidem liberius ab eo dicuntur et saepius. Et ille ridens
                video, inquit, quid agas tum ille timide vel potius verecunde.
              </p>
            </Description>
            <div className="itemMeta">
              <div className="itemImg">
                <Link to="/" className="firstImg">
                  <img src={img2} alt="meta image" />
                </Link>
                <Link to="/">
                  <img src={img3} alt="meta image" />
                </Link>
              </div>
              <div className="profileContent">
                <div className="itemAuthor">
                  <Link to="/">Megan Anderson</Link>,{" "}
                  <Link to="/">Lauren Langford</Link>
                </div>
                <div className="itemTime">
                  <span>August 12, 2020</span>
                  <span> ∙ 3 minutes read</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
      <div className="nextPrevSection">
        <NextPrev
          className="prev"
          image={imgNP}
          smallTitle="Newer post"
          title="I work best when my space is filled with inspiration"
        />
        <NextPrev
          className="next"
          smallTitle="Newer post"
          title="I work best when my space is filled with inspiration"
          image={imgPN}
        />
      </div>

      {/* <div className="globalSection">
        <small>see more</small>
        <div className="cards">
          <FeaturesCard
            className="pool"
            image={imgCard1}
            title="Don’t be afraid"
            links={["Megan Anderson", "Lauren Langford"]}
          />
          <FeaturesCard
            className="pool"
            image={imgCard1}
            title="Don’t be afraid"
            links={["Megan Anderson", "Lauren Langford"]}
          />
          <FeaturesCard
            className="pool"
            image={imgCard1}
            title="Don’t be afraid"
            links={["Megan Anderson", "Lauren Langford"]}
          />
          <FeaturesCard
            className="pool"
            image={imgCard1}
            title="Don’t be afraid"
            links={["Megan Anderson", "Lauren Langford"]}
          />
        </div>
      </div> */}
      <div className="subscribeSection">
        <SubscribeSection />
      </div>
    </StyledGlobalBlog>
  );
};

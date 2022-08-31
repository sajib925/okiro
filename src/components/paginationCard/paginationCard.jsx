import React from 'react'
import { FeaturesCard } from '../featuresCard/featuresCard';
import { StyledPaginationCard } from './style';
import img1 from "../../../public/image/featuresCard/feature_card_img_1.jpeg";
import img3 from "../../../public/image/featuresCard/feature_card_img_3.jpeg";
import img6 from "../../../public/image/featuresCard/feature_card_img_6.jpeg";
import img7 from "../../../public/image/featuresCard/feature_card_img_7.jpeg";
import icon from "../../../public/image/featuresCard/pagination.svg";
export const PaginationCard = () => {
  return (
    <StyledPaginationCard>
      <h3 className="rotateTitle">Story</h3>
      <div className="paginationTitle">
        <h3 className="title">STORY</h3>
        <div className="icon">
          <img src={icon} alt="" />
        </div>
      </div>
      <div className="cards">
        <FeaturesCard
          className="pool"
          image={img1}
          title="Don’t be afraid"
          links={["Megan Anderson", "Lauren Langford"]}
        />
        <FeaturesCard
          className="aqua"
          image={img6}
          title="Anyone can hold the helm when the sea is calm"
          links={["Megan Anderson", "Charles Barrett"]}
        />
        <FeaturesCard
          className="peach"
          image={img7}
          title="Cuisine is a mirror, reflecting the culture"
          links={["Victoria West", "Patricia Jenkins"]}
        />
        <FeaturesCard
          className="sand"
          image={img3}
          title="I always loved aesthetics"
          links={["Hannah Weastell", "Victoria West"]}
        />
      </div>
    </StyledPaginationCard>
  );
}

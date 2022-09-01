import React from "react";
import {StyledHero} from "./style";
import {FeaturesCard} from "./../featuresCard/featuresCard";
import img1 from "../../../public/image/featuresCard/feature_card_img_1.jpeg";
import img2 from "../../../public/image/featuresCard/feature_card_img_2.jpeg";
import img3 from "../../../public/image/featuresCard/feature_card_img_3.jpeg";
import img4 from "../../../public/image/featuresCard/feature_card_img_4.jpeg";
import img5 from "../../../public/image/featuresCard/feature_card_img_5.jpeg";
import icon from "../../../public/image/featuresCard/pagination.svg";

export const Hero = () => {
  return (
    <StyledHero>
      <h3 className="rotateTitle">FEATURED</h3>
      <div className="featuredTitle">
        <h3 className="title">FEATURED</h3>
        <div className="icon">
          <img src={icon} alt="" />
        </div>
      </div>
      <div className="heroCard">
        <FeaturesCard
          className="pool"
          image={img1}
          title="Don’t be afraid"
          links={["Megan Anderson", "Lauren Langford"]}
        />
        <FeaturesCard
          className="rose"
          image={img2}
          title="You have to fight to reach your dream"
          links={["Megan Anderson"]}
        />
        <FeaturesCard
          className="sand"
          image={img3}
          title="I always loved aesthetics"
          links={["Hannah Weastell", "Victoria West"]}
        />
        <FeaturesCard
          className="aqua"
          image={img4}
          title="Creating deluxe drink is like playing a sport"
          links={["Victoria West"]}
        />

        <FeaturesCard
          className="peach"
          image={img5}
          title="You must grow like a tree"
          links={["Patricia Jenkins", "Charles Barrett"]}
        />
      </div>
    </StyledHero>
  );
};

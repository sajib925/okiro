import React from "react";
import {FeaturesCard} from "../../components/featuresCard/featuresCard";
import {StyledHome} from "./style";
import img1 from "../../../public/image/featuresCard/feature_card_img_1.jpeg";
import img2 from "../../../public/image/featuresCard/feature_card_img_2.jpeg";
import img3 from "../../../public/image/featuresCard/feature_card_img_3.jpeg";
import img4 from "../../../public/image/featuresCard/feature_card_img_4.jpeg";
import img5 from "../../../public/image/featuresCard/feature_card_img_5.jpeg";
import { PaginationCard } from "../../components/paginationCard/paginationCard";
import { Hero } from "../../components/hero/hero";

export const Home = () => {
  return (
    <StyledHome>
      <Hero />
      <PaginationCard />
    </StyledHome>
  );
};

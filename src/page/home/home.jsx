import React from "react";
import {StyledHome} from "./style";
import { Hero } from "../../components/hero/hero";
import { LoopSection } from "../../components/loopSection/loopSection";
import { LoopCard } from './../../components/loopCard/loopCard';
import { PaginationCard } from "../../components/paginationCard/paginationCard";
import { SubscribeSection } from "../../components/subscribeSection/subscribeSection";
import { Cta } from "../../components/cta/cta";

export const Home = () => {
  return (
    <StyledHome>
      <Hero />
      <LoopSection />
      <LoopCard />
      <Cta />
      <PaginationCard />
      <SubscribeSection />
    </StyledHome>
  );
};

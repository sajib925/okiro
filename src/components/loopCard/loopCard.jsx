import React from 'react'
import { Card } from '../card/card';
import { StyledLoopCard } from './style';
import img1 from '../../../public/image/card/card_1.jpeg'
import img2 from "../../../public/image/card/card_2.jpeg";
import img3 from "../../../public/image/card/card_3.jpeg";
import img4 from "../../../public/image/card/card_4.jpeg";
import img5 from "../../../public/image/card/card_5.jpeg";
import { Button } from './../button/button';

export const LoopCard = () => {
  return (
    <StyledLoopCard>
      <div className="cards">
        <Card
          className="pool"
          image={img1}
          title="Don’t be afraid"
          links={["Megan Anderson", "Lauren Langford"]}
          tags="Story"
        />
        <Card
          className="aqua"
          image={img2}
          title="Don’t be afraid"
          links={["Megan Anderson", "Lauren Langford"]}
          tags="Story"
        />
        <Card
          className="rose"
          image={img3}
          title="Don’t be afraid"
          links={["Megan Anderson", "Lauren Langford"]}
          tags="Story"
        />
        <Card
          className="peach"
          image={img4}
          title="Don’t be afraid"
          links={["Megan Anderson", "Lauren Langford"]}
          tags="Story"
        />
        <Card
          className="cream"
          image={img5}
          title="Don’t be afraid"
          links={["Megan Anderson", "Lauren Langford"]}
          tags="Story"
        />
      </div>
      
    </StyledLoopCard>
  );
}

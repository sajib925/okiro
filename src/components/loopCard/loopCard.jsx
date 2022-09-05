import React from 'react'
import { Card } from '../card/card';
import { StyledLoopCard } from './style';
import img1 from '../../../public/image/card/card_1.jpeg'
import img2 from "../../../public/image/card/card_2.jpeg";
import img3 from "../../../public/image/card/card_3.jpeg";
import img4 from "../../../public/image/card/card_4.jpeg";
import img5 from "../../../public/image/card/card_5.jpeg";

export const LoopCard = () => {
  return (
    <StyledLoopCard>
      <div className="cards">
        <div className="card">
          <Card
            className="pool"
            image={img1}
            title="Don’t be afraid"
            links={["Megan Anderson", "Lauren Langford"]}
            tags="Story"
          />
        </div>
        <div className="card">
          <Card
            className="aqua"
            image={img2}
            title="Anyone can hold the helm when the sea is calm"
            links={["Megan Anderson", "Charles Barrett"]}
            tags="Home"
          />
        </div>
        <div className="card">
          <Card
            className="rose"
            image={img3}
            title="You have to fight to reach your dream"
            links={["Megan Anderson"]}
            tags="Product"
          />
        </div>
        <div className="card">
          <Card
            className="peach"
            image={img4}
            title="Cuisine is a mirror, reflecting the culture"
            links={["Victoria West", "Patricia Jenkins"]}
            tags="Creative"
          />
        </div>
        <div className="card">
          <Card
            className="cream"
            image={img5}
            title="Being unique is better than being perfect"
            links={["Megan Anderson"]}
            tags="Home"
          />
        </div>
      </div>
    </StyledLoopCard>
  );
}

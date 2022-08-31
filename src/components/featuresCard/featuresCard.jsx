import React from "react";
import {Link} from "react-router-dom";
import {StyledFeaturesCard} from "./style";

export const FeaturesCard = (props) => {
  const {className, image, title, links} = props;
  return (
    <StyledFeaturesCard>
      <article className={className}>
        <div className="thumbnail">
          <img src={image} alt="" />
        </div>
        <div className="cardText">
          <h3 className="h3">
            <Link to="/">{title}</Link>
          </h3>
          <div className="owner">
            {props?.links.map((item, i) => [
              i > 0 ? ", " : "",
              <Link key={i} to="/">
                {item}
              </Link>,
            ])}
          </div>
        </div>
      </article>
    </StyledFeaturesCard>
  );
};

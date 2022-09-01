import React from 'react'
import { Link } from 'react-router-dom';
import { StyledCard } from './style';

export const Card = (props) => {
  const {className, image, title, links, tags} =props
  return (
    <StyledCard>
      <article className={className}>
        <div className="itemContainer">
          <div className="thumbnail">
            <img src={image} alt="" />
          </div>
          <div className="itemContent">
            <h2 className="h2">
              <Link to="/">{title}</Link>
            </h2>
            <div className="author">
              {props?.links.map((item, i) => [
                i > 0 ? ", " : "",
                <Link key={i} to="/">
                  {item}
                </Link>,
              ])}
            </div>
          </div>
          <div className="itemTags">
            <Link to="/">{tags}</Link>
          </div>
        </div>
      </article>
    </StyledCard>
  );
}

import React from 'react'
import { Button } from '../button/button';
import { StyledSubscribeSection } from './style';

export const SubscribeSection = () => {
  return (
    <StyledSubscribeSection>
      <div className="subscribeWrap">
        <h3 className="h3">Subscribe to new posts</h3>
        <form action="/">
          <input type="email" placeholder="Your email address" />
          <Button to="/" name="Subscribe" className="btnBig btn" />
        </form>
      </div>
    </StyledSubscribeSection>
  );
}

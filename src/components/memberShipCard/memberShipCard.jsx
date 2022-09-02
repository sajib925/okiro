import React from 'react'
import { StyledMemberShipCard } from './style';
import { Button } from './../button/button';

export const MemberShipCard = () => {
  return (
    <StyledMemberShipCard>
      <small className="title">Choose your plan</small>
      <div className="switchBtn">
        <button className="yearly">Monthly</button>
        <button className="monthly">Yearly</button>
      </div>
      <div className="cards">
        <div className="freeCard card">
          <div className="cardContent">
            <h2 className="h2">free</h2>
            <h3 className="h3">
              <sup>$</sup>0
            </h3>
            <p className="description">
              Sign up now to be notified of new content and support Okiro, help
              keep this site independent.
            </p>
            <div className="membershipCardOptions">
              <ul>
                <li>Full access to posts for subscribers</li>
                <li>Weekly email newsletter</li>
              </ul>
            </div>
          </div>
          <Button to="/" name="Subscribe Now" className="btn btnBig" />
        </div>
        <div className="premiumCard card">
          <div className="cardContent">
            <h2 className="h2">Premium</h2>
            <h3 class="h3 monthly">
              <sup>$</sup>79<span>/y</span>
            </h3>
            <h3 class="h3 yearly">
              <sup>$</sup>7<span>/mo</span>
            </h3>
            <p className="description">
              Get access to the library of paid-members only posts.
            </p>
            <div className="membershipCardOptions">
              <ul>
                <li>Full access to Premium posts</li>
                <li>Weekly email newsletter</li>
                <li>Support indie publishing</li>
                <li>Simple, secure card payment</li>
              </ul>
            </div>
          </div>
          <Button to="/" name="Subscribe Now" className="btn btnBig" />
        </div>
        <div className="premiumCardPlus card">
          <div className="cardContent">
            <h2 className="h2">Premium Plus</h2>
            <h3 class="h3 monthly">
              <sup>$</sup>14<span>/mo</span>
            </h3>
            <h3 class="h3 yearly">
              <sup>$</sup>149<span>/y</span>
            </h3>
            <p className="description">Get access to everything.</p>
            <div className="membershipCardOptions">
              <ul>
                <li>Full access to Premium Plus posts</li>
                <li>Members-only Q&amp;A</li>
                <li>Weekly email newsletter</li>
                <li>Support indie publishing</li>
                <li>Simple, secure card payment</li>
              </ul>
            </div>
          </div>
          <Button to="/" name="Subscribe Now" className="btn btnBig" />
        </div>
      </div>
    </StyledMemberShipCard>
  );
}

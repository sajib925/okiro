import React from 'react'
import { StyledMemberShip } from './styles'
import img from '../../../public/image/membership/member_ship.jpeg'
import icon from '../../../public/image/featuresCard/pagination.svg'
import { MemberShipCard } from './../../components/memberShipCard/memberShipCard';
import { Title } from './../../components/title/title';
import { Description } from '../../components/description/description';

export const Membership = () => {
  return (
    <StyledMemberShip>
      <div className="memberShipArchiveSection">
        <div className="archiveWrap">
          <div className="archiveContent">
            <Title tag="h3" className="h3">
              Membership
            </Title>
            <div className="icon">
              <img src={icon} alt="" />
            </div>
            <Description>
              <p className="description">
                Unlock full access to Okiro and see the entire library of
                subscribers-only content & updates
              </p>
            </Description>
          </div>
        </div>
        <div className="thumbnail">
          <img src={img} alt="" />
        </div>
      </div>
      <MemberShipCard />
    </StyledMemberShip>
  );
}

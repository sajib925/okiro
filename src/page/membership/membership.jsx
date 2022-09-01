import React from 'react'
import { StyledMemberShip } from './styles'
import img from '../../../public/image/membership/member_ship.jpeg'
import icon from '../../../public/image/featuresCard/pagination.svg'

export const Membership = () => {
  return (
    <StyledMemberShip>
      <div className="memberShipArchiveSection">
        <div className="archiveWrap">
          <div className="archiveContent">
            <h3 className="h3">Membership</h3>
            <div className="icon">
              <img src={icon} alt="" />
            </div>
            <p className="description">
              Unlock full access to Okiro and see the entire library of
              subscribers-only content & updates
            </p>
          </div>
        </div>
        <div className="thumbnail">
          <img src={img} alt="" />
        </div>
      </div>
    </StyledMemberShip>
  );
}

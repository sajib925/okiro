import React from 'react'
import { Link } from 'react-router-dom';
import { StyledLoopSection } from './style';
import img1 from '../../../public/image/loop/loop_section_1.jpeg'
import icon from '../../../public/image/featuresCard/pagination.svg'
import img2 from '../../../public/image/loop/loop_section_2.jpg'
import img3 from '../../../public/image/loop/loop_section_3.jpg'


export const LoopSection = () => {
  return (
    <StyledLoopSection>
      <article>
        <small>Latest posts</small>
        <div className="itemContainer">
          <div className="thumbnail">
            <Link to="/">
              <img src={img1} alt="banner image" />
            </Link>
          </div>
          <div className="itemContent">
            <div className="globalTags">
              <Link to="/">Creative</Link>
            </div>
            <h2 className="h2 itemTitle">
              <Link to="/">
                I work best when my space is filled with inspiration
              </Link>
            </h2>
            {/* <div className="icon"></div> */}
            <p className="description">
              <img src={icon} alt="icon" />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat ut
              facilisis rutrum donec tristique mauris est ac nunc. Eget nec,
              lorem mi libero accumsan....
            </p>
            <div className="itemMeta">
              <div className="itemImg">
                <Link to="/" className="firstImg">
                  <img src={img2} alt="meta image" />
                </Link>
                <Link to="/">
                  <img src={img3} alt="meta image" />
                </Link>
              </div>
              <div className="profileContent">
                <div className="itemAuthor">
                  <Link to="/">Victoria West</Link>,{" "}
                  <Link to="/">Lauren Langford</Link>
                </div>
                <div className="itemTime">
                  <span>September 30, 2020</span>
                  <span> ∙ 3 minutes read</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </StyledLoopSection>
  );
}

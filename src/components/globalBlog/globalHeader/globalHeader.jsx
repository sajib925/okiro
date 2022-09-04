import React from "react";
import {StyledGlobalHeader} from "./style";
import img1 from "../../../../public/image/featuresCard/feature_card_img_1.jpeg";
import img2 from "../../../../public/image/globalBlog/global_blog_1.jpg";
import icon from "../../../../public/image/featuresCard/pagination.svg";
import img3 from "../../../../public/image/loop/loop_section_3.jpg";
import {Link} from "react-router-dom";

export const GlobalHeader = () => {
  return (
    <StyledGlobalHeader>
      <div className="itemContainer">
        <div className="itemImage">
          <img src={img1} alt="" />
        </div>
        <div className="itemContent">
          <div className="itemTags">
            <Link to="/">Story</Link>
            <Link to="/">Creative</Link>
          </div>
          <h1 className="itemTitle">Don’t be afraid</h1>
          <div className="itemDescription">
            <img src={icon} alt="" className="icon" />
            Quae quo sunt excelsiores, eo dant clariora indicia naturae. Sed
            haec quidem liberius ab eo dicuntur et saepius. Et ille ridens
            video, inquit, quid agas tum ille timide vel potius verecunde.
          </div>
          <div className="itemMeta">
            <div className="itemProfile">
              <Link to="/">
                <img src={img2} alt="" />
              </Link>
              <Link to="/">
                <img src={img3} alt="" />
              </Link>
            </div>
            <div className="itemAuthors">
              <Link to="/" className="img1">
                Megan Anderson
              </Link>
              ,{" "}
              <Link to="/" className="img2">
                Lauren Langford
              </Link>
              <div className="times">
                <time datetime="2020-08-12">August 12, 2020</time> ∙ 3 minutes
                read
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledGlobalHeader>
  );
};

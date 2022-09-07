import React from "react";
import {StyledGlobalBlog} from "./style";
import {Link} from "react-router-dom";
import img1 from "../../../public/image/featuresCard/feature_card_img_1.jpeg";
import icon from "../../../public/image/featuresCard/pagination.svg";
import img2 from "../../../public/image/globalBlog/global_blog_1.jpg";
import img3 from "../../../public/image/loop/loop_section_3.jpg";
import {Title} from "./../title/title";
import {Description} from "./../description/description";
import bookmarkImg from "../../../public/image/globalBlog/global_2.jpg";
import bookmarkIcon from "../../../public/image/globalBlog/apple-touch-icon.png";
import {SubscribeSection} from "../subscribeSection/subscribeSection";
import {NextPrev} from "./nextPrevSection/nextprev";
import imgNP from "../../../public/image/loop/loop_section_1.jpeg";
import imgPN from "../../../public/image/featuresCard/feature_card_img_6.jpeg";
import {FeaturesCard} from "./../featuresCard/featuresCard";
import {ShareIcon} from "./socialIcon/shareIcon";
import {Bookmark} from "./bookmark/bookmark";
import {Quotation} from "./quotation/quotation";
import {GlobalDescription} from "./globalDescription/globalDescription";
import { ImageGallery } from './imageGallery/imageGallery';
import { GlobalHeader } from './globalHeader/globalHeader';
import imgCard1 from "../../../public/image/featuresCard/feature_card_img_6.jpeg";
import imgCard2 from "../../../public/image/featuresCard/feature_card_img_7.jpeg";
import imgCard3 from "../../../public/image/featuresCard/feature_card_img_3.jpeg";
import imgCard4 from "../../../public/image/featuresCard/feature_card_img_4.jpeg";

export const GlobalBlog = () => {
  return (
    <StyledGlobalBlog>
      <GlobalHeader />
      <GlobalDescription
        className="descp"
        children="Sed ut iis bonis erigimur, quae expectamus, sic laetamur iis, quae recordamur. Athoc in eo M. Quid de Platone aut de Democrito loquar. Quae in controversiam veniunt, de iis, si placet, disseramus. Iam quae corporis sunt, ea nec auctoritatem cum animi partibus, comparandam et cognitionem habent faciliorem. Quam ob rem tandem, inquit, non satisfacit. Isto modo ne improbos quidem, si essent boni viri. Qui autem esse poteris, nisi te amor ipse ceperit. Utilitatis causa amicitia est quaesita. "
      />
      <GlobalDescription
        className="descp"
        children="Quos nisi redarguimus, omnis virtus, omne decus, omnis vera laus deserenda est. Sed eum qui audiebant, quoad poterant, defendebant sententiam suam. Fatebuntur Stoici haec omnia dicta esse praeclare, neque eam causam Zenoni desciscendi fuisse. "
      />
      <GlobalDescription
        className="descp"
        children="Quae quo sunt excelsiores, eo dant clariora indicia naturae. Sed haec
        quidem liberius ab eo dicuntur et saepius. Et ille ridens: Video, inquit,
        quid agas; Tum ille timide vel potius verecunde: Facio, inquit. An hoc
        usque quaque, aliter in vita? Unum nescio, quo modo possit, si luxuriosus
        sit, finitas cupiditates habere. Aliter enim explicari, quod quaeritur,
        non potest. Sed haec quidem liberius ab eo dicuntur et saepius."
      />
      <Quotation />
      <GlobalDescription
        className="descp"
        children="Sed quid tibi dicendum sit oblitus es. Haec et tu ita posuisti, et verba vestra sunt. Contemnit enim disserendi elegantiam, confuse loquitur. Bona autem corporis huic sunt, quod posterius posui, similiora. Quod cum ita sit, perspicuum est omnis rectas res atque laudabilis eo referri, ut cum voluptate vivatur."
      />
      <GlobalDescription
        className="descp"
        children="Quasi vero aut concedatur in omnibus stultis aeque magna esse vitia, et eadem inbecillitate et inconstantia L. Levatio igitur vitiorum magna fit in iis, qui habent ad virtutem progressionis aliquantum. Tertium autem omnibus aut maximis rebus iis, quae secundum naturam sint, fruentem vivere. Materiam vero rerum et copiam apud hos exilem, apud illos uberrimam reperiemus. Atque his de rebus et splendida est eorum et illustris oratio. Age, inquies, ista parva sunt. Ad eos igitur converte te, quaeso. Haec para/doca illi, nos admirabilia dicamus. Universa enim illorum ratione cum tota vestra confligendum puto."
      />
      <ImageGallery />
      <Bookmark />
      <GlobalDescription
        className="descp"
        children="Quos nisi redarguimus, omnis virtus, omne decus, omnis vera laus deserenda est. Sed eum qui audiebant, quoad poterant, defendebant sententiam suam. Fatebuntur Stoici haec omnia dicta esse praeclare, neque eam causam Zenoni desciscendi fuisse. Quis est autem dignus nomine hominis, qui unum diem totum velit esse in genere isto voluptatis. Ad eos igitur convert te, quaeso. Duo Reges: constructio interrete. An est aliquid per se ipsum flagitiosum, etiamsi nulla comitetur infamia. Quid ad utilitatem tantae pecuniae? Duo enim genera quae erant, fecit tria. Et quod est munus, quod opus sapientiae? Sed in rebus apertissimis nimium longi sumus. Quasi vero aut concedatur in omnibus stultis aeque magna esse vitia, et eadem inbecillitate et inconstantia L. Levatio igitur vitiorum magna fit in iis, qui habent ad virtutem progressionis aliquantum. Tertium autem omnibus aut maximis rebus iis, quae secundum naturam sint, fruentem vivere. Materiam vero rerum et copiam apud hos exilem, apud illos uberrimam reperiemus. Atque his de rebus et splendida est eorum et illustris oratio. Age, inquies, ista parva sunt. Ad eos igitur converte te, quaeso. Haec para/doca illi, nos admirabilia dicamus. Universa enim illorum ratione cum tota vestra confligendum puto."
      />
      <ShareIcon />
      <div className="nextPrevSection">
        <NextPrev
          className="prev"
          image={imgNP}
          smallTitle="Newer post"
          title="I work best when my space is filled with inspiration"
        />
        <NextPrev
          className="next"
          smallTitle="Newer post"
          title="I work best when my space is filled with inspiration"
          image={imgPN}
        />
      </div>
      <div className="globalSection">
        <small>see more</small>
        <div className="sectionTitle">
          <h3 className="title">STORY</h3>
          <div className="icon">
            <img src={icon} alt="" />
          </div>
        </div>
        <div className="cards">
          <div className="card">
            <FeaturesCard
              className="pool"
              image={imgCard1}
              title="Anyone can hold the helm when the sea is calm"
              links={["Megan Anderson", "Lauren Langford"]}
            />
          </div>
          <div className="card">
            <FeaturesCard
              className="peach"
              image={imgCard2}
              title="Cuisine is a mirror, reflecting the culture"
              links={["Victoria West", "Patricia Jenkins"]}
            />
          </div>
          <div className="card">
            <FeaturesCard
              className="sand"
              image={imgCard3}
              title="I always loved aesthetics"
              links={["Hannah Weastell", "Victoria West"]}
            />
          </div>
          <div className="card">
            <FeaturesCard
              className="peach"
              image={imgCard4}
              title="You must grow like a tree"
              links={["Patricia Jenkins", "Charles Barrett"]}
            />
          </div>
        </div>
      </div>
      <div className="subscribeSection">
        <SubscribeSection />
      </div>
    </StyledGlobalBlog>
  );
};

import React, { useState } from "react";
import chairImage from "../images/whiteChair.jpeg";
import infoPhoto from "../images/infoPhoto.png";
import facebook from "../images/facebook.png";
import twitter from "../images/twitter.png";
import pintrist from "../images/pintrist.png";
import "./ProductInfo.css";
import Header from "./Header";
import Description from "./Description";
import InfoHeader from "./InfoHeader";
import Divider from "./Divider";
import IntroText from './IntroText';

const ProductInfo = () => {
  const [title, setTitle] = useState("");
  return (
    <div className="card">
      <div className="row ">
        <div className="col-md-7">
          <div className="leftSide">
            {/* <img src={chairImage} className="card-img" alt="..." /> */}
          </div>
        </div>
        <div class="col-md-5">
          <div className="card-body">
            <Header TitleName={"Intro"} />
            <IntroText
              DescText={
                "Simple,timless desgin that still going stronng after 40 years in our stores," +
                " It's loved by all edges so we made a grown-up size and a children's size."
              }
            />
            <Header TitleName={"Product Information"} />
            <div className="row ">
              <div class="col-md-3">
                <InfoHeader HeaderText={"Dimesion"} />
              </div>
              <div class="col-md-6">
                <Description DescText={"52x50x88 cm"} />
              </div>
            </div>

            <Divider />

            <div className="row ">
              <div class="col-md-3">
                <InfoHeader HeaderText={"Materials"} />
              </div>
              <div class="col-md-6">
                <Description DescText={"Polyproplyene plastic"} />
                <Description DescText={" Aluminuim Solid birch"} />
                <Description DescText={"Solid birch"} />
              </div>
            </div>

            <Divider />

            <div className="row ">
              <div class="col-md-3">
                <InfoHeader HeaderText={"Good to know"} />
              </div>
              <div class="col-md-6">
                <Description
                  DescText={"Wipe clean with cloth demended in a mild cleaner"}
                />
              </div>
            </div>
            <Divider />

            <div className="row ">
              {/* <div class="col-md-10">
                <img src={infoPhoto} className="card-img" alt="..." />
              </div> */}
              <div class="col-md-2">
                <div className="row ">
                  <div class="col-md-7">
                    <img src={facebook} className="card-img" alt="..." />
                  </div>
                  <div class="col-md-7">
                    <img src={twitter} className="card-img" alt="..." />
                  </div>
                  <div class="col-md-7">
                    <img src={pintrist} className="card-img" alt="..." />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductInfo;

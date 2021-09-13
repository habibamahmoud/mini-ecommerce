import React, { useState,useEffect } from "react";

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
import ImageComponent from './ImageComponent';
import axios from "axios";

const ProductInfo = () => {
  
  const [product, setProduct] = useState(null);
  useEffect(()=>{
    axios.get('https://mini-ecommerce.silicon-arena.com/api/products/1').then(response=>setProduct(response.data))
  })
  return (
    product ? 
    <div className="card">
      
      <div className="row ">
        <div className="col-md-8">
          <ImageComponent details={product}/>
          {console.log(product)}
        </div>
        
        <div class="col-md-4">
          <div className="card-body">
            <Header TitleName={"Intro"} />
            <IntroText
              DescText={
                product.description
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
                <Description DescText={product.material} />
               
              </div>
            </div>

            <Divider />

            <div className="row ">
              <div class="col-md-3">
                <InfoHeader HeaderText={"Good to know"} />
              </div>
              <div class="col-md-6">
                <Description
                  DescText={product.good_to_know}
                />
              </div>
            </div>
            <Divider />

          
              <div className="col-md-2 socail">
                  <i className="fab fa-facebook-square" ></i>
                  <i className="fab fa-twitter-square"></i>
                  <i class="fab fa-pinterest"></i>
                
              </div>
           
          </div>
        </div>
      </div>
    </div>
    : <div></div>
  );
};
export default ProductInfo;

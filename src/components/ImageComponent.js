import "./ImageComponent.css";
import chairImage from "../images/chair1.png";
const ImageComponent = () => {
  return (
      
    <div style={{ backgroundColor: "#B1D5D9" }}>
      <img className="ImageStyle" src={chairImage} />
        <div class="row">
          <div class="col-md-6">
            <div className="leftSide">
              <p>Dining Chair</p>
              <h1>Leifrane</h1>
              <p>$180</p>
            </div>
          </div>
        </div>

        <div class="col-md-6">
        <button  className="btn btn-light"  className="rounded-pill"> <p className="button-txt">Buy</p></button>
        </div>
      </div>
  );
};
export default ImageComponent;

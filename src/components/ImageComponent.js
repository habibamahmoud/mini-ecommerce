import "./ImageComponent.css";
import chairImage from "../images/chair1.png";
const ImageComponent = (props) => {
  return (
    <div style={{ "backgroundColor": props.details.images[0].background_color }}>
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item">Home</li>
          <li className="breadcrumb-item">Collection</li>
          <li className="breadcrumb-item active">Leifrane</li>
        </ol>
      </nav>
      <div className="text-center">
        <img className="ImageStyle" className="img-fluid" src={chairImage} />
      </div>
      <div className="d-flex justify-content-around align-items-center">
        <div>
          <div className="p-5">
            <p>Dining Chair</p>
            <h1>{props.details.name}</h1>
            <p>${props.details.price}</p>
          </div>
        </div>

        <div className="p-5">
          <div className="button-container" className="col-md-8 col-sm-10">
            <button className="btn btn-light" className="rounded-pill">
              {" "}
              <p className="button-txt">Buy</p>
            </button>
          </div>
        </div>
        
      </div>
    </div>
  );
};
export default ImageComponent;

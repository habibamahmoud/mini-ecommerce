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
        <img className="ImageStyle" className="img-fluid" src={props.details.images[0].img} />
      </div>
      <div className="d-flex justify-content-around ">
          <div className="w-50 px-5">
            <p>Dining Chair</p>
            <h1>{props.details.name}</h1>
            <p>${props.details.price}</p>
          </div>
        

        <div className="w-25 pr-5 mt-5">
            <button className="btn btn-light rounded-pill w-100">
              Buy
            </button>
        </div>
        </div>
        
      </div>
  );
};
export default ImageComponent;

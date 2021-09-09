import "./ImageComponent.css";
import chairImage from "../images/chair1.png";
const ImageComponent = () => {
  return (
    <div style={{ backgroundColor: "#B1D5D9" }}>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            Home
          </li>
          <li class="breadcrumb-item">
           Collection 
          </li>
          <li class="breadcrumb-item active">Leifrane</li>
        </ol>
      </nav>
      <img className="ImageStyle" src={chairImage} />
      <div class="d-flex justify-content-around align-items-center">
        <div>
          <div class="p-5">
            <p>Dining Chair</p>
            <h1>Leifrane</h1>
            <p>$180</p>
          </div>
        </div>

        <div class="p-5">
          <button className="btn btn-light" className="rounded-pill">
            {" "}
            <p className="button-txt">Buy</p>
          </button>
        </div>
      </div>
    </div>
  );
};
export default ImageComponent;

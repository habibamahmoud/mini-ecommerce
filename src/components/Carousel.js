import "./Carousel.css";
import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const images = [
  { url: "chair1.png", bgColor: "#F6F6F6", name:"Chair_1"},
  { url: "chair2.png", bgColor: "#EBD9D8", name:"Chair_2"},
  { url: "chair3.png", bgColor: "#B1D5D9", name:"Chair_3"},
];

const Carousel = () => {
  const [selectedImageId, setSelectedImageId] = useState(0);

  const scrollToImage = (imageId) => {
    let carouselWrapperElement =
      document.getElementsByClassName("carouselWrapper")[0];
    carouselWrapperElement.scrollLeft = imageId * window.innerWidth;
  };

  const selectNextImage = () => {
    const imagesCount = images.length;
    const newSelectedImageId = (selectedImageId + 1) % imagesCount;
    setSelectedImageId(newSelectedImageId);
    scrollToImage(newSelectedImageId);
  };
  const selectPreviousImage = () => {
    const imagesCount = images.length;
    const newSelectedImageId =
      (selectedImageId - 1 + imagesCount) % imagesCount;
    setSelectedImageId(newSelectedImageId);
    scrollToImage(newSelectedImageId);
  };
  const selectImageId = (id) => {
    setSelectedImageId(id);
    scrollToImage(id);
  };

  return (
    <div className="wrapper">
      <div className="buttonsWrapper">
        <div className="navigateButton" onClick={selectPreviousImage}>
          <IoIosArrowBack className="navigateButtonIcon" />
        </div>
        <div className="imageSelectorWrapper">
          {images.map((_, idx) => {
            return (
              <div
                className="imageSelectorButton"
                key={idx}
                style={{
                  backgroundColor: idx == selectedImageId ? "black" : "#a8a8a8",
                }}
                onClick={() => {
                  selectImageId(idx);
                }}
              ></div>
            );
          })}
        </div>
        <div className="navigateButton" onClick={selectNextImage}>
          <IoIosArrowForward className="navigateButtonIcon" />
        </div>
      </div>
      <div
        className="carouselWrapper"
        style={{ backgroundColor: images[selectedImageId].bgColor }}
      >
        {images.map((image, idx) => {
          return (
            <div className="carouselImageWrapper">
            <div className="text">
                <p>{image.name}</p>
                <button type="button" className="btn btn-light"> <p className="button-txt">Buy</p></button>
            </div>
              <img className="carouselImage" src={image.url} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Carousel
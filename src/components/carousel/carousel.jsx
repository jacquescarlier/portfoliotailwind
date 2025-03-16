import { useState } from "react";
import PropTypes from "prop-types";

const defaultClasses = {
  singlePictureSection: "relative flex justify-center items-center w-full h-64 md:h-96",
  singlePictureImage: "w-full h-full object-fit rounded-lg",
  carouselSection: "relative flex flex-col justify-center items-center w-full h-64 p-3 md:h-96",
  carouselImage: "w-full h-full object-scale-down rounded-lg",
  counter: "mt-2 text-black px-3 py-1 bg-transparent rounded-md text-sm md:text-base",
  navigation: "absolute top-0 left-0 right-0 bottom-0 flex justify-between items-center",
  navButton: "p-2 bg-white bg-opacity-50 rounded-full shadow-md hover:bg-opacity-75 ",
  navIcon: "w-6 h-6 md:w-8 md:h-8 cursor-pointer"
};

const Carousel = ({ pictures, arrowLeft, arrowRight, classes = {} }) => {
  const [currentPictureIndex, setCurrentPictureIndex] = useState(0);
  const pictureLength = pictures.length;
  const currentPicture = pictures[currentPictureIndex];
  

  const mergedClasses = { ...defaultClasses, ...classes };

  const nextPicture = () => {
    setCurrentPictureIndex((prevIndex) => (prevIndex + 1) % pictureLength);
  };

  const previousPicture = () => {
    setCurrentPictureIndex((prevIndex) => (prevIndex - 1 + pictureLength) % pictureLength);
  };

  return (
    <section className={mergedClasses.carouselSection}>
      <img src={currentPicture} className={mergedClasses.carouselImage} />
      <div className={mergedClasses.counter}>
        {`${currentPictureIndex + 1} / ${pictureLength}`}
      </div>
      <div className={mergedClasses.navigation}>
        <button onClick={previousPicture} className={mergedClasses.navButton}>
          <img src={arrowLeft} alt="Flèche gauche" className={mergedClasses.navIcon} />
        </button>
        <button onClick={nextPicture} className={mergedClasses.navButton}>
          <img src={arrowRight} alt="Flèche droite" className={mergedClasses.navIcon} />
        </button>
      </div>
    </section>
  );
};

Carousel.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.string).isRequired,
  arrowLeft: PropTypes.string,
  arrowRight: PropTypes.string,
  classes: PropTypes.shape({
    singlePictureSection: PropTypes.string,
    singlePictureImage: PropTypes.string,
    carouselSection: PropTypes.string,
    carouselImage: PropTypes.string,
    counter: PropTypes.string,
    navigation: PropTypes.string,
    navButton: PropTypes.string,
    navIcon: PropTypes.string,
  }),
};

export default Carousel;

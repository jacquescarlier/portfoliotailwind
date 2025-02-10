import { useState } from "react";
import PropTypes from "prop-types";
import ArrowRight from "../../pictures/logo/red_arrow_right1.png";
import ArrowLeft from "../../pictures/logo/red_arrow_left1.png";

const Carousel = ({ pictures, title, alt }) => {
  const pictureLength = pictures.length;
  const [currentPictureIndex, setcurrentPictureIndex] = useState(0);
  const pictureCounter = `${currentPictureIndex + 1} / ${pictureLength}`;

  const nextPicture = () => {
    setcurrentPictureIndex((prevIndex) => (prevIndex + 1) % pictureLength);
  };

  const previousPicture = () => {
    setcurrentPictureIndex((prevIndex) => (prevIndex - 1 + pictureLength) % pictureLength);
  };

  const currentPicture = pictures[currentPictureIndex];
  if (pictures.length === 1) {
    return (
      <section className="relative flex justify-center items-center w-full h-64 md:h-96">
        <img src={currentPicture} alt={alt} className="w-full h-full object-fit rounded-lg" />
      </section>
    );
  }
  return (
    <section className="relative flex flex-col justify-center items-center w-full h-64 p-3 md:h-96">
      <img src={currentPicture} alt={title} className="w-full h-full object-scale-down rounded-lg" />
      {/* Section pour le compteur */}
      <div className="mt-2 text-black px-3 py-1 bg-transparent rounded-md text-sm md:text-base">
        {pictureCounter}
      </div>
      {/* Boutons de navigation */}
      <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-between items-center">
        <button onClick={previousPicture} className="p-2 bg-white bg-opacity-50 rounded-full shadow-md hover:bg-opacity-75">
          <img src={ArrowLeft} alt="Flèche gauche" className="w-6 h-6 md:w-8 md:h-8" />
        </button>
        <button onClick={nextPicture} className="p-2 bg-white bg-opacity-50 rounded-full shadow-md hover:bg-opacity-75">
          <img src={ArrowRight} alt="Flèche droite" className="w-6 h-6 md:w-8 md:h-8" />
        </button>
      </div>
    </section>
  );
};

Carousel.propTypes = {
  pictures: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

export default Carousel
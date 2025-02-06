import PropTypes from "prop-types";


function Banner({ image, smallImage, alt, title1 }) {
  return (
    <div className="flex justify-center items-center w-full relative">
      <div className="w-[95%] m-5 opacity-70 border-5 border-font-color rounded-xl hover:opacity-80 relative">
        <img
          src={smallImage}
          srcSet={`${smallImage} 768w, ${image} 1900w`}
          sizes="100w"
          className="w-full h-56 object-cover rounded-xl filter grayscale md:h-44 sm:block"
          alt={alt}
        />
        <div className="absolute inset-0 flex justify-center items-center gap-1 md:flex-col md:items-center lg:text-center animate-fadein">
          <h1 className="text-font1 text-6xl font-medium md:text-2xl sm:text-base sm:text-font-bg sm:font-bold sm:tracking-wide">
            <span>{title1}</span>
          </h1>
        </div>
      </div>
    </div>

  );
}


export default Banner;

Banner.propTypes = {
  image: PropTypes.string,
  smallImage: PropTypes.string,
  title1: PropTypes.string.isRequired, // Validation pour la prop 'title1',
  alt: PropTypes.string,
};

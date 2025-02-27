import PropTypes from "prop-types";

function Banner({ image, smallImage, alt, title1 }) {
  return (
    <div className="flex justify-center items-center w-full relative">
    <div className="w-[95%] m-5 opacity-70 border-5 border-font-color rounded-xl hover:opacity-90 relative group">
      <img
        src={smallImage}
        srcSet={`${smallImage} 768w, ${image} 1900w`}
        sizes="100w"
        className="w-full object-cover rounded-xl filter grayscale sm:h-48 md:h-56 lg:h-60 xl:h-72"
        alt={alt}
      />
      <div className="absolute inset-0 flex flex-nowrap justify-center items-center md:flex-col md:items-center lg:text-center animate-fadein">
        <h1 className="text-font1 text-[13px] lg:p-0 md:p-0 sm:text-[20px] sm:pl-5 md:text-2xl lg:text-3xl font-medium group-hover:text-white">
          {title1}
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

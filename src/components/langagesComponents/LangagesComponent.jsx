import PropTypes from 'prop-types';

const LangageComponent = ({ imgLangages }) => {
  return (
    <div className="w-screen flex gap-2 sm:gap-2 justify-center px-2 sm:px-2 bg-transparent bg-opacity-80" aria-label="langage de programmation invert">
      {imgLangages.map((langage) => {
        return (
          <div key={langage.id} className="relative group">
            <img
              src={langage.img}
              alt={langage.alt}
              aria-label={langage.alt}
              className="logocode pb-4 invert group-hover:invert-0 transition-all sm:h-10 sm:w-10 md:h-16 md:w-16 xs:h-20 xs:w-20"
            />
            <div className="tip absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-black text-sm font-bold rounded px-2 py-1 shadow-md bottom-[-50px] left-1/2 transform -translate-x-1/2">
              {langage.tips}
            </div>
          </div>
        );
      })}
    </div>
  );
};

LangageComponent.propTypes = {
  imgLangages: PropTypes.array.isRequired, // Déclare que 'title' est une chaîne de caractères et est requis

};

export default LangageComponent;

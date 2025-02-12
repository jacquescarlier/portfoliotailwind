import Accordion from "../accordions/Accordion";
import PropTypes from 'prop-types';

const title = ["Description", "Langages"];

const PortfolioDropdown = ({ description, langages }) => {
  return (
    <section className="accordionSection flex flex-col md:flex-row items-center md:items-start justify-center gap-[20px] relative mb-[38px] px-3 py-0 mx-auto">
      <div className="accordionBody w-[90%] md:w-[45%] flex flex-col justify-start gap-[30px]">
        <Accordion
          key={title[0]}
          title={<h2>{title[0]}</h2>}
          content={<p className="text-gray-600 text-base sm:text-sm">{description}</p>}
        />
      </div>
      <div className="accordionBody w-[90%] md:w-[45%] flex flex-col justify-start gap-[30px]">
        <Accordion
          key={title[1]}
          title={<h2>{title[1]}</h2>}
          content={
            <ul className="flex justify-between w-[75%] text-base sm:text-sm">
              {langages.map((langage) => (
                <li key={langage}>
                  <img src={langage} alt={langage} className="w-[50px] h-[50px]" />
                </li>
              ))}
            </ul>
          }
        />
      </div>
    </section>
  );
};

PortfolioDropdown.propTypes = {
  description: PropTypes.string.isRequired,
  langages: PropTypes.array.isRequired,
};

export default PortfolioDropdown;

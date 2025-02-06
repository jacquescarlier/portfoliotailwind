import Accordion from "../accordions/Accordion";
import PropTypes from 'prop-types';

const title = ["Description", "Langages"];

const PortfolioDropdown = ({ description, langages }) => {
  return (
    <section className="accordionSection flex items-start justify-center gap-[76px] relative mb-[38px] px-3 py-0">
      <div className="accordionBody w-[80%] flex flex-col justify-center gap-[30px]">
        <Accordion
          key={title}
          title={title[0]}
          content={<p>{description}</p>}
        />
      </div>
      <div className="accordionBody w-[80%] flex flex-col justify-center gap-[30px]">
        <Accordion
          key={title}
          title={title[1]}
          content={
            <ul className="flex justify-between w-[75%]">
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


import PropTypes from 'prop-types';
import CardModal from "../../components/cardModal/CardModal";

const title = ["Description", "Langages"];

const PortfolioCard = ({ description, langages }) => {
  return (
    <section className=" flex flex-col flex-wrap md:flex-row items-center md:items-start justify-center gap-[20px] relative mb-[38px] px-3 py-0 mx-auto">
      <div className="w-[90%] md:w-[45%] flex flex-col justify-start gap-[30px]">
        <CardModal
          key={title[0]}
          title1={title[0]}
          content1={description}
          classes={{
            cardStyle1: ' w-full mx-auto mt-8 bg-gray-200 rounded-b-md rounded-t-[10px] border-l-[1px] border-b-[1px] border-[#FFD700] rounded-t-md shadow-lg shadow-sky-800/60 transition-all hover:opacity-80',
            contentStyle1: "p-5 text-gray-600 text-base sm:text-sm"
          }}
        />
      </div>
      <div className="w-[90%] md:w-[45%] flex flex-col justify-start gap-[30px]">
        <CardModal
          key={title[1]}
          title1={title[1]}
          content1={
            <ul className="flex justify-around p-6 w-full text-base sm:text-sm">
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

PortfolioCard.propTypes = {
  description: PropTypes.string.isRequired,
  langages: PropTypes.array.isRequired,
};

export default PortfolioCard;

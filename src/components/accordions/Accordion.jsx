import { useState, useEffect } from "react";
import PropTypes from 'prop-types';

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    let timeoutId;
    // Vérifier si l'accordéon est actuellement fermé
    if (!isActive) {
      timeoutId = setTimeout(() => {
        setIsActive(true);
      }, 1000);
    }
    // Nettoyer le timeout lorsqu'un nouveau rendu se produit ou lorsque le composant est démonté
    return () => {
      clearTimeout(timeoutId);
    };
  }, [isActive]);

  return (
    <div className="accordion-item">
      <div className="accordion-title z-2 h-[52px] flex items-center justify-between bg-font2-color rounded-[10px] border-l-[1px] border-[#FFD700] text-bg-color cursor-pointer text-[1.5em] font-bold tracking-[0.35em] p-[10px] shadow-[10px_-2px_5px_font-color]" onClick={handleClick}>
        <div className="dropdownTitle text-gray-600 text-base sm:text-sm">{title}</div>
        <div className="arrow w-[25px] h-[25px] rounded-full transition-transform duration-200 ease-in-out">
          {" "}
          
        </div>
      </div>
      <div className={isActive ? "accordion-content-active block z-2 bg-[#e3e3e3] rounded-b-[10px] border-l-[1px] border-b-[1px] border-[#FFD700] text-bg-color font-main text-[22px] font-bold leading-[25px] p-[20px_20px_5px_20px] relative top-[-10px] shadow-[10px_5px_5px_font-color]" : "accordion-content"}>
        <ul className="flex justify-around p-[10px_0] sm:py-[0px_0px_5px_0px]">
          {content}
        </ul>
      </div>
    </div>
  );
};

Accordion.propTypes = {
  title: PropTypes.object, 
  content: PropTypes.object,
};

export default Accordion;

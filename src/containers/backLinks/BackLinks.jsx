import TooltipLink from '../../components/tooltipLink/TooltipLink';
import { dataBacklink } from '../../datas/data';

const BackLinks = () => {
  return (
    <ul className="backlinks flex gap-8 bg-font2-color text-xl p-1 sm:p-2 rounded-xl mb-20">
      {dataBacklink.map((item) => {
        // Ensure each item has the required properties
        const { id, link, text } = item;
        if (!id || !link || !text) {
          console.error('Missing properties in dataBacklink item:', item);
          return null; // Skip rendering if properties are missing
        }

        return (
          <li key={id}>
            <TooltipLink
              id={`tooltiptext-${id}`}
              className="text-bg-color text-base font-font-secondary hover:text-jaune-dor group"
              link={link}
            >
              {text}
            </TooltipLink>
          </li>
        );
      })}
    </ul>
  );
};

export default BackLinks;
























//import { Tooltip as ReactTooltip } from "react-tooltip";
/*
import TooltipLink from '../../components/linkBacklink/TooltipLink';
import { dataBacklink } from '../../datas/data';

const BackLinks = () => {

  console.log('dataBacklink:', dataBacklink);

  return (
    <ul className="backlinks flex gap-8 bg-font2-color text-xl p-1 sm:p-2 rounded-xl mb-20">
      {dataBacklink.map(({ id, link, text }) => (
        <li key={id}>
          <TooltipLink
            tooltipId={`tooltiptext-${id}`}
            className="text-bg-color text-base font-font-secondary hover:text-jaune-dor group"
            href={link}
          >
            {text}
          </TooltipLink>
        </li>
      ))}
    </ul>
  );
};

export default BackLinks;
*/

/*

<ul className="backlinks flex gap-8 bg-font2-color text-xl p-1 sm:p-2 rounded-xl mb-20">
        <li>
          <a
            data-tooltip-id="tooltiptext-1"
            className=" text-bg-color text-base font-font-secondary hover:text-jaune-dor group" href="https://validator.w3.org/#validate_by_uri" target="_blank" rel="noopener">
            Validateur W3C
          </a>
        </li>
        <li>
          <a
            data-tooltip-id="tooltiptext-2"
            href="https://developer.mozilla.org/fr/" target="_blank" rel="noopener"
            className=" text-bg-color text-base font-font-secondary hover:text-jaune-dor" >
            MDN Doc
          </a>
        </li>
        <li>
          <a
            data-tooltip-id="tooltiptext-3"
            className="tooltip text-bg-color text-base font-font-secondary hover:text-jaune-dor group" href="https://fr.react.dev/" target="_blank" rel="noopener">
            React
          </a>
        </li>
        <li>
          <a
            data-tooltip-id="tooltiptext-4"
            className="tooltip text-bg-color text-base font-font-secondary hover:text-jaune-dor group" href="https://www.google.com/" target="_blank" rel="noopener">
            Google
            <em className="tooltiptext invisible group-hover:visible absolute bg-black text-white text-xs rounded py-1 px-2 mt-2 -left-1/2 transform translate-x-1/2">Moteur de recherche</em>
          </a>
        </li>
      </ul>
<ReactTooltip
        id="tooltiptext-1"
        place="bottom"
        content="Contrôler votre site"
      />
      <ReactTooltip
        id="tooltiptext-2"
        place="bottom"
        content="Documentation Mozilla"
      />
      <ReactTooltip
        id="tooltiptext-3"
        place="bottom"
        content="Documentation React"
      />
      <ReactTooltip
        id="tooltiptext-4"
        place="bottom"
        content="Moteur de recherche"
      />
*/
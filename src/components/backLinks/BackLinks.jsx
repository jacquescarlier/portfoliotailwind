import { Tooltip as ReactTooltip } from "react-tooltip";


const BackLinks = () => {

  return (
    <>
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

    </>
  )
}

export default BackLinks




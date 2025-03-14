
import PropTypes from 'prop-types';
import { Tooltip as ReactTooltip } from 'react-tooltip';

export default function TooltipLink({
  id,
  className,
  link,
  target = '_blank', // Default value for target
  rel = 'noopener noreferrer', // Default value for rel
  children
}) {
  // Debugging: Log the props to the console
  //console.log('TooltipLink props:', { id, className, link, target, rel, children });
  return (
    <>
      <a
        data-tooltip-id={id}
        className={className}
        href={link}
        target={target}
        rel={rel}
      >
        {children}
      </a>
      <ReactTooltip id={id} place="bottom" effect="solid">
        {children} {/* Display the same content as the link text in the tooltip */}
      </ReactTooltip>
    </>
  );
}

TooltipLink.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  target: PropTypes.string,
  rel: PropTypes.string,
  children: PropTypes.node.isRequired,
};

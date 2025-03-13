import PropTypes from 'prop-types';

const defaultClasses = {
    cardStyle1: ' w-full mx-auto mt-8 bg-gray-200 border-l-[1px] border-b-[1px] border-[#FFD700] rounded-b-md rounded-t-[10px] rounded-t-md',
    titleStyle1: "flex justify-center items-center  p-4  bg-font2-color rounded-t-[10px] text-bg-color cursor-pointer text-[1em] font-bold tracking-[0.35em] p-[10px] rounded-t-md",
    contentStyle1: "flex justify-around  w-full text-base sm:text-sm ",
};

export default function CardModal({ classes = {}, title1, content1 }) {
    const mergedClasses = { ...defaultClasses, ...classes };

    return (
        <div className={mergedClasses.cardStyle1}>
            <div className={mergedClasses.titleStyle1}>{title1}</div>
            <div className={mergedClasses.contentStyle1}>{content1}</div>
        </div>
    );
}

CardModal.propTypes = {
    classes: PropTypes.shape({
        titleStyle1: PropTypes.string,
        contentStyle1: PropTypes.string,
        cardStyle1: PropTypes.string
    }),
    title1: PropTypes.string,
    content1: PropTypes.node
};
// PropTypes.node accept any renderable content


import { useRef } from "react";
import { Modal } from "react-responsive-modal";
import { useState } from "react";
import Carousel from "../../components/carousel/Carousel.jsx";
import "react-responsive-modal/styles.css";
import PortfolioDetail from "../../components/portfolioDetail/PortfolioDetail.jsx";
import PortfolioDropdown from "../../components/portfolioDropdown/PortfolioDropdown.jsx";
import "./custom-animation.css";
import PropTypes from "prop-types";
import 'react-responsive-modal/styles.css';

function CardModal({ projects }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const modalRef = useRef(null);

  const openModal = (id) => {
    setSelectedItem(projects.find((project) => project.id === id));
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="justify-center w-screen h-full px-10 py-0">
      <h2 className="text-center lg:text-4xl md:text-xl sm:text-[12px]  text-font1 pb-5 pt-2 font-font-secondary tracking-[0.5em]  hover:animate-textRotation hover:text-black">
        Projects
      </h2>
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 rounded-[25px] box-border p-[20px_1em_50px_1em] m-0 mb-[50px]"
        id="project"
      >
        {projects.map((project) => (
          <div
            key={project.id}
            className="w-full h-[340px] relative rounded-[20px] cursor-pointer"
            onClick={() => openModal(project.id)}
            aria-label={project.alt}
          >
            <img
              src={project.cover}
              alt={project.alt}
              className="rounded-[20px] object-cover object-top w-full h-full opacity-[0.9] transition-transform duration-500 ease-in-out transform hover:scale-115"
            />
            <h3 className="absolute bottom-[5%] left-[3%] rounded-[0.5em] p-[0.2em_0.7em] bg-font2-color text-title-color font-[font-secondary] text-[1.3em] font-bold italic flex items-end">
              {project.title}
            </h3>
          </div>
        ))}
      </div>


      <Modal
        ref={modalRef}
        open={modalOpen}
        onClose={closeModal}
        closeIcon={" "}
        initialFocusRef={modalRef}
        center
        classNames={{
          overlayAnimationIn: "customEnterOverlayAnimation",
          overlayAnimationOut: "customLeaveOverlayAnimation",
          modalAnimationIn: "customEnterModalAnimation",
          modalAnimationOut: "customLeaveModalAnimation",
          modal: "w-screen h-full lg:w-[80%] md:w-[80%] sm:w-|60%]",
        }}
        animationDuration={800}
      >
        {selectedItem && (
          <div className=" bg-[#dcdcdc] p-1 rounded-lg">
            <Carousel pictures={selectedItem.pictures} title={selectedItem.title} />
            <PortfolioDetail
              project={selectedItem.project}
              title={selectedItem.title}
              tags={selectedItem.tags}
            />
            <PortfolioDropdown
              description={selectedItem.description}
              langages={selectedItem.logos}
            />
            <button className="closeModal inline-block px-6 py-3 text-1.5em font-bold rounded-[20px] border-2 border-[#614b3a] bg-font-color text-black shadow-lg shadow-amber-400/60" onClick={closeModal}>
              Fermer
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
}

CardModal.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      cover: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      pictures: PropTypes.array.isRequired,
      description: PropTypes.string.isRequired,
      logos: PropTypes.array.isRequired,
    })
  ).isRequired,
}

export default CardModal;

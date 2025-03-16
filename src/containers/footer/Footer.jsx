import { Modal } from 'react-responsive-modal';
import Curiculum from "../curiculumModal/CvPdf";
import { useState, useRef } from "react";
import BackLinks from "../../containers/backLinks/BackLinks";

function Footer() {
  const [modalOpen, setModalOpen] = useState(false);
  const modalRef = useRef(null);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <footer className="w-full h-[209px] mt-8 py-4 flex flex-col items-center gap-6 text-font2-color">
        <ul className="socialMediaLinks flex gap-[57px] list-none">
          <li>
            <a href="https://github.com/jacquescarlier/" target="_blank" rel="noopener" className="p-0 bg-transparent border-none">
              <img
                src="./images/github.webp"
                alt="Github"
                className="h-[50px] w-[50px]"
              />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/jacques-carlier-9a39121bb?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener" className="p-0 bg-transparent border-none">
              <img
                src="./images/linkedin.png"
                alt="Linkedin"
                className="h-[50px] w-[50px]"
              />
            </a>
          </li>
          <li>
            <a href="https://monsite-eta.vercel.app/" target="_blank" rel="noopener" className="p-0 bg-transparent border-none">
              <img
                src="./images/pinguoin.png"
                alt="vers site de liens"
                className="h-[50px] w-[50px]"
              />
            </a>
          </li>
          <li>
            <a href="#" onClick={() => openModal()} title="Curriculum Vitae" className="p-0 bg-transparent border-none">
              <img
                src="./images/logoCV.webp"
                alt="Github"
                className="h-[50px] w-[50px]"
              />
            </a>
          </li>
        </ul>
        <div className="text-center text-[1.3em] my-[1em_0_1.5em_0] ">
          <a href="#" className="text-decoration-none bg-font1 text-black font-extrabold border-jaune-dor border-[5px] rounded-[30px] py-1 px-3">
            Back to Top
          </a>
        </div>
        <BackLinks />
      </footer>
      <Modal
        ref={modalRef}
        open={modalOpen}
        onClose={closeModal}
        initialFocusRef={modalRef}
        center
        classNames={{
          overlayAnimationIn: 'customEnterOverlayAnimation',
          overlayAnimationOut: 'customLeaveOverlayAnimation',
          modalAnimationIn: 'customEnterModalAnimation',
          modalAnimationOut: 'customLeaveModalAnimation',
          modalContainer: "w-screen h-full p-0 m-0 mx-auto lg:w-[90%] md:w-[95%] sm:w-|60%]",
        }}
        animationDuration={1000}
      >
        <div className="w-full h-full flex items-center justify-center">
          <Curiculum />
        </div>
      </Modal>
    </>
  );
}
export default Footer;

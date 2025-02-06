
import { aboutData } from "../../datas/data"

const About = () => {
  return (
    <>
      <h2 className=" text-center text-4xl text-font1 pb-5 pt-2 font-font-secondary tracking-[0.5em] " id="about">
        About
      </h2>
      <p className="aboutSection w-full text-xl bg-transparent text-font1 p-[15px_1em_0.5em_1em] mx-auto -my-[10px] mb-[60px] rounded-[25px] font-font-main text-[1.5em] font-semibold hover:text-bg-color hover:border-2 hover:border-neutral-color hover:shadow-[5px_5px_5px_var(--neutral-color">{aboutData[0].content}</p>
    </>

  );
};

export default About;



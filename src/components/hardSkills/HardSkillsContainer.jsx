import LangageComponent from "../../components/langagesComponents/LangagesComponent"
import { imgLangages } from "../../datas/data"

export default function HardSkillsContainer() {
  return (
    <div className="flex justify-center w-screen h-1/5 px-10 py-0">
      <div className="w-screen px-10 xl:w-[45%] lg:w-[55%] md:w-[60%] sm:w-[60%]">
        <div className="projectTitle flex-wrap pb-4 animate-fadein">
          <h2 className="text-center lg:text-4xl md:text-xl sm:text-[12px] text-font1 pb-5 pt-5 px-0 font-font-secondary tracking-[0.5em] animate-textRotation hover:animate-textRotation hover:text-black">
            HARD-SKILLS
          </h2>
          <div className="flex border-5 border-amber-400 rounded-xl pt-4">
            <LangageComponent imgLangages={imgLangages} />
          </div>
        </div>
      </div>
    </div>
  )
}

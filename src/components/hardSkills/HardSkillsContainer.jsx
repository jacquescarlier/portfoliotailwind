import LangageComponent from "../../components/langagesComponents/LangagesComponent"
import { imgLangages } from "../../datas/data"

export default function HardSkillsContainer() {
  return (
    <div className="flex justify-center w-full h-1/5 px-5 py-0 ">
      <div className="w-[50%]">
        <div className="projectTitle flex-wrap pb-4 animate-fadein">
          <h2 className="text-center lg:text-4xl md:text-xl sm:text-[12px] text-font1 pb-5 pt-5 px-0 font-font-secondary tracking-[0.5em] animate-textRotation">
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

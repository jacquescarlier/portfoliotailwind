import LangageComponent from "../../components/langagesComponents/LangagesComponent"
import { imgLangages } from "../../datas/data"

export default function HardSkillsContainer() {
  return (
    <div className="flex justify-center w-full h-1/5 px-5 py-0 ">
      <div className="w-[50%]">
        <div className="projectTitle flex-wrap pb-4">
          <h2 className="text-center text-4xl text-font1 pb-5 pt-2 font-font-secondary tracking-[0.5em] animate-pulse">
            <span className="letter01">H</span>
            <span className="letter02">A</span>
            <span className="letter03">R</span>
            <span className="letter04">D</span>
            <span className="letter05">-</span>
            <span className="letter06">S</span>
            <span className="letter07">K</span>
            <span className="letter08">I</span>
            <span className="letter09">L</span>
            <span className="letter10">L</span>
            <span className="letter11">S</span>
          </h2>
          <div className="flex border-5 border-amber-400 rounded-xl pt-4">
            <LangageComponent imgLangages={imgLangages} />
          </div>
        </div>
      </div>
    </div>

  )
}
//90 % + diminution police et icone
//975px 50%
//1375px  35%
//1600px 30%
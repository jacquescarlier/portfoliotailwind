/*function Header() {
    return (
        <header className="relative h-[68px] flex justify-between items-center px-4 pb-9 rounded-[0.7em]  pt-4 ">
            <span className=" font-font-secondary italic lg:text-xl md:text-[20px] sm:text-[8px]">CopyrightJCR</span>

            <nav className="flex list-none py-5">
                <ul className="flex mr-5 text-font1">
                    <li className="mr-5 transition-transform duration-300 hover:scale-[1.5] sm:hover:scale-[1.3]">
                        <a href="#about" className="text-font-font-main lg:text-3xl md:text-xl sm:text-[12px]  font-font-main font-extrabold leading-[34px] text-right no-underline uppercase relative after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:transform after:translate-x-[-50%] after:scale-x-0 after:w-full after:h-[1px] hover:text-bg-color underlineLink">
                            About
                        </a>
                    </li>
                    <li className="transition-transform duration-300 hover:scale-[1.5] sm:hover:scale-[1.3]">
                        <a href="#contact" className="text-font-font-main lg:text-3xl md:text-xl sm:text-[12px]  font-font-main font-extrabold leading-[34px] text-right no-underline uppercase relative after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:transform after:translate-x-[-50%] after:scale-x-0 after:w-full after:h-[1px] hover:text-bg-color">
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </header>

    );
}
export default Header;
*/

function Header() {
    return (
        <header className="relative h-[68px] flex justify-between items-center px-4 pb-9 rounded-[0.7em] pt-4">
            <span className="font-font-secondary italic lg:text-xl md:text-[20px] sm:text-[8px]">CopyrightJCR</span>

            <nav className="flex list-none py-5">
                <ul className="flex mr-5 text-font1">
                    <li className="mr-5 transition-transform duration-300 hover:scale-[1.2] sm:hover:scale-[1.2]">
                        <a
                            href="#about"
                            className="text-font-font-main lg:text-3xl md:text-xl sm:text-[12px] font-font-main font-extrabold leading-[34px] text-right no-underline uppercase relative after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:transform after:translate-x-[-50%] after:scale-x-0 after:w-full after:h-[2px] after:bg-black after:transition-transform after:duration-300 hover:text-bg-color hover:after:scale-x-100 underlineLink"
                        >
                            About
                        </a>
                    </li>
                    <li className="transition-transform duration-300 hover:scale-[1.2] sm:hover:scale-[1.2]">
                        <a
                            href="#contact"
                            className="text-font-font-main lg:text-3xl md:text-xl sm:text-[12px] font-font-main font-extrabold leading-[34px] text-right no-underline uppercase relative after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:transform after:translate-x-[-50%] after:scale-x-0 after:w-full after:h-[2px] after:bg-black after:transition-transform after:duration-300 hover:text-bg-color hover:after:scale-x-100"
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;

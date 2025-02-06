function Header() {
    return (
        <header className="relative h-[68px] flex justify-between items-center px-4 pb-9 rounded-[0.7em]  pt-4 ">
            <span className=" font-font-secondary text-xl italic">Copyright JCR</span>

            <nav className="flex gap-[57px] list-none py-5 sm:gap-4 sm:py-2">
                <ul className="flex gap-14 sm:gap-4 mr-5 text-font1">
                    <li className="transition-transform duration-300 hover:scale-[1.5] sm:hover:scale-[1.3]">
                        <a href="#about" className="text-font-font-main text-[1.5em] font-font-main font-extrabold leading-[34px] text-right no-underline uppercase relative after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:transform after:translate-x-[-50%] after:scale-x-0 after:w-full after:h-[1px] hover:text-bg-color">
                            About
                        </a>
                    </li>
                    <li className="transition-transform duration-300 hover:scale-[1.5] sm:hover:scale-[1.3]">
                        <a href="#contact" className="text-font-font-main text-[1.5em] font-font-main font-extrabold leading-[34px] text-right no-underline uppercase relative after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:transform after:translate-x-[-50%] after:scale-x-0 after:w-full after:h-[1px] hover:text-bg-color">
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </header>

    );
}
export default Header;

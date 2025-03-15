import { projects } from '../datas/data';

import Header from "../containers/header/Header";
import Banner from "../components/banner/Banner";
import picture from "../pictures/banner_codeurL.webp";
import smallPicture from "../pictures/banner_codeur-mobile.webp"
import HardSkillsContainer from "../containers/hardSkills/HardSkillsContainer";
//import imageBg from "/bot.jpg"

import { useEffect } from 'react';
import CardHome from "../containers/cardHome/CardHome";
import About from '../containers/about/About';
import Email from '../containers/contactEmail/Email';
import Footer from '../containers/footer/Footer';

const Home = () => {
  const imageBg = '/bot.jpg';

  // Add parallax effect on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const parallaxElement = document.querySelector('.parallax');
      if (parallaxElement) {
        parallaxElement.style.backgroundPosition = `center ${scrollY * 0.2}px`; // Adjust the 0.5 to change the speed of the parallax effect
      }
    };
    window.addEventListener('scroll', handleScroll);
    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="w-screen">
      <div
        className=" bg-[#BFC2C9] flex-col justify-center px-0 mx-auto w-screen h-full bg-cover bg-repeat bg-fixed"
        style={{ backgroundImage: `url(${imageBg})` }}
      >
        <Header />
        <Banner
          image={picture}
          smallImage={smallPicture}
          alt="photo écran de code"
          title1="Welcome ! Hi, I'm Jacques, web integrator."
        />
        <HardSkillsContainer />
        <CardHome projects={projects} />
        <About />
        <Email />
        <Footer />
      </div>
    </div>
  );
};

export default Home;


import React from "react";
import HeroIMG1 from "../assets/hero-img-1.png";
import HeroIMG2 from "../assets/hero-img-2.png";
import HeroIMG3 from "../assets/hero-img-3.png";

const Hero = () => {
    return (
        <section id="hero" className="max-w-screen-xl flex flex-col-reverse gap-12 items-center mx-auto py-16 px-6 md:flex-row">
            <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl font-bold text-gradient mb-3 md:text-4xl md:leading-[3rem] lg:text-5xl lg:leading-[4rem]">Building Dreams, Crafting Homes</h2>

                <p className="text-m leading-6 text-darkBlue mb-6 md:w-4/5">
                    Turning dreams into homes. Exploring our exceptional craftsmanship and envision your perfect space.
                </p>

                <button className="primary-btn">Explore Our Project</button>
            </div>

            <div className="flex gap-2 justify-center md:gap-3">
                <img className="hero-img" src={HeroIMG1} alt="img one" />
                <img className="mt-[5%] hero-img" src={HeroIMG2} alt="img two" />
                <img className="hero-img" src={HeroIMG3} alt="img three" />
            </div>
            
        </section>
    );
};

export default Hero;
import React from "react";

import GalleryImg1 from "../assets/gallery-img1.jpeg";
import GalleryImg2 from "../assets/gallery-img2.jpeg";
import GalleryImg3 from "../assets/gallery-img3.jpeg";
import GalleryImg4 from "../assets/gallery-img4.jpeg";
import GalleryImg5 from "../assets/gallery-img5.jpeg";
import GalleryImg6 from "../assets/gallery-img6.jpeg";

const OurWork = () => {
    return (
        <section id="our-work" className="max-w-[1200px] pt-8 mx-auto">
            <h2 className="text-2xl font-semibold text-darkBlue text-center mb-16">Our Work</h2>

            <div className="grid grid-cols-1 grid-rows-6 gap-2 md:grid-cols-4 md:grid-rows-2">
                <div className="md:col-span-2">
                    <img src={GalleryImg1} alt="" className="gallery-img"/>
                </div>
                <div>
                    <img src={GalleryImg2} alt="" className="gallery-img"/>
                </div>
                <div className="">
                    <img src={GalleryImg3} alt="" className="gallery-img"/>
                </div>
                <div className="">
                    <img src={GalleryImg4} alt="" className="gallery-img"/>
                </div>
                <div className="">
                    <img src={GalleryImg5} alt="" className="gallery-img"/>
                </div>
                <div className="md:col-span-2">
                    <img src={GalleryImg6} alt="" className="gallery-img"/>
                </div>
            </div>
        </section>
    )
}

export default OurWork;
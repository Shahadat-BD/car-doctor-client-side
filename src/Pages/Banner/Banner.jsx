import React from "react";
import banner_1 from "../../assets/images/banner/5.jpg";
import banner_2 from "../../assets/images/banner/1.jpg";
import banner_3 from "../../assets/images/banner/2.jpg";
const Banner = () => {
  return (
    <div className="my-10">
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full ">
          <img
            src={banner_1}
            className="w-full lg:h-[650px] md:h-[600px] h-[300px] rounded-md"
          />
          <div className="absolute text-white bg-gradient-to-l from-[#49484800] to-[#101010] h-full ">
            <div className="lg:mt-32 lg:ml-10">
            <h1 className="lg:text-6xl md:text-4xl text-lg font-bold">
              Affordable <br /> Price For Car <br /> Servicing
            </h1>
            <p className="w-2/3 my-6">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <button className="bg-[#FF3811] text-white px-5 py-2 rounded-sm mr-4 font-semibold">Discover More</button>
            <button className="border border-gray-300 text-white px-5 py-2 rounded-sm font-semibold">Latest Product</button>
            </div>
          </div>
          <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a
              href="#slide3"
              className="bg-[#49546684] w-16 h-16 rounded-full flex items-center justify-center text-white"
            >
              ❮
            </a>
            <a
              href="#slide2"
              className="bg-[#FF3811] w-16 h-16 rounded-full flex items-center justify-center text-white"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full ">
          <img
            src={banner_2}
            className="w-full lg:h-[650px] md:h-[600px] h-[300px] rounded-md"
          />
          <div className="absolute bg-gradient-to-l from-[#49484800] to-[#101010] h-full text-white">
          <div className="lg:mt-32 lg:ml-10 lg:text-left text-center">
            <h1 className="lg:text-6xl md:text-4xl text-lg font-bold lg:w-[40%] w-full">
              Affordable Price For Car Servicing
            </h1>
            <p className="lg:w-2/3 w-full lg:my-6 my-3">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <button className="bg-[#FF3811] text-white px-5 py-2 rounded-sm mr-4 font-semibold">Discover More</button>
            <button className="border border-gray-300 text-white px-5 py-2 rounded-sm font-semibold">Latest Product</button>
            </div>
          </div>
          <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a
              href="#slide1"
              className="bg-[#49546684] w-16 h-16 rounded-full flex items-center justify-center text-white"
            >
              ❮
            </a>
            <a
              href="#slide3"
              className="bg-[#FF3811] w-16 h-16 rounded-full flex items-center justify-center text-white"
            >
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full ">
          <img
            src={banner_3}
            className="w-full lg:h-[650px] md:h-[600px] h-[300px] rounded-md"
          />
          <div className="absolute bg-gradient-to-l from-[#49484800] to-[#101010] h-full text-white">
          <div className="lg:mt-32 lg:ml-10">
            <h1 className="lg:text-6xl md:text-4xl text-lg font-bold">
              Affordable <br /> Price For Car <br /> Servicing
            </h1>
            <p className="w-2/3 my-6">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
            <button className="bg-[#FF3811] text-white px-5 py-2 rounded-sm mr-4 font-semibold">Discover More</button>
            <button className="border border-gray-300 text-white px-5 py-2 rounded-sm font-semibold">Latest Product</button>
            </div>
          </div>
          <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a
              href="#slide2"
              className="bg-[#49546684] w-16 h-16 rounded-full flex items-center justify-center text-white"
            >
              ❮
            </a>
            <a
              href="#slide1"
              className="bg-[#FF3811] w-16 h-16 rounded-full flex items-center justify-center text-white"
            >
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

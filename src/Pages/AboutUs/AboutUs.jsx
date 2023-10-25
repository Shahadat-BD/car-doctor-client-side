import React from "react";
import about_1 from "../../assets/images/about_us/person.jpg"
import about_2 from "../../assets/images/about_us/parts.jpg"
const AboutUs = () => {
  return (
    <div className="my-20 ">
      <div className="flex lg:flex-row flex-col justify-around gap-5">
        <div className="relative">
        <img className="w-[400px] h-[350px] rounded-lg" src={about_1} alt="" srcset="" />
        <img className="w-[240px] h-[212px]  border-8 border-white rounded-lg absolute top-1/2 left-1/2" src={about_2} alt="" srcset="" />
        </div>
        <div className="w-1/2">
          <h3 className="text-[#FF3811] font-semibold text-md">About Us</h3>
          <h5 className="text-4xl lg:w-1/2 font-bold my-3">We are qualified & of experience in this field</h5>
          <p className="text-[#737373] font-normal lg:w-4/5">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{" "}
          </p>
          <p className="text-[#737373] font-normal lg:w-4/5 my-3">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{" "}
          </p>
          <button className="bg-[#FF3811] text-white px-4 py-2 rounded-md font-semibold">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

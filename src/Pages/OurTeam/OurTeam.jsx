import React from "react";
import team_1 from "../../assets/images/team/1.jpg";
import team_2 from "../../assets/images/banner/2.jpg";
import team_3 from "../../assets/images/team/3.jpg";

import social_1 from "../../assets/icons/social/facebook.png";
import social_2 from "../../assets/icons/social/linkdin.png";
import social_3 from "../../assets/icons/social/twiter.png";
import social_4 from "../../assets/icons/social/instragram.png";
const OurTeam = () => {
  return (
    <div className="my-20">
      <div className="text-center mb-10">
        <h3 className="text-[#FF3811] font-bold">Team</h3>
        <h1 className="text-4xl font-bold my-3">Meat Our Team</h1>
        <p className="w-[60%] m-auto">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        <div className="border border-gray-300 rounded-md text-center">
          <img
            className="w-[93%]  m-auto my-3 h-[250px] rounded-lg"
            src={team_1}
            alt=""
            srcset=""
          />
          <h2 className="text-xl font-bold mt-3">David Maccalam</h2>
          <h3 className="text-gray-500 font-semibold">Car Engine Expert</h3>
          <div className="flex justify-center my-3">
            <img className="h-[38px] mr-3" src={social_1} alt="" srcset="" />
            <img className="h-[38px] mr-3" src={social_2} alt="" srcset="" />
            <img className="h-[38px] mr-3" src={social_3} alt="" srcset="" />
            <img
              className="h-[38px]  bg-red-500 p-2 rounded-full"
              src={social_4}
              alt=""
              srcset=""
            />
          </div>
        </div>
        <div className="border border-gray-300 rounded-md text-center">
          <img
            className="w-[93%]  m-auto my-3 h-[250px] rounded-lg"
            src={team_2}
            alt=""
            srcset=""
          />
          <h2 className="text-xl font-bold mt-3"> Mitchel Santer </h2>
          <h3 className="text-gray-500 font-semibold">Car Engine Expert</h3>
          <div className="flex justify-center my-3">
            <img className="h-[38px] mr-3" src={social_1} alt="" srcset="" />
            <img className="h-[38px] mr-3" src={social_2} alt="" srcset="" />
            <img className="h-[38px] mr-3" src={social_3} alt="" srcset="" />
            <img
              className="h-[38px]  bg-red-500 p-2 rounded-full"
              src={social_4}
              alt=""
              srcset=""
            />
          </div>
        </div>
        <div className="border border-gray-300 rounded-md text-center">
          <img
            className="w-[93%]  m-auto my-3 h-[250px] rounded-lg"
            src={team_3}
            alt=""
            srcset=""
          />
          <h2 className="text-xl font-bold mt-3">Jhack Willieamson</h2>
          <h3 className="text-gray-500 font-semibold">Car Engine Expert</h3>
          <div className="flex justify-center my-3">
            <img className="h-[38px] mr-3" src={social_1} alt="" srcset="" />
            <img className="h-[38px] mr-3" src={social_2} alt="" srcset="" />
            <img className="h-[38px] mr-3" src={social_3} alt="" srcset="" />
            <img
              className="h-[38px]  bg-red-500 p-2 rounded-full"
              src={social_4}
              alt=""
              srcset=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;

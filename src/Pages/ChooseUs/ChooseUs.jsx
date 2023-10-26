import React from "react";
import choose_1 from "../../assets/icons/chooseUs/group.svg";
import choose_2 from "../../assets/icons/chooseUs/Group 38729.svg";
import choose_3 from "../../assets/icons/chooseUs/person.svg";
import choose_4 from "../../assets/icons/chooseUs/Wrench.svg";
import choose_5 from "../../assets/icons/chooseUs/check.svg";
import choose_6 from "../../assets/icons/chooseUs/deliveryt.svg";
const ChooseUs = () => {
  return (
    <div className="my-20">
      <div className="text-center mb-10">
        <h3 className="text-[#FF3811] font-bold">Core Features</h3>
        <h1 className="text-4xl font-bold my-3">Why Choose Us</h1>
        <p className="w-[60%] m-auto">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
      </div>

      <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-1 gap-5">
         <div className="border border-gray-300 rounded-md p-5">
             <img className="w-1/2 h-[70px] m-auto" src={choose_1} alt="" srcset="" />
             <h3 className="text-md font-bold mt-3 text-center">Expert Team</h3>
         </div>
         <div className="border border-gray-300 rounded-md p-5">
             <img className="w-1/2 h-[70px] m-auto bg-[#FF3811] p-3 rounded-md" src={choose_2} alt="" srcset="" />
             <h3 className="text-md font-bold mt-3 text-center">Timely Delivery</h3>
         </div>
         <div className="border border-gray-300 rounded-md p-5">
             <img className="w-1/2 h-[70px] m-auto" src={choose_3} alt="" srcset="" />
             <h3 className="text-md font-bold mt-3 text-center">24/7 Support</h3>
         </div>
         <div className="border border-gray-300 rounded-md p-5">
             <img className="w-1/2 h-[70px] m-auto" src={choose_4} alt="" srcset="" />
             <h3 className="text-md font-bold mt-3 text-center">Best Equipment</h3>
         </div>
         <div className="border border-gray-300 rounded-md p-5">
             <img className="w-1/2 h-[70px] m-auto" src={choose_5} alt="" srcset="" />
             <h3 className="text-md font-bold mt-3 text-center">100% Guranty</h3>
         </div>
         <div className="border border-gray-300 rounded-md p-5">
             <img className="w-1/2 h-[70px] m-auto" src={choose_6} alt="" srcset="" />
             <h3 className="text-md font-bold mt-3 text-center">Timely Delivery</h3>
         </div>
      </div>

    </div>
  );
};

export default ChooseUs;

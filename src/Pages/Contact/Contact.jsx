import React from "react";
import contact_img_1 from "../../assets/images/contactLogo/calendar.png";
import contact_img_2 from "../../assets/images/contactLogo/phone.png";
import contact_img_3 from "../../assets/images/contactLogo/location.png";
const Contact = () => {
  return (
    <div className="mb-20">
      <div className="bg-[#151515] rounded-md pl-16 py-16 text-white">
        <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1">
          <div className="flex items-center gap-3">
            <img className="" src={contact_img_1} alt="" srcset="" />
            <div>
              <h3 className="text-gray-300">We are open monday-friday</h3>
              <p className="text-xl font-medium">7:00 am - 9:00 pm</p>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3">
              <img src={contact_img_2} alt="" srcset="" />
              <div>
                <h3 className="text-gray-300 font-medium">
                  Have A Question ?{" "}
                </h3>
                <p className="text-xl font-medium">+88038834343</p>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3">
              <img src={contact_img_3} alt="" srcset="" />
              <div>
                <h3 className="text-gray-300">Need a repair? our address</h3>
                <p className="text-xl font-medium">Liza Street, New York</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

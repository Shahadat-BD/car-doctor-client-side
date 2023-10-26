import React from 'react';
import logo from "../../assets/icons/social/logo.png";
import icon_1 from "../../assets/icons/social/gogle.png";
import icon_2 from "../../assets/icons/social/twitter.png";
import icon_3 from "../../assets/icons/social/instragram.png";
import icon_4 from "../../assets/icons/social/indin.png";
const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-[#151515]">
  <aside>
    <img src={logo} alt="" srcset="" />
    <p className='text-white font-bold '>Car Doctor</p>
    <p className='text-[#E8E8E8] mt-2 w-full'>Edwin Diaz is a software and web <br />technologies engineer, a life coach <br />  trainer who is also a serial .</p>
   <div className='flex gap-2'>
   <img className='w-8 h-8 rounded-full bg-[#2c2c2c] p-2' src={icon_1} alt="" srcset="" />
    <img className='w-8 h-8 rounded-full bg-[#2c2c2c] p-2' src={icon_2} alt="" srcset="" />
    <img className='w-8 h-8 rounded-full bg-[#2c2c2c] p-2' src={icon_3} alt="" srcset="" />
    <img className='w-8 h-8 rounded-full bg-[#2c2c2c] p-2' src={icon_4} alt="" srcset="" />
   </div>
  </aside> 
  
  <nav>
    <header className="text-lg text-white font-bold">Services</header> 
    <a className="link link-hover text-[#E8E8E8]">Branding</a> 
    <a className="link link-hover text-[#E8E8E8]">Design</a> 
    <a className="link link-hover text-[#E8E8E8]">Marketing</a> 
    <a className="link link-hover text-[#E8E8E8]">Advertisement</a>
  </nav> 

  <nav>
    <header className="text-lg text-white font-bold">Company</header> 
    <a className="link link-hover text-[#E8E8E8]">About us</a> 
    <a className="link link-hover text-[#E8E8E8]">Contact</a> 
    <a className="link link-hover text-[#E8E8E8]">Jobs</a> 
    <a className="link link-hover text-[#E8E8E8]">Press kit</a>
  </nav> 

  <nav>
    <header className="text-lg text-white">Legal</header> 
    <a className="link link-hover text-[#E8E8E8]">Terms of use</a> 
    <a className="link link-hover text-[#E8E8E8]">Privacy policy</a> 
    <a className="link link-hover text-[#E8E8E8]">Cookie policy</a>
  </nav>

</footer>
        </div>
    );
};

export default Footer;
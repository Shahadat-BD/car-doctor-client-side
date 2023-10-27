import React, { useEffect, useState } from 'react';
import {BsArrowRightShort} from "react-icons/bs";
const Services = () => {
  const [service,setServices] = useState([])
  useEffect(()=>{
    fetch("/service.json")
    .then(res => res.json())
    .then(data =>{
         setServices(data)
    })
  },[])
    return (
        <div className='my-20'>
          <div className='text-center'>
          <h3 className='text-[#FF3811] font-bold'>Services</h3>
            <h1 className='text-4xl font-bold my-3'>Our Services Area</h1>
            <p className='lg:w-[60%] w-full m-auto'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
          </div>
           
           <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-10'>
            {
              service.map(service => 

                <div className='border-2 border-gray-100 rounded-md p-4'>
                  <img className='w-full h-[220px] rounded-md' src={service.img} alt="" srcset="" />
                   <h3 className='font-bold text-xl my-3'>{service.title}</h3>
                   <div className='flex items-center'>
                     <p className='flex-1 text-[#FF3811] font-semibold text-md'>${service.price}.00</p>
                      <button className='flex bg-[#FF3811] px-3 py-1 rounded-md text-white'>Details <BsArrowRightShort className='text-2xl text-white'/></button> 
                   </div>
               </div>
                
                )
            }
               
           </div>
           <div className='text-center mt-8'>
           <button className="px-5 py-2  text-[#FF3811] border border-[#FF3811] rounded-md">More Services</button>
           </div>

        </div>
    );
};

export default Services;
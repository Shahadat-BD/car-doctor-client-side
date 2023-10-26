import React from 'react';
import {BsArrowRightShort} from "react-icons/bs";
const Services = () => {
    return (
        <div className='my-20'>
          <div className='text-center'>
          <h3 className='text-[#FF3811] font-bold'>Services</h3>
            <h1 className='text-4xl font-bold my-3'>Our Services Area</h1>
            <p className='lg:w-[60%] w-full m-auto'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
          </div>
           
           <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-10'>
               <div className='border-2 border-gray-100 rounded-md p-4'>
                  <img className='w-full h-[220px] rounded-md' src='https://i.ibb.co/7vWRLzY/1.jpg' alt="" srcset="" />
                   <h3 className='font-bold text-xl my-3'>Engine Diagnostics</h3>
                   <div className='flex items-center'>
                     <p className='flex-1 text-[#FF3811] font-semibold text-md'>Price : $20.00</p>
                     <BsArrowRightShort className='text-2xl text-[#FF3811]'/>
                   </div>
               </div>
               <div className='border-2 border-gray-100 rounded-md p-4'>
                  <img className='w-full h-[220px] rounded-md' src='https://i.ibb.co/xzg0Qn9/2.jpg' alt="" srcset="" />
                   <h3 className='font-bold text-xl my-3'>Electric System</h3>
                   <div className='flex items-center'>
                     <p className='flex-1 text-[#FF3811] font-semibold text-md'>Price : $30.00</p>
                     <BsArrowRightShort className='text-2xl text-[#FF3811]'/>
                   </div>
               </div>
               <div className='border-2 border-gray-100 rounded-md p-4'>
                  <img className='w-full h-[220px] rounded-md' src='https://i.ibb.co/qn3Qztr/6.jpg' alt="" srcset="" />
                   <h3 className='font-bold text-xl my-3'>Auto Car Repair</h3>
                   <div className='flex items-center'>
                     <p className='flex-1 text-[#FF3811] font-semibold text-md'>Price : $25.00</p>
                     <BsArrowRightShort className='text-2xl text-[#FF3811]'/>
                   </div>
               </div>

               <div className='border-2 border-gray-100 rounded-md p-4'>
                  <img className='w-full h-[220px] rounded-md' src='https://i.ibb.co/C16YzFt/3.jpg' alt="" srcset="" />
                   <h3 className='font-bold text-xl my-3'>Electronic System</h3>
                   <div className='flex items-center'>
                     <p className='flex-1 text-[#FF3811] font-semibold text-md'>Price : $32.00</p>
                     <BsArrowRightShort className='text-2xl text-[#FF3811]'/>
                   </div>
               </div>
               <div className='border-2 border-gray-100 rounded-md p-4'>
                  <img className='w-full h-[220px] rounded-md' src='https://i.ibb.co/JdhhxYZ/4.jpg' alt="" srcset="" />
                   <h3 className='font-bold text-xl my-3'>Engine Diagnostics</h3>
                   <div className='flex items-center'>
                     <p className='flex-1 text-[#FF3811] font-semibold text-md'>Price : $40.00</p>
                     <BsArrowRightShort className='text-2xl text-[#FF3811]'/>
                   </div>
               </div>
               <div className='border-2 border-gray-100 rounded-md p-4'>
                  <img className='w-full h-[220px] rounded-md' src='https://i.ibb.co/qn3Qztr/6.jpg' alt="" srcset="" />
                   <h3 className='font-bold text-xl my-3'>Auto Car Repair</h3>
                   <div className='flex items-center'>
                     <p className='flex-1 text-[#FF3811] font-semibold text-md'>Price : $55.00</p>
                     <BsArrowRightShort className='text-2xl text-[#FF3811]'/>
                   </div>
               </div>
           </div>
           <div className='text-center mt-8'>
           <button className="px-5 py-2  text-[#FF3811] border border-[#FF3811] rounded-md">More Services</button>
           </div>

        </div>
    );
};

export default Services;
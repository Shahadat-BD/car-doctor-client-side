import React from 'react';
import { useLoaderData , Link} from 'react-router-dom';
import {  BsArrowRightShort} from "react-icons/bs";
import details from "../../assets/icons/social/details.png";
import bannerDetails from "../../assets/images/banner/resize-4.jpg";
import logo from "../../assets/icons/social/logo.png";
const ServiceDetails = () => {
    const serviceDetails = useLoaderData()
    const {img,title,price,description,facility,_id} = serviceDetails
    return (
        <div className='lg:w-[85%] m-auto w-[95%]'>
            <div className='mt-5 mb-20 relative'>
                <img className='w-full rounded-md' src={bannerDetails} alt="" srcset="" />
                <div className='absolute rounded-md top-0 w-full h-full bg-gradient-to-l from-[#1010105f] to-[#101010b3]'>
                       <p className='flex justify-center items-center font-bold h-full text-white lg:text-4xl text-xl'>Service Details</p>
                       
                </div>
             
            </div>

            <div className='flex lg:flex-row flex-col gap-8'>
                <div className='lg:w-3/4 w-full'>
                   <img className='w-full rounded-md' src={img} alt="" srcset="" />
                   <h3 className='text-3xl font-bold mt-3'>{title}</h3>
                   <p className='my-3'>{description}</p>
                   <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5 lg:mb-20 mb-5 mt-7'>
                   {
                    facility.map(facility =><div className='bg-gray-200 p-5 rounded-md border-2 border-t-red-500'>
                       <h3 className='text-xl font-semibold my-2'>{facility.name}</h3>
                       <p>{facility.details}</p>
                    </div>)
                   }
                   </div>
                </div>
                <div className='lg:w-1/3 w-full'>
                    {/* more service */}
                            <div className='bg-gray-200 rounded-md p-5 mb-5'>
                                <h3 className='text-2xl font-bold my-3'>Services</h3>
                                <div className='flex mb-3 items-center bg-[#FF3811] text-white  p-3 rounded-md'>
                                    <h3 className='text-md font-semibold flex-1'>Full Car Repair</h3>
                                    <BsArrowRightShort className='text-2xl'/>
                                </div>
                                <div className='flex mb-3 items-center bg-white p-3 rounded-md'>
                                    <h3 className='text-md font-semibold flex-1'>Engine Repair</h3>
                                    <BsArrowRightShort className='text-2xl text-[#FF3811]'/>
                                </div>
                                <div className='flex mb-3 items-center bg-white p-3 rounded-md'>
                                    <h3 className='text-md font-semibold flex-1'>Automatic Services</h3>
                                    <BsArrowRightShort className='text-2xl text-[#FF3811]'/>
                                </div>
                                <div className='flex mb-3 items-center bg-white p-3 rounded-md'>
                                    <h3 className='text-md font-semibold flex-1'>Engine Oil Change</h3>
                                    <BsArrowRightShort className='text-2xl text-[#FF3811]'/>
                                </div>
                                <div className='flex mb-3 items-center bg-white p-3 rounded-md'>
                                    <h3 className='text-md font-semibold flex-1'>Battery Change</h3>
                                    <BsArrowRightShort className='text-2xl text-[#FF3811]'/>
                                </div>
                            </div>
                       {/* download details section  */}
                            <div className='bg-black rounded-md p-5'>
                                <h3 className='text-2xl font-bold my-3 text-white'>Download</h3>
                                <div className='flex mb-3 items-cente'>
                                    <div className='flex-1'>
                                    <div className='flex items-center gap-2'>
                                            <img src={details} alt="" srcset="" />
                                            <div>
                                            <h3 className='text-md font-medium text-white'>Our Brochure</h3>
                                            <h3 className='text-gray-500 font-normal'>Download</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <BsArrowRightShort className='text-4xl bg-[#FF3811] p-2  rounded-md text-white'/>
                                </div>
                                <div className='flex mb-3 items-center'>
                                    <div className='flex-1'>
                                        <div className='flex items-center gap-2'>
                                            <img src={details} alt="" srcset="" />
                                            <div>
                                            <h3 className='text-md font-medium text-white'>Company Details</h3>
                                            <h3 className='text-gray-500 font-normal'>Download</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <BsArrowRightShort className='text-4xl bg-[#FF3811] p-2  rounded-md text-white'/>
                                </div>
            
                            </div>
                
                  {/* discount and checkout */}

                  <div className='bg-black rounded-md p-2 pb-10 mt-5'>
                     <div className='text-center text-white'>
                         <img className='w-1/4 m-auto mt-5' src={logo} alt="" srcset="" />
                         <p className='text-xl font-bold mt-3 mb-5'>Car Doctor</p>
                         <p className='text-md font-semibold lg:w-[70%] w-full mb-5 m-auto'>Need Help? We Are Here To Help You</p>
                         <div className='relative bg-white lg:w-3/4 w-full pt-3 pb-10 m-auto rounded-md '>
                            <p className='text-[#FF3811] text-lg font-bold'>Car Doctor
                            <span className='text-black'> Special</span>
                            </p>
                            <p className='text-[#FF3811] font-bold mt-2'> <span className='text-black'>Save up to</span> 60% off</p>
                         </div>
                         <button className='text-white font-bold bg-[#FF3811] px-5 py-2 rounded-md absolute -mt-7 -ml-16'>Get A Quote</button>
                     </div>
                </div>
                 {/* checkout */}
                 <div className='text-center mb-5'>
                    <p className='text-2xl font-bold my-3'>Price: ${price }</p>
                    <Link to={`/checkout/${_id}`}>
                    <button className='bg-[#FF3811] text-white font-semibold text-lg px-7 py-2 rounded-md'>Proceed Checkout</button>
                    </Link>
                 </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;
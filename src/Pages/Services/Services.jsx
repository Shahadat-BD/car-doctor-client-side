import {BsArrowRightShort} from "react-icons/bs";
import { Link } from 'react-router-dom';
import useService from '../../hook/useService';
const Services = () => {
   const service = useService()
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

            <div key={service._id} className='border-2 border-gray-100 rounded-md p-4'>
              <img className='w-full h-[220px] rounded-md' src={service.img} alt=""  />
               <h3 className='font-bold text-xl my-3'>{service.title}</h3>
               <div className='flex items-center'>
                 <p className='flex-1 text-[#FF3811] font-semibold text-md'>${service.price}.00</p>
                  <Link to={`/services/${service._id}`}><button className='flex bg-[#FF3811] px-3 py-1 rounded-md text-white'>Details <BsArrowRightShort className='text-2xl text-white'/></button> </Link>
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
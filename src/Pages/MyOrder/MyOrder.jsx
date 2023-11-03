import React, { useEffect, useState } from 'react';
import OrderTable from '../OrderTable/OrderTable';
import bannerDetails from "../../assets/images/banner/resize-4.jpg";
import Swal from 'sweetalert2'
import useAuth from '../../hook/useAuth';
import useAxiosSecure from '../../hook/useAxiosSecure';

const MyOrder = () => {
    const { user } = useAuth()
    const [order, setOrder] = useState([])
    const axiosSecure = useAxiosSecure()

    useEffect(() => {
        axiosSecure.get(`/order?email=${user.email}`)
            .then(res => {
                        setOrder(res.data)
                    })
    }, [])

    const handleDeleteOrder = id => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You want to delete this service",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          })
          .then((result)=> {
              if (result.isConfirmed) {
                fetch(`https://cat-doctor-server-side.vercel.app/order/${id}`,{
                    method:"DELETE",
                })
                .then(res => res.json())
                .then(data =>{
                    if (data.deletedCount > 0) {
                        Swal.fire(
                            'Deleted!',
                            'Your service has been deleted successfully.',
                            'success'
                          )
                        }
                   const remainingService = order.filter(service => service._id !== id)
                   setOrder(remainingService)
                })
              }
          })

       
    }
    
    return (
        <div className='lg:w-[85%] m-auto w-[95%]'>
            <div className='mt-5 mb-20 relative'>
                <img className='w-full rounded-md' src={bannerDetails} alt="" />
                <div className='absolute rounded-md top-0 w-full h-full bg-gradient-to-l from-[#1010105f] to-[#101010b3]'>
                    <p className='flex justify-center items-center font-bold h-full text-white lg:text-4xl text-xl'>My Order</p>
                </div>
            </div>

            <div className="overflow-x-auto mb-10">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className='text-black font-bold'>Delete</th>
                            <th className='text-black font-bold'>Service Name</th>
                            <th className='text-black font-bold'>Price</th>
                            <th className='text-black font-bold'>Email</th>
                            <th className='text-black font-bold'>Date</th>
                            <th className='text-black font-bold'>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            order.map(order => <OrderTable key={order._id} order={order} handleDeleteOrder={handleDeleteOrder}></OrderTable>)
                        }
                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MyOrder;
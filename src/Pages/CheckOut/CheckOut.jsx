import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import bannerDetails from "../../assets/images/banner/resize-4.jpg";
import useAuth from "../../hook/useAuth";

const CheckOut = () => {
    const serviceLoader = useLoaderData()
    const {img,title,price} = serviceLoader
    const {user} = useAuth()

    const handleNewProductAdd = event => {
        event.preventDefault()
        const form = event.target
        const serviceName = form.serviceName.value
        const email = form.email.value
        const price = form.price.value
        const date = form.date.value
        const serviceImage =  form.serviceImage.value
        const message = form.message.value

        const serviceInfo = {serviceName,email,price,date,serviceImage,message}

        fetch('http://localhost:5000/order',{
          method:"POST",
          headers:{
              'content-type':'application/json'
          },
          body: JSON.stringify(serviceInfo)
       })
       .then(res=> res.json())
       .then(data => {
            if (data.acknowledged) {
                toast('product successfully added in database')
            }
       })

    }
    return (
        <div className='lg:w-[85%] m-auto w-[95%] my-10'>
        <div className='mt-5 mb-10 relative'>
            <img className='w-full rounded-md'  src={bannerDetails} alt=""  />
            <div className='absolute rounded-md top-0 w-full h-full bg-gradient-to-l from-[#1010105f] to-[#101010b3]'>
                <p className='flex justify-center items-center font-bold h-full text-white lg:text-4xl text-xl'>Order Checkout</p>
            </div>
        </div>

            <div className='w-full md:my-[185px] lg:my-5 rounded-md bg-gray-200'>
            <form onSubmit={handleNewProductAdd} className='lg:p-12 md:p-10 p-5'>
                <div className='grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5'>
                <input className='py-2 pl-2  rounded-md' type="text" required placeholder='service name write here' defaultValue={title} name="serviceName" id="" />
                <input className='py-2 pl-2  rounded-md' type="email" required placeholder='email write here' defaultValue={user.email} name="email" id="" />
                <input className='py-2 pl-2  rounded-md' type="number" required placeholder='product price' defaultValue={price} name="price" id="" />
                <input className='py-2 pl-2  rounded-md' type="date" required placeholder='date' name="date"  id="" />
                </div>
                <input className='w-full my-3 py-2 pl-2  rounded-md' type="text" required placeholder='write service image here' defaultValue={img} name="serviceImage" id="" /> 
                 <textarea className="w-full my-3 py-2 pl-2  rounded-md" placeholder="write your message here" name="message" id="" cols="30" rows="8"></textarea>
                <input className='w-full cursor-pointer bg-[#FF3811] text-white py-3 font-bold rounded-md' type="submit" value="Order Confirm" />
            </form>
            <ToastContainer></ToastContainer>
        </div>
        </div>
    );
};

export default CheckOut;


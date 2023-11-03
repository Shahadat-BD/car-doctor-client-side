import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import person_1 from "../../assets/icons/review/person-1.png";
import person_2 from "../../assets/icons/review/person-2.png";
import check from "../../assets/icons/review/quite.png";
const Review = () => {
  return (
    <div className="my-20">
      <div className="text-center mb-10">
        <h3 className="text-[#FF3811] font-bold">Testimonial</h3>
        <h1 className="lg:text-4xl text-2xl font-bold my-3"> What Customer Says </h1>
        <p className="lg:w-[60%] w-full m-auto">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
      </div>


      <Swiper
        slidesPerView={1}
        autoplay={{
           delay : 2500
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
        }}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className="border relative border-gray-300 p-10 rounded-lg">
         <div className="flex items-center">
         <img  src={person_1} alt=""  />
          <div className="ml-5">
            <h3 className="text-xl font-semibold">Awlad Hossain</h3>
            <p>Businessman</p>
          </div>
         </div>
          <img className="absolute h-14 top-[15%] left-2/3 " src={check} alt=""  />
          <p className="mt-4 text-[#737373] font-normal">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
          <div className="rating mt-3">
                <input type="radio" name="rating-2" className="mask mask-star-2 h-[20px] bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 h-[20px] bg-orange-400"/>
                <input type="radio" name="rating-2" className="mask mask-star-2 h-[20px] bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 h-[20px] bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 h-[20px] bg-orange-400" />
            </div>
        </SwiperSlide>
        <SwiperSlide className="border relative border-gray-300 p-10 rounded-lg">
         <div className="flex items-center">
         <img  src={person_2} alt=""  />
          <div className="ml-5">
            <h3 className="text-xl font-semibold">Awlad Hossain</h3>
            <p>Businessman</p>
          </div>
         </div>
          <img className="absolute h-14 top-[15%] left-2/3 " src={check} alt=""  />
          <p className="mt-4 text-[#737373] font-normal">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
          <div className="rating mt-3">
                <input type="radio" name="rating-2" className="mask mask-star-2 h-[20px] bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 h-[20px] bg-orange-400"/>
                <input type="radio" name="rating-2" className="mask mask-star-2 h-[20px] bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 h-[20px] bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 h-[20px] bg-orange-400" />
            </div>
        </SwiperSlide>
        <SwiperSlide className="border relative border-gray-300 p-10 rounded-lg">
         <div className="flex items-center">
         <img  src={person_1} alt=""  />
          <div className="ml-5">
            <h3 className="text-xl font-semibold">Awlad Hossain</h3>
            <p>Businessman</p>
          </div>
         </div>
          <img className="absolute h-14 top-[15%] left-2/3 " src={check} alt=""  />
          <p className="mt-4 text-[#737373] font-normal">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
          <div className="rating mt-3">
                <input type="radio" name="rating-2" className="mask mask-star-2 h-[20px] bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 h-[20px] bg-orange-400"/>
                <input type="radio" name="rating-2" className="mask mask-star-2 h-[20px] bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 h-[20px] bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 h-[20px] bg-orange-400" />
            </div>
        </SwiperSlide>
        <SwiperSlide className="border relative border-gray-300 p-10 rounded-lg">
         <div className="flex items-center">
         <img  src={person_2} alt=""  />
          <div className="ml-5">
            <h3 className="text-xl font-semibold">Awlad Hossain</h3>
            <p>Businessman</p>
          </div>
         </div>
          <img className="absolute h-14 top-[15%] left-2/3 " src={check} alt=""  />
          <p className="mt-4 text-[#737373] font-normal">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
          <div className="rating mt-3">
                <input type="radio" name="rating-2" className="mask mask-star-2 h-[20px] bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 h-[20px] bg-orange-400"/>
                <input type="radio" name="rating-2" className="mask mask-star-2 h-[20px] bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 h-[20px] bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 h-[20px] bg-orange-400" />
            </div>
        </SwiperSlide>
        <SwiperSlide className="border relative border-gray-300 p-10 rounded-lg">
         <div className="flex items-center">
         <img  src={person_1} alt=""  />
          <div className="ml-5">
            <h3 className="text-xl font-semibold">Awlad Hossain</h3>
            <p>Businessman</p>
          </div>
         </div>
          <img className="absolute h-14 top-[15%] left-2/3 " src={check} alt=""  />
          <p className="mt-4 text-[#737373] font-normal">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
          <div className="rating mt-3">
                <input type="radio" name="rating-2" className="mask mask-star-2 h-[20px] bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 h-[20px] bg-orange-400"/>
                <input type="radio" name="rating-2" className="mask mask-star-2 h-[20px] bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 h-[20px] bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 h-[20px] bg-orange-400" />
            </div>
        </SwiperSlide>
        <SwiperSlide className="border relative border-gray-300 p-10 rounded-lg">
         <div className="flex items-center">
         <img  src={person_2} alt=""  />
          <div className="ml-5">
            <h3 className="text-xl font-semibold">Awlad Hossain</h3>
            <p>Businessman</p>
          </div>
         </div>
          <img className="absolute h-14 top-[15%] left-2/3 " src={check} alt=""  />
          <p className="mt-4 text-[#737373] font-normal">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
          <div className="rating mt-3">
                <input type="radio" name="rating-2" className="mask mask-star-2 h-[20px] bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 h-[20px] bg-orange-400"/>
                <input type="radio" name="rating-2" className="mask mask-star-2 h-[20px] bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 h-[20px] bg-orange-400" />
                <input type="radio" name="rating-2" className="mask mask-star-2 h-[20px] bg-orange-400" />
            </div>
        </SwiperSlide>
       
      </Swiper>

    </div>
  );
};

export default Review;

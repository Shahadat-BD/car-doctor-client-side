import React from 'react';
import Banner from '../Banner/Banner';
import AboutUs from '../AboutUs/AboutUs';
import Services from '../Services/Services';
import Contact from '../Contact/Contact';
import Product from '../Product/Product';
import OurTeam from '../OurTeam/OurTeam';
import ChooseUs from '../ChooseUs/ChooseUs';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div className='lg:w-[85%] m-auto w-[95%]'>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Services></Services>
            <Contact></Contact>
            <Product></Product>
            <OurTeam></OurTeam>
            <ChooseUs></ChooseUs>
            <Review></Review>
        </div>
    );
};

export default Home;
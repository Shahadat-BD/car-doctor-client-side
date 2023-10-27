import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='border rounded-md border-gray-300 text-center w-1/4 m-auto mt-40 p-5'>
            <h3 className='text-red-500 font-bold text-3xl'>4O4</h3>
            <p className='my-3 text-red-500 font-medium text-lg'>SORRY PAGE NOT FOUND ! <br /> TRY AGAIN</p>
            <Link to={'/'}> <button className='btn bg-gray-500 text-white font-bold'>Home</button> </Link>
        </div>
    );
};

export default NotFound;
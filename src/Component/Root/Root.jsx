import React from 'react';
import Heading from '../Heading';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Footer from '../Page/Footer';

const Root = () => {
    return (
        <div>
            <Toaster
  position="top-center"
  reverseOrder={false}
/>
            <Heading></Heading>
            <div>
                <Outlet></Outlet>
            </div>
           <div className='mt-20'>
           <Footer></Footer>
           </div>
        </div>
    );
};

export default Root;
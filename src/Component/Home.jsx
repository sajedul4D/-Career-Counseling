import React from 'react';
import Banner from './Page/Banner';
import Servies from './Page/Servies';

const Home = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <Banner></Banner>
            <Servies></Servies>
        </div>
    );
};

export default Home;
import React from 'react';
import Heading from '../Heading';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div>
            <Heading></Heading>
            <div>
                <Outlet></Outlet>
            </div>
            
        </div>
    );
};

export default Root;
/* eslint-disable no-unused-vars */
import React from 'react';
import Banner from '../../components/Banner/Banner';
import Cards from '../../components/Cards/CARDS.JSX';
import { ToastContainer } from 'react-toastify';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Cards></Cards>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Home;
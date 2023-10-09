/* eslint-disable no-unused-vars */
import React from 'react';
import Banner from '../../components/Banner/Banner';
import Cards from '../../components/Cards/CARDS.JSX';
import { ToastContainer } from 'react-toastify';
import Organizer from '../../components/Organizer/Organizer';
import Coverage from '../../components/Coverage/Coverage';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Cards></Cards>
            <Organizer></Organizer>
            <Coverage></Coverage>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Home;
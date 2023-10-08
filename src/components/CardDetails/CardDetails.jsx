/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Details from '../Details/Details';
import { ToastContainer } from 'react-toastify';

const CardDetails = () => {
    const [card,setCard] = useState({})
    const {id} = useParams()
    const cards = useLoaderData()
    // console.log(cards)

    useEffect(()=>{
        const findCards = cards?.find(card => card.id == id)
        setCard(findCards)
    },[id,cards])
    // console.log(card)
    return (
        <div>
            <Details card = {card}></Details>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default CardDetails;
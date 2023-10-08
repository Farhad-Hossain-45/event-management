/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const Cards = () => {
    const [cards,setCards] = useState([]);
    useEffect(()=>{
        fetch('/event.json')
        .then(res => res.json())
        .then(data => setCards(data))
    },[])
    // console.log(cards)
    return (
        <div>
            <h1 className="text-center mt-10 font-bold text-5xl text-pink-400"> Our Services</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 bg-pink-50 mt-7'>
                {
                    cards.map(card => <Card key={card.id} card={card}></Card>)
                }
            </div>
        </div>
    );
};

export default Cards;
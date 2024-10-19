import React, { useEffect, useState } from 'react';
import Pricecard from '../Pricecard/Pricecard';

const Pricelist = () => {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    fetch('prices.json')
    .then(res => res.json())
    .then(data => setPrices(data));
  }, [])
  return (
    <div className='mx-12'>
      <h2 className='text-5xl text-center text-purple-950 bg-purple-500 font-bold  p-4'>Our prices</h2>

      <div className='grid md:grid-cols-4 gap-4'>
        {
          prices.map(price => <Pricecard key={price.id} price={price}></Pricecard>)
        }

      </div>

      
    </div>
  );
};

export default Pricelist;
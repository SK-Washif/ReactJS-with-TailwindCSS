import React from 'react';
import Feature from '../Feature/Feature';

const Pricecard = ({price}) => {
  return (
    <div className='bg-indigo-400 mt-4 rounded-md p-4 text-center flex flex-col'>
      <h2 className='text-purple-700 text-5xl'>{price.price}</h2>
      <h5 className='text-2xl font-bold'>{price.name}</h5>
      <p  className='underline font-bold text-white'>Features:</p>
      {
        price.features.map((feature, idx) => <Feature key={idx} feature={feature}></Feature>)
      }
      <button className='w-full bg-green-500 py-2 rounded-md text-white font-bold mt-auto hover:bg-green-700'>Buy Now</button>
    </div>
  );
};

export default Pricecard;
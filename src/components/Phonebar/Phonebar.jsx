import React, { useEffect, useState } from 'react';
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import axios from 'axios';

const Phonebar = () => {
  const [phones, setPhones] = useState([]);

  useEffect(()=>{
    axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
    .then(data => {
      const loadedData = data.data.data;
      console.log(loadedData);
      const phonesData = loadedData.map(phone =>{
        const parts = phone.slug.split('-')
        const price = parseInt(parts[1]);
        const phoneInfo={
          name: phone.phone_name,
          price: price
        }
        return phoneInfo;
      })
      console.log(phonesData)
      setPhones(phonesData)
    });

  },[]);
  return (
    <div>
      <BarChart width={1000} height={500} data={phones}> 
        <Bar dataKey="price" fill="#8884d8" />
        <XAxis dataKey="name"></XAxis>
        <YAxis />
      </BarChart>
    </div>
  );
};

export default Phonebar;
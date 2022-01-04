import React from 'react';
import '../pages/Home/Home.css'


const total = ({ subscriptions }) => {


    const totalAmount = subscriptions.map(subscription => subscription.amount).reduce((prev, curr) => prev + curr, 0 );

  if (!subscriptions.length) {
    return <h3>0</h3>;
  }

  return (
    <div className='totalAmount'>
    ${
      totalAmount
    }
  </div>



  );
};

export default total;
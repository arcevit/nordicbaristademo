import React, { useContext } from 'react';
import { ArticleContext } from './Context';

export default function Logos() {
  const { logo } = useContext(ArticleContext);
  return (
    <div className='container pb-5 bg-light'>
        <h3>Nordic Barista Cup Sponsors</h3>
      <div className='row'>
        {logo.map((lg, index) => {
          return (
            <div key={index} className='card col-lg-2 col-md-4 w-50 px-4 py-4'>
              <img className='card-img border-1' src={lg} alt='Card cap' />
            </div>
          );
        })}
      </div>
    </div>
  );
}

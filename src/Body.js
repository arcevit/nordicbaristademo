import React from 'react';
import Articles from './Articles';
import Pagination from './Pagination';

export default function Body() {
  return (
    <div className='container pb-5 pt-3 bg-light'>
      <div className='row'>
        <div className='col-md-8'>
          <Articles/>
          <Pagination/>
        </div>
        <div className='col-md-4 main-left'>
          <div className='card border-0 main-left'>
            <div className='card-body'>
              <h5 className='card-title'>NBC Shop</h5>
              <p className='card-text'>Your shopping cart is empty</p>
              <a href='!#' className='card-link'>
                Visit the shop
              </a>
            </div>
          </div>
          <div className='card border-0 main-left'>
            <div className='card-body'>
              <h5 className='card-title'>Next Event</h5>
              <p className='card-text'>NORDIC BARISTA CUP 2011</p>
              <p className='card-text'>Copenhagen,Denmark</p>
              <p className='card-text'>Dates:25th-27th August 2011</p>
              <p className='card-text'>Theme:SENSORY</p>

              <a href='!#' className='card-link'>
                Sign up now.{' '}
              </a>
            </div>
          </div>
          <div className='card border-0 main-left'>
            <div className='card-body'>
              <h5 className='card-title'>Scoreboard</h5>
              <h6 className='card-subtitle mb-2 text-muted'>
                List of winners from past years
              </h6>
              <ul className='list-unstyled'>
                <li>2011:?</li>
                <li>2010:Sweden</li>
                <li>2009:Denmark</li>
                <li>2007:Sweden</li>
                <li>2006:Norway</li>
                <li>2005:Norway</li>
                <li>2004:Denmark</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

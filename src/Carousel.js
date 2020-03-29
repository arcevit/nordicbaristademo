import React, { useContext } from 'react';
import { ArticleContext } from './Context';

export default function Carousel() {
  const { pictures } = useContext(ArticleContext);
  const max = pictures.length;
  const getRandomPictures = max => {
    return Math.floor(Math.random() * Math.floor(max));
  };

  return (
    <div className='container px-0'>
      <div
        id='carouselExampleFade'
        className='carousel slide carousel-fade'
        data-ride='carousel'
      >
        <div className='carousel-inner'>
          <div className='carousel-item active'>
            <img
              className='d-block w-100'
              src={pictures[getRandomPictures(max)]}
              alt='First slide'
            />

            <div className='carousel-caption px-3 py-3 d-none d-md-block'>
              <div className='row'>
                <div className='col-md-7 banner-info'>
                  <h4>
                    “ To create an environment in which knowledge about coffee
                    and its sphere can be obtained”
                  </h4>
                </div>
                <div className='col-md-5 d-flex justify-content-center'>
                  <a className='tw-ic' href='!#'>
                    <i className='fa fa-twitter px-2 py-2 bg-dark text-white rounded-circle fa-2x'></i>
                  </a>
                  <a className='fb-ic ml-3' href='!#'>
                    <i className='fab fa-facebook-f px-2 py-2 bg-dark text-white rounded-circle fa-2x'></i>
                  </a>
                  <a className='feed-ic ml-3' href='!#'>
                    <i className='fas fa-rss px-2 py-2 bg-dark text-white rounded-circle fa-2x'></i>
                  </a>
                  <a className='mail-ic ml-3' href='!#'>
                    <i className='fas fa-envelope px-2 py-2 bg-dark text-white rounded-circle fa-2x'></i>{' '}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='carousel-item'>
            <img
              className='d-block w-100'
              src={pictures[getRandomPictures(max)]}
              alt='Second slide'
            />
            <div className='carousel-caption px-3 py-3 d-none d-md-block'>
              <div className='row'>
                <div className='col-md-7 banner-info'>
                  <h4>
                    “ To create an environment in which knowledge about coffee
                    and its sphere can be obtained”
                  </h4>
                </div>
                <div className='col-md-5 d-flex justify-content-center'>
                  <a className='tw-ic' href='!#'>
                    <i className='fa fa-twitter px-2 py-2 bg-dark text-white rounded-circle fa-2x'></i>
                  </a>
                  <a className='fb-ic ml-3' href='!#'>
                    <i className='fab fa-facebook-f px-2 py-2 bg-dark text-white rounded-circle fa-2x'></i>
                  </a>
                  <a className='feed-ic ml-3' href='!#'>
                    <i className='fas fa-rss px-2 py-2 bg-dark text-white rounded-circle fa-2x'></i>
                  </a>
                  <a className='mail-ic ml-3' href='!#'>
                    <i className='fas fa-envelope px-2 py-2 bg-dark text-white rounded-circle fa-2x'></i>{' '}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='carousel-item'>
            <img
              className='d-block w-100'
              src={pictures[getRandomPictures(max)]}
              alt='Third slide'
            />
            <div className='carousel-caption px-3 py-3 d-none d-md-block'>
              <div className='row'>
                <div className='col-md-7 banner-info'>
                  <h4>
                    “ To create an environment in which knowledge about coffee
                    and its sphere can be obtained”
                  </h4>
                </div>
                <div className='col-md-5 d-flex justify-content-center'>
                  <a className='tw-ic' href='!#'>
                    <i className='fa fa-twitter px-2 py-2 bg-dark text-white rounded-circle fa-2x'></i>
                  </a>
                  <a className='fb-ic ml-3' href='!#'>
                    <i className='fab fa-facebook-f px-2 py-2 bg-dark text-white rounded-circle fa-2x'></i>
                  </a>
                  <a className='feed-ic ml-3' href='!#'>
                    <i className='fas fa-rss px-2 py-2 bg-dark text-white rounded-circle fa-2x'></i>
                  </a>
                  <a className='mail-ic ml-3' href='!#'>
                    <i className='fas fa-envelope px-2 py-2 bg-dark text-white rounded-circle fa-2x'></i>{' '}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a
          className='carousel-control-prev'
          href='#carouselExampleFade'
          role='button'
          data-slide='prev'
        >
          <span
            className='carousel-control-prev-icon'
            aria-hidden='true'
          ></span>
          <span className='sr-only'>Previous</span>
        </a>
        <a
          className='carousel-control-next'
          href='#carouselExampleFade'
          role='button'
          data-slide='next'
        >
          <span
            className='carousel-control-next-icon'
            aria-hidden='true'
          ></span>
          <span className='sr-only'>Next</span>
        </a>
      </div>
    </div>
  );
}

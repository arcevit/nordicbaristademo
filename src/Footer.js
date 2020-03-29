import React from 'react';

export default function Footer() {
  return (
    <div className='container footer pb-3  text-white'>
      <div className='row pt-3 px-2'>
        <div className='col-lg-4 col-md-6 order-lg-first order-md-first'>
          <h3>About NBC</h3>
          <p>
            The vision within the Nordic Barista Cup is: “To create an
            environment in which knowledge about coffee and its sphere can be
            obtained”
          </p>
          <p>
            The organization behind the Nordic Barista Cup see it as its main
            purpose to be a part of creating this forum in which people can
            meet, bond and achieve further knowledge.
          </p>
          <p>Our motto is: “Be together, act together, learn together”</p>
        </div>
        <div className='col-lg-4 col-md-6 order-md-last'>
          <h3>NBC Flickr stream</h3>
          <div className='row py-3'>
            <div className='card card-galary col-md-4 col-sm-6 px-0'>
              <img
                className='card-img-top'
                src='https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(117).jpg'
                alt='Card'
              />
            </div>
            <div className='card card-galary col-md-4 col-sm-6 px-0'>
              <img
                className='card-img-top'
                src='https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(98).jpg'
                alt='Card'
              />
            </div>
            <div className='card card-galary col-md-4 col-sm-6 px-0'>
              <img
                className='card-img-top'
                src='https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(131).jpg'
                alt='Card'
              />
            </div>
            <div className='card card-galary col-md-4 col-sm-6 px-0'>
              <img
                className='card-img-top'
                src='https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(123).jpg'
                alt='Card'
              />
            </div>
            <div className='card card-galary col-md-4 col-sm-6 px-0'>
              <img
                className='card-img-top'
                src='https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(118).jpg'
                alt='Card'
              />
            </div>
            <div className='card card-galary col-md-4 col-sm-6 px-0'>
              <img
                className='card-img-top'
                src='https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(128).jpg'
                alt='Card'
              />
            </div>
            <div className='card card-galary col-md-4 col-sm-6 px-0'>
              <img
                className='card-img-top'
                src='https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(132).jpg'
                alt='Card'
              />
            </div>
            <div className='card card-galary col-md-4 col-sm-6 px-0'>
              <img
                className='card-img-top'
                src='https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(115).jpg'
                alt='Card'
              />
            </div>
            <div className='card card-galary col-md-4 col-sm-6 px-0'>
              <img
                className='card-img-top'
                src='https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(133).jpg'
                alt='Card'
              />
            </div>
          </div>
        </div>
        <div className='col-lg-4 col-md-6 pl-lg-4 order-lg-last'>
          <h3>Contact</h3>
          <h5>Nordic Barista Cup</h5>
          <p>
            Amagertorv 1 1160, Copenhagen K<br />
            <abbr title='Phone'>P:</abbr> (+45) 33 14 28 89
            <br />
            CVR: DK-11427693
            <br />
            <a className='text-white' href='mailto:#'>
              E-mail: jdn@europa1989.dk
            </a>
          </p>
          <div className='d-flex justify-content-start'>
            <a className='tw-ic' href='!#'>
              <i className='fa fa-twitter px-2 py-2 bg-dark text-white rounded-circle fa-2x'></i>
            </a>
            <a className='fb-ic ml-2' href='!#'>
              <i className='fab fa-facebook-f px-2 py-2 bg-dark text-white rounded-circle fa-2x'></i>
            </a>
            <a className='feed-ic ml-2' href='!#'>
              <i className='fas fa-rss px-2 py-2 bg-dark text-white rounded-circle fa-2x'></i>
            </a>
            <a className='mail-ic ml-2' href='!#'>
              <i className='fas fa-envelope px-2 py-2 bg-dark text-white rounded-circle fa-2x'></i>{' '}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

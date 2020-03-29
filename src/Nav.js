import React,{useContext} from 'react';
import { ArticleContext } from './Context';


export default function Nav() {

  const {handleSearch} = useContext(ArticleContext)
  return (
    <div className='container navbar-bg'>
      <nav className='navbar navbar-expand-md navbar-dark '>
        <div className='row'>
          <div className='col-lg-5  col-sm-12'>
            <a href='/' className='navbar-brand'>
            <h2 className='brand-title pt-3 mb-0 text-secondary'>
              <span className='text-light'>NORDIC</span>BARISTACUP
            </h2>
            <h6 className='text-light'>
              {' '}
              be together act together learn together
            </h6>
            </a>
            
            <button
              className='navbar-toggler mb-2'
              type='button'
              data-toggle='collapse'
              data-target='#navbarSupportedContent'
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='navbar-toggler-icon'></span>
            </button>
          </div>

          <div
            className='col-lg-7  col-md-12 collapse navbar-collapse'
            id='navbarSupportedContent'
          >
            <div className='row'>
              <div className='col-md-5 offset-md-7 pt-4'>
                <div className='form-group has-search mb-0'>
                  <span className='fas fa-search form-control-feedback'></span>
                  <input
                    type='Search'
                    aria-label='Search'

                    className='form-control  rounded-pill'
                    placeholder='Search'
                    onChange={e=>handleSearch(e)}
                  />
                </div>
              </div>
              <div className='col-lg-12 pt-0'>
                <ul className='nav d-flex navbar-nav mr-auto justify-content-between'>
                  <li className='nav-item'>
                    <a className='nav-link px-0 text-light' href='#!'>
                      ABOUT NBC
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link px-0 text-light' href='#!'>
                      NBC EVENTS
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link px-0 text-light' href='#!'>
                      NORDIC ROASTER EVENTS
                    </a>
                  </li>
                  <li className='nav-item'>
                    <a className='nav-link px-0 text-light' href='#!'>
                      RESULTS
                    </a>
                  </li>
                  <li className='nav-item  '>
                    <a className='nav-link px-0 text-light' href='#!'>
                      CONTACT
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

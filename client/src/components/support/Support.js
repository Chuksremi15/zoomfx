import React from 'react';
import PropTypes from 'prop-types';
import SiveNav from '../layout/SideNav';

const Support = (props) => {
  return (
    <div>
      <SiveNav />
      <section>
        <div className='content-page'>
          <div className='col-sm-12 mt-5'>
            <h2 className='page-title'>Contact Us</h2>
          </div>

          <section className='py-2 mb-2'>
            <div>
              <div className='container '>
                <div className='row m-1'>
                  <div className='card card-center '>
                    <img
                      src='/img/logo/logo.png'
                      className='img-fluid d-flex align-self-center mb-3'
                      width='150'
                    />
                    <h4>We look forward to hearing from you</h4>
                    <h5>Email: Zoomfx@gmail.com</h5>
                    <h5>Phone: 08021323377</h5>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Support;

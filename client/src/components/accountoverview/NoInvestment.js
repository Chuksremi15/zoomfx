import React from 'react';
import SideNav from '../layout/SideNav';
import {Link} from 'react-router-dom';

const NoInvestment = () => {
  return (
    <div>
      <SideNav />
      <section>
        <div className='content-page'>
          <div className='col-sm-12 mt-5'>
            <h5 className='page-title mb-3'>
              You do not yet have an investmet. Please click on one of the plan
              below to invest
            </h5>
          </div>

          <div className='content investment-plan2'>
            <div className='container'>
              <div className='row'>
                <div className='card text-center'>
                  <img
                    src='/img/icons/icons8-coins-96.png'
                    className='img-fluid'
                  />

                  <h3>Gold(20%)</h3>
                  <p>Investment below ₦500,000 comes with ROI 15% of capital</p>
                  <h2>Below ₦500,000</h2>
                  <Link to='/deposite' className='btn btn-block mybtn my-3'>
                    Get Started
                  </Link>
                </div>
                <div className='card text-center'>
                  <img
                    src='/img/icons/icons8-cash-96.png'
                    className='img-fluid'
                  />
                  <h3>Premium(20%)</h3>
                  <p>Investment above ₦500,000 comes with ROI 20% of capital</p>
                  <h2>Above ₦500,000</h2>
                  <Link to='/deposite' className='btn btn-block mybtn my-3'>
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NoInvestment;

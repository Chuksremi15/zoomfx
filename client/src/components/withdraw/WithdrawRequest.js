import React from 'react';
import {Link} from 'react-router-dom';
import SiveNav from '../layout/SideNav';
import {connect} from 'react-redux';

const WithdrawRequest = () => {
  return (
    <div>
      <SiveNav />
      <section>
        <div className='content-page'>
          <div className='col-sm-12 mt-5'>
            <h2 className='page-title'>Withdraw Request</h2>
          </div>

          <section id='action' className='py-2 mb-2 bg-light'>
            <div>
              <div className='row'>
                <div className='col-md-3'>
                  <Link to='/withdraw' className='btn mybtn btn-block'>
                    <i className='fa fa-arrow-left'></i> withdraw
                  </Link>
                </div>
              </div>
            </div>
          </section>

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
                    <p className='text-center'>
                      Hi, your withdrawal request have been receive.The status
                      of withdrawal will be updated to pending until payment is
                      made. It will be greate to have you reinvest with us, we
                      are here to grow your wealth.
                    </p>
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

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(WithdrawRequest);

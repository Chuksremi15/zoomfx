import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import SiveNav from '../layout/SideNav';
import {connect} from 'react-redux';

const DepositeRequest = ({plans: {plan}, auth: {user}}) => {
  const isEmpty = (obj) => {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) return false;
    }
    return true;
  };

  return (
    <div>
      <SiveNav />
      <section>
        <div className='content-page'>
          <div className='col-sm-12 mt-5'>
            <h2 className='page-title'>Deposite Request</h2>
          </div>

          <section id='action' className='py-2 mb-2 bg-light'>
            <div>
              <div className='row'>
                <div className='col-md-3'>
                  <Link to='/account-overview' className='btn mybtn btn-block'>
                    Account Overview <i className='fa fa-arrow-right'></i>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section className='py-2 mb-2 deposite-request-section'>
            <div>
              <div className='row'>
                <div className='card card-center'>
                  <img
                    src='/img/logo/logo.png'
                    className='img-fluid d-flex align-self-center mb-3'
                    width='150'
                  />
                  <p className=''>
                    Hi {user.name.firstname}, your investment request have been
                    recieve. Status will be updated to pending deposite until
                    payment is made
                  </p>
                  {isEmpty(plan) ? (
                    <Fragment>
                      <div />
                    </Fragment>
                  ) : (
                    <Fragment>
                      <h6>Invetment Details</h6>
                      <h6>Plan: {plan.investmentplan}</h6>
                      <h6>Amount: ₦{plan.capital}</h6>
                      <h6 className='mb-3'>Rate: {plan.rate}%</h6>
                    </Fragment>
                  )}

                  <p>
                    Please make payment either and bank transfer or offline
                    deposite to the account below
                  </p>
                  <h6>Zoomfx Bank details</h6>
                  <h6>Account Name: User One</h6>
                  <h6>Account Number: 4589267381</h6>
                  <h6 className='mb-3'>Bank Name: Access</h6>
                  <p>
                    Proceed to send a picture of proof of payment which maybe a
                    bank teller or online teller to the email or whatsapp number
                    below
                  </p>
                  <h6>Contact Details</h6>
                  <h6>Email: Zoomfxsupport@gmail.com</h6>
                  <h6 className='mb-3'>whatsapp: 0908389910</h6>
                  <p>
                    Status will be update to Active investment once payment is
                    confirmed
                  </p>
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
  plans: state.plans,
  auth: state.auth,
});

export default connect(mapStateToProps)(DepositeRequest);

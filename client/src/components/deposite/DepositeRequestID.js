import React, {useEffect} from 'react';
import {Link, withRouter} from 'react-router-dom';
import SiveNav from '../layout/SideNav';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getPlan, deletePlan} from '../../actions/plan';
import Spinner from '../layout/Spinner';

const DepositeRequestID = ({
  match: {params},
  plans: {plan, planLoading},
  getPlan,
  deletePlan,
  history,
}) => {
  useEffect(() => {
    getPlan(params.id);
  }, [getPlan]);

  const handleClick = (e) => {
    e.preventDefault();
    deletePlan(plan._id, history);
  };
  return planLoading ? (
    <Spinner />
  ) : (
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
                <div className='col-md-3 mr-auto mb-2'>
                  <Link to='/account-overview' className='btn mybtn btn-block'>
                    Account Overview <i className='fa fa-arrow-right'></i>
                  </Link>
                </div>
                <div className='col-md-3'>
                  <a
                    onClick={handleClick}
                    className='bg-danger mybtn btn-block'
                  >
                    <i className='fa fa-times'></i> Delete investment
                  </a>
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
                  {plan && (
                    <p className=''>
                      Hi {plan.user.name.firstname} , your investment request
                      have been recieve. Status will be updated to pending
                      deposite until payment is made
                    </p>
                  )}
                  <h6>Invetment Details</h6>
                  {plan && <h6>Plan: {plan.investmentplan}</h6>}
                  {plan && <h6>Amount: ₦{plan.capital}</h6>}
                  {plan && <h6 className='mb-3'>Rate: {plan.rate}%</h6>}
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

DepositeRequestID.propTypes = {
  getPlan: PropTypes.func.isRequired,
  deletePlan: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  plans: state.plans,
});

export default connect(mapStateToProps, {getPlan, deletePlan})(
  withRouter(DepositeRequestID)
);

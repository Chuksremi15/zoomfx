import React, {useEffect} from 'react';
import SideNav from '../layout/SideNav';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {getPlan, updatePendingWithdrawal} from '../../actions/plan';
import Spinner from '../layout/Spinner';
import Moment from 'react-moment';
import {addNotification} from '../../actions/notification';

const Plan = ({
  match: {params},
  plans: {plan, planLoading},
  getPlan,
  updatePendingWithdrawal,
  addNotification,
  history,
}) => {
  useEffect(() => {
    getPlan(params.id);
  }, [getPlan]);

  const handleWithdrawInterest = (e) => {
    e.preventDefault();
    updatePendingWithdrawal(
      {pendingwithdrawal: true, dueplan: false},
      params.id,
      history
    );

    addNotification({
      text: 'Requested to with interest only',
      type: 'Withdrawal',
    });
  };

  const handleWithdrawAll = (e) => {
    e.preventDefault();
    updatePendingWithdrawal(
      {pendingwithdrawal: true, dueplan: false},
      params.id,
      history
    );

    addNotification({
      text: 'Requested to with all',
      type: 'Withdrawal',
    });
  };

  const handleReinvest = (e) => {
    e.preventDefault();
    updatePendingWithdrawal(
      {pendingwithdrawal: true, dueplan: false},
      params.id,
      history
    );

    addNotification({
      text: 'Requested to reinvest',
      type: 'Withdrawal',
    });
  };
  const cancelWithdrawal = (e) => {
    e.preventDefault();
    updatePendingWithdrawal(
      {pendingwithdrawal: false, dueplan: true},
      params.id,
      history,
      true
    );

    addNotification({
      text: 'Withdrawal canceled',
      type: 'Withdrawal',
    });
  };

  return planLoading ? (
    <Spinner />
  ) : (
    <div>
      <SideNav />
      <section className='investment-section'>
        <div className='content-page'>
          <div className='col-sm-12 mt-5'>
            <h2 className='page-title'>Investment</h2>
          </div>

          <section id='action' className='py-2 mb-2 bg-light'>
            <div>
              <div className='row'>
                <div className='col-md-3 mr-auto mb-2'>
                  <Link to='/account-overview' className='btn mybtn btn-block'>
                    Account Overview <i className='fa fa-arrow-right'></i>
                  </Link>
                </div>
                {plan.pendingwithdrawal && (
                  <div className='col-md-3 '>
                    <a
                      onClick={(e) => cancelWithdrawal(e)}
                      className='mybtn bg-danger btn-block'
                    >
                      <i className='fa fa-times'></i>
                      Cancle Withdrawal
                    </a>
                  </div>
                )}
              </div>
            </div>
          </section>

          <div className='content'>
            <div className='row'>
              <div className='container'>
                <div className='col-md-6 card'>
                  <div>
                    <h2 className='float-left'>{plan.investmentplan}</h2>

                    {plan.investmentplan === 'Gold' ? (
                      <img
                        src='/img/icons/icons8-coins-96.png'
                        className='img-fluid'
                        className='float-right'
                        width='60'
                        height='60'
                      />
                    ) : (
                      <img
                        src='/img/icons/icons8-cash-96.png'
                        className='img-fluid'
                        className='float-right'
                        width='60'
                        height='60'
                      />
                    )}
                  </div>

                  <h5 className='bg-light'>Amount Invested: ₦{plan.capital}</h5>
                  <h5>Rate: {plan.rate}%</h5>
                  <h5 className='bg-light'>Interest: ₦{plan.interest}</h5>
                  <h5>Payout: ₦{plan.amountaccrue}</h5>

                  <h5 className='bg-light'>
                    Date Invested:{' '}
                    <Moment format='YYYY/MM/DD'>{plan.Date}</Moment>
                  </h5>
                  <h5>
                    Payout Date:{' '}
                    <Moment format='YYYY/MM/DD'>{plan.depositedate}</Moment>
                  </h5>
                </div>
              </div>
            </div>

            <section id='action' className='py-2 mb-2 bg-light'>
              <div className='container'>
                <div className='row d-flex justify-content-center'>
                  {plan.dueplan && (
                    <div className='col-md-3 mb-2'>
                      <a
                        onClick={(e) => handleWithdrawInterest(e)}
                        className='mybtn bg-primary btn-block'
                      >
                        <i className='fas fa-arrow'></i>Withdraw Interest
                      </a>
                    </div>
                  )}

                  {plan.dueplan && (
                    <div className='col-md-3 mb-2'>
                      <a
                        onClick={(e) => handleWithdrawAll(e)}
                        className='mybtn bg-warning btn-block'
                      >
                        <i className='fa'></i> Withdraw All
                      </a>
                    </div>
                  )}

                  {plan.dueplan && (
                    <div className='col-md-3 mb-2'>
                      <a
                        onClick={(e) => handleReinvest(e)}
                        className='mybtn bg-success btn-block'
                      >
                        <i className='fa'></i> Reinvest
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
};

Plan.propTypes = {
  getPlan: PropTypes.func.isRequired,
  deletePlan: PropTypes.func.isRequired,
  updatePendingWithdrawal: PropTypes.func.isRequired,
  addNotification: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  plans: state.plans,
});

export default connect(mapStateToProps, {
  getPlan,
  updatePendingWithdrawal,
  addNotification,
})(withRouter(Plan));

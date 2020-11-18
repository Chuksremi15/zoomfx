import React, {useEffect} from 'react';
import {Link, withRouter} from 'react-router-dom';
import SideNav from '../layout/SideNav';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import {getUserPlans} from '../../actions/plan';
import DuePlans from '../accountoverview/DuePlans';
import PendingWithdrawals from './PendingWithdrawals';
import WithdrawalHistory from './WithdrawalHistory';

const Withdraw = ({
  plans: {loading, duePlans, pendingwithdrawals, paidWithdrawals},

  getUserPlans,
}) => {
  useEffect(() => {
    getUserPlans();
  }, [getUserPlans]);
  return loading ? (
    <Spinner />
  ) : (
    <div>
      <SideNav />
      <section>
        <div className='content-page'>
          <div className='col-sm-12 mt-5'>
            <h2 className='page-title'>Withdraw</h2>
          </div>

          <div className='content account-section container'>
            {/* <ActivePlans activePlans={activePlans} />
            <PendingPlans pendingPlans={pendingPlans} /> */}

            <DuePlans duePlans={duePlans} />
            <PendingWithdrawals pendingwithdrawals={pendingwithdrawals} />
            <WithdrawalHistory paidWithdrawals={paidWithdrawals} />
          </div>
        </div>
      </section>
    </div>
  );
};

Withdraw.propTypes = {
  getUserPlans: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  plans: state.plans,
});

export default connect(mapStateToProps, {getUserPlans})(Withdraw);

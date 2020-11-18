import React, {useEffect} from 'react';
import {Link, withRouter} from 'react-router-dom';
import SideNav from '../layout/SideNav';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import {getUserPlans} from '../../actions/plan';
import ActivePlans from './ActivePlans';
import PendingPlans from './PendingPlans';
import DuePlans from './DuePlans';

import NoInvestment from './NoInvestment';

const AccountOverview = ({
  plans: {loading, plans, activePlans, pendingPlans, duePlans},

  getUserPlans,
}) => {
  useEffect(() => {
    getUserPlans();
  }, [getUserPlans]);

  const isEmpty = (obj) => {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) return false;
    }
    return true;
  };

  return loading ? (
    <Spinner />
  ) : isEmpty(plans) ? (
    <NoInvestment />
  ) : plans.data.length > 0 ? (
    <div>
      <SideNav />
      <section>
        <div className='content-page'>
          <div className='col-sm-12 mt-5'>
            <h2 className='page-title'>Account Overview</h2>
          </div>

          <div className='content account-section container'>
            <ActivePlans activePlans={activePlans} />
            <PendingPlans pendingPlans={pendingPlans} />

            <DuePlans duePlans={duePlans} />
          </div>
        </div>
      </section>
    </div>
  ) : (
    <NoInvestment />
  );
};

AccountOverview.proTypes = {
  getUserPlans: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  plans: state.plans,
});

export default connect(mapStateToProps, {getUserPlans})(AccountOverview);

import React, {useState} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import SideNav from '../layout/SideNav';
import PropTypes from 'prop-types';
import {addPlan} from '../../actions/plan';
import PendingPlans from '../accountoverview/PendingPlans';
import DepositeHistory from './DepositeHistory';
import {addNotification} from '../../actions/notification';

const Deposite = ({
  addPlan,
  addNotification,
  history,
  plans: {pendingPlans, paidDeposites},
}) => {
  const [formData, setFormData] = useState({
    investmentplan: '',
    capital: '',
    rate: '',
  });

  const {capital, investmentplan, rate} = formData;

  const onChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const onSubmit = (e) => {
    e.preventDefault();

    addPlan(formData, history);

    addNotification({text: 'User Created a plan', type: 'Deposite'});
  };

  return (
    <div>
      <SideNav />
      <section className='mb-5 pb-5'>
        <div className='content-page'>
          <div className='col-sm-12 m-5'>
            <h2 className='page-title'>Make Deposite</h2>
          </div>

          <div className='content deposite'>
            <div className='row'>
              <div className='container'>
                <div className='card'>
                  <h4>Enter Investment Amount</h4>

                  <form onSubmit={onSubmit}>
                    <div className='form-group'>
                      <label>Amount(₦)</label>
                      <input
                        type='number'
                        name='capital'
                        className='form-control'
                        placeholder='Enter amount to invest'
                        value={capital}
                        onChange={(e) => onChange(e)}
                        required
                      />
                    </div>

                    <div className='form-group'>
                      <input
                        type='submit'
                        className='mybtn form-control'
                        value='Deposite'
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className='container'>
            <div className='row'>
              <div className='col-sm-12'>
                <PendingPlans pendingPlans={pendingPlans} />
              </div>
            </div>

            <div className='row'>
              <div className='col-sm-12'>
                <DepositeHistory paidDeposites={paidDeposites} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

Deposite.propTypes = {
  addPlan: PropTypes.func.isRequired,
  addNotification: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  plans: state.plans,
});

export default connect(mapStateToProps, {addPlan, addNotification})(
  withRouter(Deposite)
);

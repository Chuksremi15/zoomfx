import React, {useEffect, useState} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import SideNav from '../layout/SideNav';
import PropTypes from 'prop-types';
import {getPlan, updatePlan} from '../../actions/plan';
import Spinner from '../layout/Spinner';
import Moment from 'react-moment';
import {deletePlan} from '../../actions/plan';

const EditUserPlan = ({
  match: {params},
  getPlan,
  updatePlan,
  deletePlan,
  plans: {plan, planLoading},
  history,
}) => {
  const [formData, setFormData] = useState({
    investmentplan: '',
    capital: '',
    rate: '',
    interest: '',
    amountaccrue: '',
    pendingplan: false,
    pendingwithdrawal: false,
    activeplan: false,
    dueplan: false,
    paiddeposite: false,
    paidwithdrawal: false,
    payoutdate: '',
    withdrawaldate: '',
    depositedate: '',
  });

  useEffect(() => {
    getPlan(params.id);
    setFormData({
      investmentplan:
        planLoading || !plan.investmentplan ? '' : plan.investmentplan,
      capital: planLoading || !plan.capital ? '' : plan.capital,
      rate: planLoading || !plan.rate ? '' : plan.rate,
      interest: planLoading || !plan.interest ? '' : plan.interest,
      amountaccrue: planLoading || !plan.amountaccrue ? '' : plan.amountaccrue,
      pendingplan: planLoading || !plan.pendingplan ? false : true,
      pendingwithdrawal: planLoading || !plan.pendingwithdrawal ? false : true,
      activeplan: planLoading || !plan.activeplan ? false : true,
      dueplan: planLoading || !plan.dueplan ? false : true,
      paiddeposite: planLoading || !plan.paiddeposite ? false : true,
      paidwithdrawal: planLoading || !plan.paidwithdrawal ? false : true,
      payoutdate: planLoading || !plan.payoutdate ? '' : plan.payoutdate,
      withdrawaldate:
        planLoading || !plan.withdrawaldate ? '' : plan.withdrawaldate,
      depositedate: planLoading || !plan.depositedate ? '' : plan.depositedate,
    });
  }, [planLoading]);

  const {
    investmentplan,
    capital,
    rate,
    interest,
    amountaccrue,
    pendingplan,
    pendingwithdrawal,
    activeplan,
    dueplan,
    paiddeposite,
    paidwithdrawal,
    payoutdate,
    withdrawaldate,
    depositedate,
  } = formData;

  const handleSelect = (selectedItem) => {
    for (let i = 0; i < selectedItem.length; i++) {
      setFormData({...formData, investmentplan: selectedItem[i].value});
    }
  };

  const onChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const onSubmit = (e) => {
    e.preventDefault();

    updatePlan(formData, params.id);
    getPlan(params.id);
  };

  return planLoading ? (
    <Spinner />
  ) : (
    <div>
      <SideNav />

      <section>
        <div className='content-page'>
          <div className='col-sm-12 mt-4 py-2 bg-light'>
            <h2 className='page-title'>
              <i className='fa fa-gear'></i> Admin
            </h2>
          </div>

          <div className='content mt-4'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-3 mr-auto mb-2'>
                  <Link
                    to={`/user/${plan.user._id}`}
                    className='mybtn btn-primary btn-block'
                  >
                    <i className='fa fa-arrow-left'></i> User
                  </Link>
                </div>

                <div className='col-md-3'>
                  <a
                    onClick={(e) => deletePlan(plan._id, history, true)}
                    className='mybtn btn-danger btn-block'
                  >
                    <i className='fa fa-times'></i> Delete Investment
                  </a>
                </div>
              </div>
            </div>
          </div>

          <section className='my-4 details-section'>
            <div className='row m-2 containerr'>
              <div className='col-sm-12'>
                <div className='card form-card'>
                  <div className='my-3'>
                    <h2 className='float-left'>Update User Investment plan</h2>
                    <h2 className='float-right'>
                      Date: <Moment format='YYYY/MM/DD'>{plan.Date}</Moment>
                    </h2>
                  </div>

                  <form onSubmit={(e) => onSubmit(e)}>
                    <div className='form-group-grid'>
                      <div>
                        <div className='form-group'>
                          <label>Plan</label>

                          <select
                            className='custom-select'
                            name='investmentplan'
                            value={investmentplan}
                            onChange={(e) => {
                              handleSelect(e.target.selectedOptions);
                            }}
                            multiple={false}
                            required
                          >
                            <option value=''></option>
                            <option value='Gold'>Gold</option>
                            <option value='Premium'>Premium</option>
                          </select>
                        </div>
                        <div className='form-group'>
                          <label>Capital(₦)</label>
                          <input
                            className='form-control'
                            type='number'
                            name='capital'
                            value={capital}
                            onChange={(e) => onChange(e)}
                            required
                          />
                        </div>
                        <div className='form-group'>
                          <label>Rate(%)</label>

                          <input
                            className='form-control'
                            type='number'
                            name='rate'
                            value={rate}
                            onChange={(e) => onChange(e)}
                            required
                          />
                        </div>

                        <div className='form-group'>
                          <label>Interest(₦)</label>
                          <input
                            className='form-control'
                            type='number'
                            name='interest'
                            value={interest}
                            onChange={(e) => onChange(e)}
                            required
                          />
                        </div>
                        <div className='form-group'>
                          <label>Payout(₦)</label>
                          <input
                            className='form-control'
                            type='number'
                            name='amountaccrue'
                            value={amountaccrue}
                            onChange={(e) => onChange(e)}
                            required
                          />
                        </div>
                      </div>
                      <div>
                        <div className='form-check'>
                          <input
                            className='form-check-input'
                            type='checkbox'
                            name='pendingplan'
                            checked={pendingplan}
                            value={pendingplan}
                            onChange={(e) => {
                              setFormData({
                                ...formData,
                                pendingplan: !pendingplan,
                              });
                            }}
                          />
                          <label className='display-20'>
                            Pending Investment
                          </label>
                        </div>

                        <div className='form-check'>
                          <input
                            className='form-check-input'
                            type='checkbox'
                            name='activeplan'
                            checked={activeplan}
                            value={activeplan}
                            onChange={(e) => {
                              setFormData({
                                ...formData,
                                activeplan: !activeplan,
                              });
                            }}
                          />
                          <label className='display-20'>
                            Active Investment
                          </label>
                        </div>
                        <div className='form-check'>
                          <input
                            className='form-check-input'
                            type='checkbox'
                            name='dueplan'
                            checked={dueplan}
                            value={dueplan}
                            onChange={(e) => {
                              setFormData({...formData, dueplan: !dueplan});
                            }}
                          />
                          <label className='display-20'>Due Investment</label>
                        </div>
                        <div className='form-check'>
                          <input
                            className='form-check-input'
                            type='checkbox'
                            name='paiddeposite'
                            checked={paiddeposite}
                            value={paiddeposite}
                            onChange={(e) => {
                              setFormData({
                                ...formData,
                                paiddeposite: !paiddeposite,
                              });
                            }}
                          />
                          <label className='display-20'>Paid Deposite</label>
                        </div>
                        <div className='form-check'>
                          <input
                            className='form-check-input'
                            type='checkbox'
                            name='paidwithdrawal'
                            checked={paidwithdrawal}
                            value={paidwithdrawal}
                            onChange={(e) => {
                              setFormData({
                                ...formData,
                                paidwithdrawal: !paidwithdrawal,
                              });
                            }}
                          />
                          <label className='display-20'>Paid Withdrawal</label>
                        </div>
                        <div className='form-check'>
                          <input
                            className='form-check-input'
                            type='checkbox'
                            name='pendingwithdrawal'
                            checked={pendingwithdrawal}
                            value={pendingwithdrawal}
                            onChange={(e) => {
                              setFormData({
                                ...formData,
                                pendingwithdrawal: !pendingwithdrawal,
                              });
                            }}
                          />
                          <label className='display-20'>
                            Pending Withdrawal
                          </label>
                        </div>
                        <div className='form-group'>
                          <label>
                            Paid Deposite Date:{' '}
                            <Moment format='YYYY/MM/DD'>
                              {plan.depositedate}
                            </Moment>
                          </label>
                          <input
                            className='form-control'
                            type='date'
                            name='depositedate'
                            value={depositedate}
                            onChange={(e) => onChange(e)}
                          />
                        </div>
                        <div className='form-group'>
                          <label>
                            Paid Withdrawal Date:{' '}
                            <Moment format='YYYY/MM/DD'>
                              {plan.withdrawaldate}
                            </Moment>
                          </label>
                          <input
                            className='form-control'
                            type='date'
                            name='withdrawaldate'
                            value={withdrawaldate}
                            onChange={(e) => onChange(e)}
                          />
                        </div>
                        <div className='form-group'>
                          <label>
                            Payout Date:{' '}
                            <Moment format='YYYY/MM/DD'>
                              {plan.payoutdate}
                            </Moment>
                          </label>
                          <input
                            className='form-control'
                            type='date'
                            name='payoutdate'
                            value={payoutdate}
                            onChange={(e) => onChange(e)}
                          />
                        </div>
                      </div>
                    </div>

                    <input
                      type='submit'
                      className='mybtn form-control align-self-center'
                      value='Update'
                    />
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

EditUserPlan.propTypes = {
  getPlan: PropTypes.func.isRequired,
  updatePlan: PropTypes.func.isRequired,
  deletePlan: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  plans: state.plans,
});

export default connect(mapStateToProps, {getPlan, updatePlan, deletePlan})(
  withRouter(EditUserPlan)
);

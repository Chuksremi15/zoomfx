import React, {useState} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import SideNav from '../layout/SideNav';
import PropTypes from 'prop-types';
import {addAccount} from '../../actions/account';

const AddAccount = ({addAccount, history}) => {
  const [formData, setFormData] = useState({
    accountname: '',
    accountnumber: '',
    bankname: '',
  });

  const handleSelect = (selectedItem) => {
    for (let i = 0; i < selectedItem.length; i++) {
      setFormData({...formData, bankname: selectedItem[i].value});
    }
  };

  const {accountname, accountnumber, bankname} = formData;

  const onChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addAccount(formData, history);
  };

  return (
    <div>
      <SideNav />
      <section>
        <div className='content-page'>
          <div className='col-sm-12 mt-5'>
            <h2 className='page-title'>
              <i className='fa fa-gear'></i> Add Account Details
            </h2>
          </div>

          <section id='action' className='py-2 mb-2 '>
            <div className='container'>
              <div className='row'>
                <div className='col-md-3 mr-auto'>
                  <Link
                    to='/profile'
                    className='mybtn bg-light text-dark btn-block'
                  >
                    <i className='fa fa-arrow-left'></i> Back To Profile
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <div className='content deposite'>
            <div className='row'>
              <div className='col-sm-12'>
                <div className='deposite-form'>
                  <div className='card mycard'>
                    <div className='card-body'>
                      <h4 className='mt-0 header-title'>Add Account Details</h4>
                      <p className='small'>
                        Details Entered will be the account payout will be made
                        to
                      </p>

                      <form onSubmit={onSubmit}>
                        <div className='form-group'>
                          <label>Account Name</label>
                          <input
                            type='text'
                            name='accountname'
                            className='form-control'
                            placeholder='Enter account name'
                            value={accountname}
                            onChange={(e) => onChange(e)}
                            required
                          />
                        </div>
                        <div className='form-group'>
                          <label>Account Number</label>
                          <input
                            type='text'
                            pattern='[0-9]*'
                            name='accountnumber'
                            className='form-control'
                            placeholder='Enter account number'
                            value={accountnumber}
                            onChange={(e) => onChange(e)}
                            required
                          />
                        </div>
                        <div className='form-group'>
                          <label>Bank Name</label>
                          <select
                            className='custom-select'
                            name='backname'
                            value={bankname}
                            onChange={(e) => {
                              handleSelect(e.target.selectedOptions);
                            }}
                            multiple={false}
                            required
                          >
                            <option value=''></option>
                            <option value='Access Bank'>Access Bank</option>
                            <option value='Fidelity Bank'>Fidelity Bank</option>

                            <option value='First City Monument'>
                              First City Monument
                            </option>
                            <option value='First Bank'>First Bank</option>
                            <option value='Guaranty Trust Bank'>
                              Guaranty Trust Bank
                            </option>
                            <option value='Union Bank'>Union Bank</option>
                            <option value='United Bank Africa'>
                              United Bank Africa
                            </option>
                            <option value='Zenith Bank'>Zenith Bank</option>
                            <option value='Citibank'>Citibank</option>
                            <option value='Ecobank Bank'>Ecobank Bank</option>
                            <option value='Heritage Bank'>Heritage Bank</option>
                            <option value='Polaris Bank'>Polaris Bank</option>
                            <option value='Stanbic IBTC Bank'>
                              Stanbic IBTC Bank
                            </option>
                            <option value='Standard Chartered Bank'>
                              Standard Chartered Bank
                            </option>
                            <option value='Sterling Bank'>Sterling Bank</option>
                            <option value='Titan Trust Bank'>
                              Titan Trust Bank
                            </option>
                            <option value='Unity Bank'>Unity Bank </option>
                            <option value='Wema Bank'>Wema Bank</option>
                          </select>
                        </div>

                        <div className='form-group'>
                          <input
                            type='submit'
                            className='mybtn form-control'
                            value='Add'
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

AddAccount.propTypes = {
  addAccount: PropTypes.func.isRequired,
};

export default connect(null, {addAccount})(withRouter(AddAccount));

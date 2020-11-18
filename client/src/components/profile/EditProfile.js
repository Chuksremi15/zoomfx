import React, {Profiler, useEffect, useState} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import SideNav from '../layout/SideNav';
import PropTypes from 'prop-types';
import {updatePassword} from '../../actions/auth';
import {setAlert} from '../../actions/alert';

const EditProfile = ({updatePassword, setAlert, history}) => {
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    newPassword2: '',
  });

  const {currentPassword, newPassword, newPassword2} = formData;

  const onChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (newPassword !== newPassword2) {
      setAlert('New password does not match', 'danger');
    } else {
      updatePassword(formData, history);
      //   console.log(formData);
    }
  };

  return (
    <div>
      <SideNav />
      <section>
        <div className='content-page'>
          <div className='col-sm-12 mt-5'>
            <h2 className='page-title'>
              <i className='fa fa-gear'></i> Update User Details
            </h2>
          </div>

          <section id='action' className='py-2 mb-2 '>
            <div className='container'>
              <div className='row'>
                <div className='col-md-3 mr-auto mb-2'>
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
                      <h4 className='mt-0 header-title'>Change Password</h4>

                      <form onSubmit={onSubmit}>
                        <div className='form-group'>
                          <label>Current Password</label>
                          <input
                            type='password'
                            name='currentPassword'
                            className='form-control'
                            placeholder='Enter current password'
                            value={currentPassword}
                            onChange={(e) => onChange(e)}
                            required
                          />
                        </div>
                        <div className='form-group'>
                          <label>New Password</label>
                          <input
                            type='password'
                            name='newPassword'
                            className='form-control'
                            placeholder='Enter New password'
                            value={newPassword}
                            onChange={(e) => onChange(e)}
                            required
                          />
                        </div>
                        <div className='form-group'>
                          <label>Confirm New Password</label>
                          <input
                            type='password'
                            name='newPassword2'
                            className='form-control'
                            placeholder='Confirm new password'
                            value={newPassword2}
                            onChange={(e) => onChange(e)}
                            required
                          />
                        </div>

                        <div className='form-group'>
                          <input
                            type='submit'
                            className='mybtn form-control'
                            value='Update'
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

EditProfile.propTypes = {
  updatePassword: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
};

export default connect(null, {updatePassword, setAlert})(
  withRouter(EditProfile)
);

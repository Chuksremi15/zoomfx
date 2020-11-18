import React, {Fragment, useState} from 'react';
import {Link, withRouter} from 'react-router-dom';

import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {getPasswordResetLink} from '../../actions/auth';

const ForgotPassword = (props) => {
  const [formData, setFormData] = useState({
    email: '',
  });

  const {email} = formData;

  const onChange = (e) =>
    setFormData({...formData, [e.target.name]: e.target.value});

  const onSubmit = async (e) => {
    e.preventDefault();
    props.getPasswordResetLink(formData, props.history);
  };

  return (
    <div>
      <section className='sign-section'>
        <Link to='/'>
          <img
            src='/img/logo/logo.png'
            className='img-fluid d-flex align-self-center'
          />
        </Link>
        <div className='sign-form'>
          <h4 className='mt-0 header-title text-center pb-2'>
            Enter email to recieve password reset link
          </h4>
          <div className='card'>
            <div className='card-body'>
              <form className='form' onSubmit={(e) => onSubmit(e)}>
                <div className='form-group'>
                  <label>Email</label>
                  <input
                    type='email'
                    className='form-control'
                    name='email'
                    placeholder='Enter email'
                    value={email}
                    onChange={(e) => onChange(e)}
                    required
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='submit'
                    className='mybtn form-control'
                    value='Get Link'
                  />
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className='sign-form'>
          <div className='text-card text-center'>
            <p>
              New to Zoomfx? <Link to='/signup'> Create an account</Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

ForgotPassword.propTypes = {
  getPasswordResetLink: PropTypes.func.isRequired,
};

export default connect(null, {getPasswordResetLink})(
  withRouter(ForgotPassword)
);

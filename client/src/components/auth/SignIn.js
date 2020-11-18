import React, {Fragment, useState} from 'react';
import {Link, withRouter} from 'react-router-dom';

import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {login} from '../../actions/auth';

const SignIn = (props) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const {email, password} = formData;

  const onChange = (e) =>
    setFormData({...formData, [e.target.name]: e.target.value});

  const onSubmit = async (e) => {
    e.preventDefault();
    props.login(formData, props.history);
  };

  return (
    <div>
      <section class='sign-section'>
        <Link to='/'>
          <img
            src='/img/logo/logo.png'
            className='img-fluid d-flex align-self-center'
          />
        </Link>
        <div class='sign-form'>
          <h4 class='mt-0 header-title text-center pb-2'>Sign in to ZoomFx</h4>
          <div class='card'>
            <div class='card-body'>
              <form className='form' onSubmit={(e) => onSubmit(e)}>
                <div class='form-group'>
                  <label>Email</label>
                  <input
                    type='email'
                    class='form-control'
                    name='email'
                    placeholder='Enter email'
                    value={email}
                    onChange={(e) => onChange(e)}
                    required
                  />
                </div>
                <div class='form-group'>
                  <label>Password</label>
                  <Link to='/forgot-password' class='float-right'>
                    Forgot password?
                  </Link>
                  <input
                    type='password'
                    class='form-control'
                    name='password'
                    placeholder='Enter password'
                    value={password}
                    onChange={(e) => onChange(e)}
                    required
                  />
                </div>

                <div class='form-group'>
                  <input
                    type='submit'
                    class='mybtn form-control'
                    value='Sign in'
                  />
                </div>
              </form>
            </div>
          </div>
        </div>

        <div class='sign-form'>
          <div class='text-card text-center'>
            <p>
              New to Zoomfx? <Link to='/signup'> Create an account</Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

SignIn.propTypes = {
  login: PropTypes.func.isRequired,
};

export default connect(null, {login})(withRouter(SignIn));

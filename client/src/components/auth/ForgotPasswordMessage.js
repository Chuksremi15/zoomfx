import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const ForgotPasswordMessage = (props) => {
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
          <div className='card'>
            <div className='card-body'>
              <h5 className='header-title text-center '>
                Password reset link have been sent to email
              </h5>
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

ForgotPasswordMessage.propTypes = {};

export default ForgotPasswordMessage;

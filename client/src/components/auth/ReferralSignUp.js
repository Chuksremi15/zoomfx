import React, {useEffect, useState} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {setAlert} from '../../actions/alert';
import {register} from '../../actions/auth';
import PropTypes from 'prop-types';

import {getUser} from '../../actions/admin';

const ReferralSignUp = ({
  getUser,
  register,
  setAlert,
  history,
  match: {
    params: {id},
  },
  admin: {
    userLoading,
    user: {name, _id},
  },
}) => {
  useEffect(() => {
    getUser(id);

    setFormData({
      referralname:
        userLoading || !name ? '' : name.firstname + ' ' + name.lastname,
      referralid: userLoading || !_id ? '' : _id,
    });
  }, [userLoading]);

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    password2: '',
    referralname: '',
    referralid: '',
    phonenumber: '',
  });

  const {
    firstname,
    lastname,
    email,
    password,
    password2,
    referralname,
    referralid,
    phonenumber,
  } = formData;

  const onChange = (e) =>
    setFormData({...formData, [e.target.name]: e.target.value});

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      register(formData, history);
    }
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
          <h4 className='mt-0 header-title text-center mb-3'>
            Sign up to ZoomFx
          </h4>
          <div className='card m-b-30'>
            <div className='card-body'>
              <form onSubmit={onSubmit}>
                <div className='form-group'>
                  <label>First name</label>
                  <input
                    type='text'
                    name='firstname'
                    className='form-control'
                    placeholder='Enter first name'
                    value={firstname}
                    onChange={(e) => onChange(e)}
                    required
                  />
                </div>
                <div className='form-group'>
                  <label>Last name</label>
                  <input
                    type='text'
                    name='lastname'
                    className='form-control'
                    placeholder='Enter last name'
                    value={lastname}
                    onChange={(e) => onChange(e)}
                    required
                  />
                </div>
                <div className='form-group'>
                  <label>Email</label>
                  <input
                    type='email'
                    name='email'
                    className='form-control'
                    placeholder='Enter email'
                    value={email}
                    onChange={(e) => onChange(e)}
                    required
                  />
                </div>
                <div className='form-group'>
                  <label>Phone number</label>
                  <input
                    type='tel'
                    name='phonenumber'
                    className='form-control'
                    placeholder='Enter phone number'
                    value={phonenumber}
                    onChange={(e) => onChange(e)}
                    required
                  />
                </div>

                <div className='form-group'>
                  <label>Password</label>

                  <input
                    type='password'
                    name='password'
                    className='form-control'
                    placeholder='Enter password'
                    value={password}
                    onChange={(e) => onChange(e)}
                    required
                  />
                </div>
                <div className='form-group'>
                  <label>Confirm Password</label>

                  <input
                    type='password'
                    name='password2'
                    className='form-control'
                    placeholder='Confirm password'
                    value={password2}
                    onChange={(e) => onChange(e)}
                    required
                  />
                </div>

                <div className='form-group'>
                  <label>Referral Name</label>
                  <input
                    type='text'
                    name='referralname'
                    className='form-control'
                    placeholder='Enter first name'
                    value={referralname}
                    onChange={(e) => onChange(e)}
                    disabled
                    required
                  />
                </div>

                <div className='form-group'>
                  <input
                    type='submit'
                    className='mybtn form-control'
                    value='Sign up'
                  />
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className='sign-form'>
          <div className='text-card text-center'>
            <p>
              Already have an account? <Link to='/signin'> Sign in</Link>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

ReferralSignUp.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  getUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  admin: state.admin,
});

export default connect(mapStateToProps, {setAlert, register, getUser})(
  withRouter(ReferralSignUp)
);

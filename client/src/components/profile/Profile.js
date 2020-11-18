import React, {Fragment, useEffect, useRef, useState} from 'react';
import SideNav from '../layout/SideNav';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import {getAccount} from '../../actions/account';
import {setAlert} from '../../actions/alert';

const Profile = ({
  auth: {
    user: {name, email, _id, referralLink, phonenumber},
    loading,
  },
  match,
  location,

  account: {account},
  getAccount,
  setAlert,
}) => {
  useEffect(() => {
    getAccount();
  }, [getAccount]);

  const isEmpty = (obj) => {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) return false;
    }
    return true;
  };

  const textAreaRef = useRef(null);

  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand('copy');
    // This is just personal preference.
    // I prefer to not show the whole text area selected.
    e.target.focus();
    setAlert('Copied to clipboard', 'success');
  }

  return loading ? (
    <Spinner />
  ) : (
    <div>
      <SideNav />

      <section>
        <div class='content-page'>
          <div class='col-sm-12 mt-5'>
            <h2 class='page-title'>Profile Overview</h2>
          </div>

          <div class='content profile-content'>
            <div class='row container'>
              <div class='card'>
                <div>
                  <h2>Profile Details</h2>
                  <img
                    src='./img/icons/icons8-user-96.png'
                    alt=''
                    width='60'
                    height='60'
                  />
                </div>

                <h5 class='bg-light'>
                  Name: {name.firstname} {name.lastname}
                </h5>
                <h5>Email: {email}</h5>
                <h5 class='bg-light'>Phone: {phonenumber}</h5>

                <Link to='/edit-profile' class='mybtn'>
                  Edit Profile
                </Link>
              </div>

              <Fragment>
                {isEmpty(account) ? (
                  <div class='card'>
                    <div>
                      <h2 class='float-left'>Account Details</h2>
                      <img
                        src='./img/icons/icons8-wallet-96.png'
                        alt=''
                        class='float-right'
                        width='60'
                        height='60'
                      />
                    </div>

                    <h5 class='bg-light'>
                      You have not yet added an account detail, please click on
                      the button below to add
                    </h5>

                    <Link to='/add-account' class='mybtn'>
                      Add Account
                    </Link>
                  </div>
                ) : (
                  <div class='card'>
                    <div>
                      <h2 class='float-left'>Account Info</h2>
                      <img
                        src='./img/icons/icons8-wallet-96.png'
                        alt=''
                        class='float-right'
                        width='60'
                        height='60'
                      />
                    </div>

                    <h5 class='bg-light'>
                      Account Name: {account.accountname}
                    </h5>
                    <h5 class='d-inline'>
                      Account Number: {account.accountnumber}
                    </h5>

                    <h5 class='bg-light'>Bank Name: {account.bankname}</h5>
                    <Link to='edit-account' class='mybtn'>
                      Edit Account
                    </Link>
                  </div>
                )}
              </Fragment>
            </div>

            <div class='row container'>
              <div class='card'>
                <form
                  action='
                '
                >
                  <div className='form-group'>
                    <h4>Refferal Link</h4>
                    <textarea
                      className='form-control'
                      ref={textAreaRef}
                      value={referralLink + _id}
                    />
                  </div>
                </form>

                <a onClick={(e) => copyToClipboard(e)} class='mybtn'>
                  Copy
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

Profile.propTypes = {
  getAccount: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  account: state.account,
});

export default connect(mapStateToProps, {getAccount, setAlert})(Profile);

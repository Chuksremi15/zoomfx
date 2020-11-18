import React, {useEffect} from 'react';
import {Link, withRouter} from 'react-router-dom';
import SideNav from '../layout/SideNav';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import {getUser} from '../../actions/admin';
import {getAccountById} from '../../actions/account';
import {getUserPlansById} from '../../actions/plan';
import {getNotification, deleteNotification} from '../../actions/notification';
import Moment from 'react-moment';

const User = ({
  getUser,
  getAccountById,
  getUserPlansById,
  getNotification,
  deleteNotification,
  match: {
    params: {id},
  },
  admin: {
    userLoading,
    user: {name, email, phonenumber},
  },
  account: {account},
  notifications: {depositeNotification, withdrawalNotification},
  plans: {plans},
}) => {
  useEffect(() => {
    getUser(id);
    getAccountById(id);
    getUserPlansById(id);
    getNotification(id);
  }, [getUser]);

  const isEmpty = (obj) => {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) return false;
    }
    return true;
  };

  return userLoading ? (
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

          <div className='content my-4'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-3'>
                  <Link to='/admin' className='mybtn btn-primary btn-block'>
                    <i className='fa fa-arrow-left'> Admin</i>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className='content admin-profile-content'>
            <div className='row container'>
              <div className='card '>
                <div className='heading'>
                  <h2 className='float-left'>Profile Details</h2>
                  <img
                    className='float-right'
                    src='/img/icons/icons8-user-96.png'
                    alt=''
                    width='60'
                    height='60'
                  />
                </div>

                <h5 className='bg-light'>
                  Name: {name.firstname} {name.lastname}
                </h5>
                <h5>Email: {email}</h5>
                <h5>Phone: {phonenumber}</h5>

                <a href='' className='mybtn'>
                  Edit Profile
                </a>
              </div>

              {isEmpty(account) ? (
                <div className='card'>
                  <div>
                    <h2 className='float-left'>Account Details</h2>
                    <img
                      src='/img/icons/icons8-wallet-96.png'
                      alt=''
                      className='float-right'
                      width='60'
                      height='60'
                    />
                  </div>

                  <h5 className='bg-light'>
                    You have not yet added an account detail, please click on
                    the button below to add{' '}
                  </h5>

                  <Link to='/add-account' className='mybtn'>
                    Add Account
                  </Link>
                </div>
              ) : (
                <div className='card'>
                  <div>
                    <h2 className='float-left'>Account Info</h2>
                    <img
                      src='/img/icons/icons8-wallet-96.png'
                      alt=''
                      className='float-right'
                      width='60'
                      height='60'
                    />
                  </div>

                  <h5 className='bg-light'>
                    Account Name: {account.accountname}
                  </h5>
                  <h5 className='d-inline'>
                    Account Number: {account.accountnumber}
                  </h5>

                  <h5 className='bg-light'>Bank Name: {account.bankname}</h5>
                  <Link to='edit-account' className='mybtn'>
                    Edit Account
                  </Link>
                </div>
              )}
            </div>
          </div>

          <div className='content admin-profile-content'>
            <div className='row container'>
              <div className='card'>
                <div>
                  <h4>Deposite Notifications</h4>
                </div>
                <div className='table-responsive'>
                  <table className='table table-striped'>
                    <thead>
                      <tr>
                        <th scope='col'>Message</th>

                        <th scope='col'>Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {depositeNotification.length > 0 &&
                        depositeNotification.map(($depositeNotification) => (
                          <tr key={$depositeNotification._id}>
                            <td>{$depositeNotification.text}</td>

                            <td>
                              <Moment format='YYYY/MM/DD'>
                                {$depositeNotification.Date}
                              </Moment>
                            </td>
                            <td>
                              <a
                                onClick={(e) =>
                                  deleteNotification(
                                    $depositeNotification._id,
                                    e
                                  )
                                }
                              >
                                <i className='fa fa-times'></i>
                              </a>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className='card'>
                <div>
                  <h4>Withdrawal Notifications</h4>
                </div>

                <div className='table-responsive'>
                  <table className='table table-striped'>
                    <thead>
                      <tr>
                        <th scope='col'>Message</th>

                        <th scope='col'>Date</th>
                      </tr>
                    </thead>

                    <tbody>
                      {withdrawalNotification.length > 0 &&
                        withdrawalNotification.map(
                          ($withdrawalNotification) => (
                            <tr key={$withdrawalNotification._id}>
                              <td>{$withdrawalNotification.text}</td>

                              <td>
                                <Moment format='YYYY/MM/DD'>
                                  {$withdrawalNotification.Date}
                                </Moment>
                              </td>
                              <td>
                                <a
                                  onClick={(e) =>
                                    deleteNotification(
                                      $withdrawalNotification._id,
                                      e
                                    )
                                  }
                                >
                                  <i className='fa fa-times'></i>
                                </a>
                              </td>
                            </tr>
                          )
                        )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className='content admin-profile-content my-4'>
            <div className='investments container'>
              <div className='card'>
                <div>
                  <h4>Investment</h4>
                </div>
                <div className='table-responsive'>
                  <table className='table table-striped'>
                    <thead>
                      <tr>
                        <th scope='col'>View Details</th>
                        <th scope='col'>Plan</th>
                        <th scope='col'>Princinpal</th>
                        <th scope='col'>Payout</th>

                        <th scope='col'>Date(payout)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {plans.length > 0 &&
                        plans.map((plan) => (
                          <tr key={plan._id}>
                            <td>
                              <Link
                                to={`/userplan/${plan._id}`}
                                className='mybtn'
                              >
                                Details{' '}
                              </Link>
                            </td>

                            <td>{plan.investmentplan}</td>
                            <td>₦{plan.capital}</td>
                            <td>₦{plan.amountaccrue}</td>
                            <td>
                              <Moment format='YYYY/MM/DD'>{plan.Date}</Moment>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

User.propTypes = {
  getUser: PropTypes.func.isRequired,
  getAccountById: PropTypes.func.isRequired,
  getUserPlansById: PropTypes.func.isRequired,
  getNotification: PropTypes.func.isRequired,
  deleteNotification: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  admin: state.admin,
  account: state.account,
  notifications: state.notifications,
  plans: state.plans,
});

export default connect(mapStateToProps, {
  getUser,
  getAccountById,
  getNotification,
  getUserPlansById,
  deleteNotification,
})(User);

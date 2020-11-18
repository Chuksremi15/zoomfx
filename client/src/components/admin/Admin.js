import React, {useEffect} from 'react';
import SideNav from '../layout/SideNav';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import {getUsers} from '../../actions/admin';
import Users from './Users';

const Admin = ({getUsers, admin: {users, usersLoading}}) => {
  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const isEmpty = (obj) => {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) return false;
    }
    return true;
  };

  return usersLoading ? (
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
                <div className='col-md-3'>
                  <a href='#' className='btn btn-primary btn-block'>
                    <i className='fa fa-plus'></i> Add User
                  </a>
                </div>
                <div className='col-md-3'>
                  <a href='#' className='btn btn-success btn-block'>
                    <i className='fa fa-plus'></i> Add Plan
                  </a>
                </div>
                <div className='col-md-3'>
                  <a href='#' className='btn btn-warning btn-block'>
                    <i className='fa fa-plus'></i> Add User
                  </a>
                </div>
              </div>
            </div>
          </div>
          {isEmpty(users) ? (
            <div>No active user</div>
          ) : (
            <Users data={users.data} />
          )}
        </div>
      </section>
    </div>
  );
};

Admin.propTypes = {
  getUsers: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  admin: state.admin,
});

export default connect(mapStateToProps, {getUsers})(Admin);

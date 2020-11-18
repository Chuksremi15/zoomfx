import React, {useState} from 'react';
import {Link, NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {logout} from '../../actions/auth';

const SideNav = ({logout}) => {
  const [navData, setNavData] = useState({
    isactive: false,
    active: false,
  });

  const {isactive, active} = navData;

  const handleToggle = () => {
    setNavData({...navData, isactive: !isactive, active: !active});
  };

  return (
    <div>
      <div className='topbar'>
        <div className='topbar-left'>
          <Link to='/account-overview'>
            <img
              src='/img/logo/logo.png'
              className='img-fluid mb-4 ml-2 mr-2 logo-light'
              width='150'
            />

            <div className='d-inline logo-sm'>
              <i className='fas fa-home'></i>
            </div>
          </Link>
        </div>
      </div>

      <div
        onClick={handleToggle}
        className={isactive ? 'isactive pad-toggle' : 'pad-toggle'}
        id='pad-menu'
      >
        <span className='bar'></span>
        <span className='bar'></span>
        <span className='bar'></span>
      </div>

      <section>
        <div className={active ? 'active side-menu' : 'side-menu'}>
          <div id='sidebar-menu'>
            <ul id='side-menu'>
              <li className='menu-title'>Menu</li>
              <li>
                <NavLink to='/account-overview' activeClassName='mm-active'>
                  <i class='fas fa-coins'></i>
                  <span> Account Overview</span>
                </NavLink>
              </li>

              <li>
                <NavLink to='/profile' activeClassName='mm-active'>
                  <i className='fas fa-user'></i>
                  <span> Profile</span>
                </NavLink>
              </li>

              <li>
                <NavLink to='/plans' activeClassName='mm-active'>
                  <i class='fas fa-money-bill-alt'></i>
                  <span> Plans</span>
                </NavLink>
              </li>

              <li>
                <NavLink to='/deposite' activeClassName='mm-active'>
                  <i className='fas fa-hand-holding-usd'></i>
                  <span> Deposit</span>
                </NavLink>
              </li>

              <li>
                <NavLink to='/withdraw' activeClassName='mm-active'>
                  <i className='fas fa-donate'></i>
                  <span> Withdraw</span>
                </NavLink>
              </li>

              <li>
                <NavLink to='/support' activeClassName='mm-active'>
                  <i className='fas fa-mail-bulk'></i>
                  <span> Customer Support</span>
                </NavLink>
              </li>

              <li>
                <a onClick={logout}>
                  <i className='fas fa-power-off'></i>
                  <span> Logout</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

SideNav.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default connect(null, {logout})(SideNav);

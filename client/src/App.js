import React, {Fragment, useEffect} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Landing from './components/layout/Landing';
import SignUp from './components/auth/SignUp';
import ReferralSignUp from './components/auth/ReferralSignUp';
import SignIn from './components/auth/SignIn';
import ForgotPassword from './components/auth/ForgotPassword';
import ForgotPasswordMessage from './components/auth/ForgotPasswordMessage';
import Alert from './components/layout/Alert';
import AccountOverview from './components/accountoverview/AccountOverview';
import Profile from './components/profile/Profile';
import EditProfile from './components/profile/EditProfile';
import Plans from './components/plans/Plans';
import Plan from './components/plan/Plan';
import Deposite from './components/deposite/Deposite';
import DepositeRequest from './components/deposite/DepositeRequest';
import DepositeRequestID from './components/deposite/DepositeRequestID';
import AddAccount from './components/account/AddAccount';
import EditAccount from './components/account/EditAccount';
import Withdraw from './components/withdraw/Withdraw';
import WithdrawRequest from './components/withdraw/WithdrawRequest';
import NotAuthorize from './components/notauthorize/Notauthorize';
import Admin from './components/admin/Admin';
import User from './components/admin/User';
import EditUserPlan from './components/admin/EditUserPlan';
import Support from './components/support/Support';

//Protected Route
import PrivateRoute from './components/routing/PrivateRoute';
import AdminRoute from './components/routing/AdminRoute';

import './App.css';
import './Style.css';

// Redux
import {Provider} from 'react-redux';
import store from './store';
import {loadUser} from './actions/auth';
import setAuthToken from './utils/setAuthToken';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Route exact path='/' component={Landing} />
        <Alert />
        <Route exact path='/signup' component={SignUp} />
        <Route exact path='/signup/:id' component={ReferralSignUp} />
        <Route exact path='/signin' component={SignIn} />
        <Route exact path='/forgot-password' component={ForgotPassword} />
        <Route
          exact
          path='/forgot-password-message'
          component={ForgotPasswordMessage}
        />
        <PrivateRoute
          exact
          path='/account-overview'
          component={AccountOverview}
        />
        <PrivateRoute exact path='/profile' component={Profile} />
        <PrivateRoute exact path='/edit-profile' component={EditProfile} />
        <PrivateRoute exact path='/plans' component={Plans} />
        <PrivateRoute exact path='/plan/:id' component={Plan} />
        <PrivateRoute exact path='/deposite' component={Deposite} />
        <PrivateRoute
          exact
          path='/deposite-request'
          component={DepositeRequest}
        />
        <PrivateRoute
          exact
          path='/deposite-request/:id'
          component={DepositeRequestID}
        />
        <PrivateRoute exact path='/add-account' component={AddAccount} />
        <PrivateRoute exact path='/not-authorize' component={NotAuthorize} />
        <PrivateRoute exact path='/edit-account' component={EditAccount} />
        <PrivateRoute exact path='/withdraw' component={Withdraw} />
        <PrivateRoute
          exact
          path='/withdraw-request'
          component={WithdrawRequest}
        />
        <PrivateRoute exact path='/support' component={Support} />
        <AdminRoute exact path='/admin' component={Admin} />
        <AdminRoute exact path='/user/:id' component={User} />
        <AdminRoute exact path='/userplan/:id' component={EditUserPlan} />
      </Router>
    </Provider>
  );
};

export default App;

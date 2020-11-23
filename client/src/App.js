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
        <Switch>
          <Route path='/signup' component={SignUp} />
          <Route path='/signup/:id' component={ReferralSignUp} />
          <Route path='/signin' component={SignIn} />
          <Route path='/forgot-password' component={ForgotPassword} />
          <Route
            path='/forgot-password-message'
            component={ForgotPasswordMessage}
          />

          <PrivateRoute path='/account-overview' component={AccountOverview} />
          <PrivateRoute path='/profile' component={Profile} />
          <PrivateRoute path='/edit-profile' component={EditProfile} />
          <PrivateRoute path='/plans' component={Plans} />
          <PrivateRoute path='/plan/:id' component={Plan} />
          <PrivateRoute path='/deposite' component={Deposite} />
          <PrivateRoute path='/deposite-request' component={DepositeRequest} />
          <PrivateRoute
            path='/deposite-request/:id'
            component={DepositeRequestID}
          />
          <PrivateRoute path='/add-account' component={AddAccount} />
          <PrivateRoute path='/not-authorize' component={NotAuthorize} />
          <PrivateRoute path='/edit-account' component={EditAccount} />
          <PrivateRoute path='/withdraw' component={Withdraw} />
          <PrivateRoute path='/withdraw-request' component={WithdrawRequest} />
          <PrivateRoute path='/support' component={Support} />
          <AdminRoute path='/admin' component={Admin} />
          <AdminRoute path='/user/:id' component={User} />
          <AdminRoute path='/userplan/:id' component={EditUserPlan} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;

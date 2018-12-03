/*jshint esversion: 6 */

import React from 'react';
import {Route } from 'react-router-dom';
import { connect } from 'react-redux';
import cx from 'classnames';
import { setMobileNavVisibility } from '../../reducers/Layout';
import { setUserInfoState } from '../../reducers/Auth';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import Switch from 'react-router-dom/Switch';


import Header from './Header';
import Footer from './Footer';
import SideBar from '../../components/SideBar';
// import ThemeOptions from '../../components/ThemeOptions';
// import MobileMenu from '../../components/MobileMenu';
/**
 * Pages
 */
import Dashboard from '../Dashboard';
import Components from '../Components';
import UserProfile from '../UserProfile';
import MapsPage from '../MapsPage';
import Forms from '../Forms';
import Charts from '../Charts';
import Calendar from '../Calendar';
import Tables from '../Tables';
import ItemBank from '../ItemBank';
import User from '../User';
import Login from '../Login/login';
import Logoff from '../Login/logoff';
// import { setTimeout } from 'core-js';

class Main extends React.Component {
  constructor(props) {
    super (props);
    let {
      user,
      setUserInfo,
      history
    } = this.props;

   

    this.state = {};
    
    this.submit = async function (values) {
        // setTimeout(function () {return false}, 2000);
     var loginData = await axios({
        url: process.env.myBase + '/login/login',
        method: 'post',
        auth: {
          username: values.email,
          password: values.password
        },
      });

      loginData.then(function (response) {
        if (response.status === 201) {
          const data = response.data;
          user.name = values.email;
          user.jwt = data.token; 
          user.isLoggedIn = true;
          setUserInfo();
          history.push('/');
        }
      }).catch(function (error) {
        console.log(error);
      });
    };
  
  }

  render () {
    let {
      mobileNavVisibility,
      hideMobileMenu,
      user,
      history
    } = this.props;

    history.listen(() => {
      if (mobileNavVisibility === true) {
        hideMobileMenu();
      }
    });
  
    if (history.location.pathname === '/login') {
      if (!user.isLoggedIn) {
        return (<Login onSubmit={this.submit} />);
      } else {
        history.push('/');
      }
    } else if(history.location.pathname === '/logoff') {
      return <Logoff />
    } else {
      if (!user.isLoggedIn) {
        history.push('/login');
      }
    } 
    return (
      <div className={cx({
        'nav-open': mobileNavVisibility === true
      })}>
        <div className="wrapper">
          <div className="close-layer" onClick={hideMobileMenu}></div>
          <SideBar />
          <div className="main-panel">
            <Header />
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route path="/components" component={Components} />
              <Route path="/itembank" component={ItemBank} />
              <Route path="/profile" component={UserProfile} />
              <Route path="/forms" component={Forms} />
              <Route path="/tables" component={Tables} />
              <Route path="/maps" component={MapsPage} />
              <Route path="/charts" component={Charts} />
              <Route path="/calendar" component={Calendar} />
              <Route path="/user" component={User} />
              <Route path="/user" component={User} />
            </Switch>
            <Footer />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProp = state => ({
    mobileNavVisibility: state.Layout.mobileNavVisibility,
    user: state.Auth.user
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  hideMobileMenu: () => dispatch(setMobileNavVisibility(false)),
  setUserInfo: () => {
    dispatch(setUserInfoState());
  } 
});

export default withRouter(connect(mapStateToProp, mapDispatchToProps)(Main));
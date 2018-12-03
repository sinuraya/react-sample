import React from 'react';
import { setUserInfoState } from '../../reducers/Auth';
import { connect } from 'react-redux';
import {withRouter } from 'react-router-dom';

class Logoff extends React.Component {
    constructor(props) {
        super (props);
        this.state = {};
    }

    componentWillMount() {
        const user = this.props.user;
        const setUserInfo = this.props.setUserInfo;
        const history = this.props.history;
        user.isLoggedIn = false;
        user.name = '';
        user.jwt = '';
        setUserInfo();
        history.push('/login');
    }

    render() {
        return null;
    }
}

const mapStateToProp = state => ({
    user: state.Auth.user
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    setUserInfo: () => {
      dispatch(setUserInfoState());
    } 
  });
  
export default withRouter(connect(mapStateToProp, mapDispatchToProps)(Logoff));
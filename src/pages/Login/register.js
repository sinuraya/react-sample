import React from 'react';
import { setUserInfoState } from '../../reducers/Auth';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Field } from 'redux-form';
import renderField from 'components/FormInputs/renderField';
import axios from 'axios';



class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    submitData(values) {
        let { user,
            setUserInfo,
            history
        } = this.props;

        axios({
            url: process.env.myBase + '/vendor/register',
            method: 'post',
            body: {

            }
          })
          .then(function (response) {
            if (response.status === 201) {
              const data = response.data;
              user.name = values.email;
              user.jwt = data.token; 
              user.isLoggedIn = true;
              setUserInfo();
              history.push('/');
            }
          })
          .catch(function (error) {
            console.log(error);
          });
       
    }

    render() {

        return (
            <div className="container col-md-4 col-md-offset-4">
            <div className="header">
              <h4>Please Sign Up </h4>
            </div>
            <div className="content">
              <form onSubmit={this.submitData}>
                <div className="form-group">
                  <label className="control-label">Email</label>
                  <Field
                    name="email"
                    type="email"
                    component={renderField} />
                </div>
        
                <div className="form-group">
                  <label className="control-label">Password</label>
                  <Field
                    name="password"
                    type="password"
                    component={renderField} />
                </div>
        
                <button type="submit" className="btn btn-fill btn-info" disabled={submitting}>Submit</button>
              </form>
            </div>
          </div>
                    
        );
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

export default withRouter(connect(mapStateToProp, mapDispatchToProps)(Register));
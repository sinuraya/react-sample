import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import moment from 'moment';

class ViewUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id,
      data: {}
    };
  }

  componentDidMount() {
    const { user } = this.props;
    const self = this;
    const id = self.state.id;
    console.log(id);
    axios.get('/client/users/'+id, {
      baseURL: process.env.myBase,
      headers: { 
        'Authorization' : 'Bearer ' + user.jwt,
        'Content-Type' : 'application/json'
      },
      withCredentials: true

    })
      .then(function(response) {
        if (response.status === 200) {
          const userData = Object.assign({}, response.data.data);
          self.setState({ data: userData });
        }
      })
      .catch(function(error) {
        if (error.response) {
          console.log('error dengan status : ' + error.response.status);
        } else {
          console.log(error);
        }
      });
  }

  render() {
    const data = this.state.data;
    const tgl = Object.assign({}, data.created_at);
    return (
      <div className="card">
        <div className="content">
          <div className="col-md-5" />
          <table className="table table-hover table-striped">
            <tbody>
              <tr>
                <th>ID</th>
                <td>{this.state.id}</td>
              </tr>
              <tr>
                <th>Name</th>
                <td>{data.username}</td>
              </tr>
              <tr>
                <th>Email</th>
                <td>{data.email}</td>
              </tr>
              <tr>
                <th>Status</th>
                <td>{data.status}</td>
              </tr>
              <tr>
                <th>Created</th>
                <td>{moment(tgl.date).format('DD-MM-YYYY')}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProp = state => ({
  user: state.Auth.user
});

export default connect(mapStateToProp)(ViewUser);

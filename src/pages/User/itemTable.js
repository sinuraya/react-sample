import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import moment from 'moment';
import ViewButton from "./buttons/viewButton";
import EditButton from "./buttons/editButton";
import DeleteButton from "./buttons/deleteButton";

class UserTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  viewData(id) {
    window.location.href = window.location.href + "/view/" + id;
  }

  editData(id) {
    window.location.href = window.location.href + "/edit/" + id;
  }

  deleteData(id) {
    window.location.href = window.location.href + "/delete/" + id;
  }

  componentDidMount() {
    const { user } = this.props;
    const self = this;
    axios({
      url: "/client/users?p=1&ps=15",
      baseURL: process.env.myBase,
      method: "get",
      headers: { Authorization: "Bearer " + user.jwt }
    })
      .then(function(response) {
        if (response.status === 200) {
          const userData = response.data.data.map(i => i);
          self.setState({ data: userData });
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="card">
        <div className="header">
          <h4 className="title">User List</h4>
        </div>
        <div className="content col-md-12">
          <button className="btn btn-primary btn-fill">Add New</button>
        </div>
        <div className="content table-responsive table-full-width">
          <table className="table table-hover table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>User Name</th>
                <th>E-mail</th>
                <th>Status</th>
                <th>Created</th>
                <th>&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map(item => (
                <tr key={item.uid}>
                  <td>{item.uid}</td>
                  <td>
                    <ViewButton item={item} onClick={this.viewData} />
                  </td>
                  <td>{item.email}</td>
                  <td>{item.status}</td>
                  <td>{moment(item.created_at.date).format('DD-MM-YYYY')}</td>
                  <td>
                    <EditButton item={item} onClick={this.editData}>
                      <i className="fa fa-edit" />
                    </EditButton>
                    <DeleteButton item={item} onClick={this.deleteData}>
                      <i className="fa fa-trash" />
                    </DeleteButton>
                  </td>
                </tr>
              ))}
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

export default connect(mapStateToProp)(UserTable);

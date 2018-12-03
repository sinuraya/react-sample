import React from 'react';
import { Route } from 'react-router-dom';
import UserTable from './itemTable';
import ViewUser from './view'
import EditUser from './edit'
import DeleteUser from './delete'

const User = ({match}) => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-12">
        <Route exact path={`${match.url}/`} component={UserTable} />
        <Route path={`${match.url}/view/:id`} component={ViewUser} />
        <Route path={`${match.url}/edit/:id`} component={EditUser} />
        <Route path={`${match.url}/delete/:id`} component={DeleteUser} />
      </div>
    </div>
  </div>
);

export default User;

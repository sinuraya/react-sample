import React from 'react';
import { Route } from 'react-router-dom';
import ItemTable from './itemTable';
import ViewItemBank from './view'
import EditItemBank from './edit'
import DeleteItemBank from './delete'

const ItemBank = ({match}) => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-12">
        <Route exact path={`${match.url}/`} component={ItemTable} />
        <Route path={`${match.url}/view/:id`} component={ViewItemBank} />
        <Route path={`${match.url}/edit/:id`} component={EditItemBank} />
        <Route path={`${match.url}/delete/:id`} component={DeleteItemBank} />
      </div>
    </div>
  </div>
);

export default ItemBank;

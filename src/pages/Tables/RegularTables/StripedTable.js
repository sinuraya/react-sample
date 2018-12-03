import React from 'react';

const StripedTable = ({data}) => (
  <div className="card">
    <div className="header">
      <h4 className="title">Item Bank List</h4>
    </div>
    <div className="content table-responsive table-full-width">
      <table className="table table-hover table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Parent</th>
            <th>Category</th>
            <th>Created</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>$ {item.salary}</td>
              <td>{item.country}</td>
              <td>{item.city}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  </div>
);

export default StripedTable;
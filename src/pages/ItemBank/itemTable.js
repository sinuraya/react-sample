import React from 'react';
import getData from './data';

function viewData(data, e) {
	e.preventDefault();
	window.location.href = window.location.href + '/view/' + data.id;
}

function editData(data, e) {
	e.preventDefault();
	window.location.href = window.location.href + '/edit/' + data.id;
}

function deleteData(data, e) {
	e.preventDefault();
	window.location.href = window.location.href + '/delete/' + data.id;
}

const StripedTable = () => {
	const data = getData(10);

	return (
		<div className="card">
			<div className="header">
				<h4 className="title">Item Bank List</h4>
			</div>
			<div className="content col-md-12">
				<button className="btn btn-primary btn-fill">Add New</button>
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
						{data.map((item) => (
							<tr key={item.id}>
								<td>{item.id}</td>
								<td>
									<button className="btn btn-simple btn-default" onClick={(e) => viewData(item, e)}>
										{item.name}
									</button>
								</td>
								<td>{item.parent}</td>
								<td>{item.category}</td>
								<td>{item.created}</td>
								<td>
									<button className="btn btn-default btn-fill" onClick={(e) => editData(item, e)}>
										<i className="fa fa-edit" />
									</button>
									<button className="btn btn-default btn-fill" onClick={(e) => deleteData(item, e)}>
										<i className="fa fa-trash" />
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default StripedTable;

import React from 'react';

const Table = (props) => {
	return (
		<table className="table">
				<thead>
					<tr>
						<th>Id</th>
						<th>FirstName</th>
						<th>LastName</th>
						<th>Email</th>
						<th>Phone</th>
					</tr>
				</thead>
			
			<tbody>
				{props.smallData.map(
					item => (
						<tr key={item.id}>
							<td>{item.id}</td>
							<td>{item.firstName}</td>
							<td>{item.lastName}</td>
							<td>{item.email}</td>
							<td>{item.phone}</td>
						</tr>
				))}
			</tbody>
			</table>
	)
}

export default Table;
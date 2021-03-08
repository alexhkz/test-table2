import React from 'react';

const Table = ({sortData, contactData}) => {
	return (
		<table className="table">
				<thead>
					<tr>
						<th onClick={ () => {sortData('id')} }>Id</th>
						<th onClick={ () => {sortData('firstName')} }>FirstName</th>
						<th onClick={ () => {sortData('lastName')} }>LastName</th>
						<th onClick={ () => {sortData('email')} }>Email</th>
						<th onClick={ () => {sortData('phone')} }>Phone</th>
					</tr>
				</thead>
			
			<tbody>
				{contactData.map(
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
import React from 'react';
import ArrowUp from '../svg/ArrowUp';
import ArrowDown from '../svg/ArrowDown';

const Table = ({sortData, contactData, directionSort}) => {
	return (
		<table className="table">
				<thead>
					<tr>
						<th onClick={ () => {sortData('id')} }>
							Id {directionSort ? <ArrowDown/> : <ArrowUp/>}
							</th>
						<th onClick={ () => {sortData('firstName')} }>
							FirstName {directionSort ? <ArrowDown/> : <ArrowUp/>}
							</th>
						<th onClick={ () => {sortData('lastName')} }>
							LastName {directionSort ? <ArrowDown/> : <ArrowUp/>}
							</th>
						<th onClick={ () => {sortData('email')} }>
							Email {directionSort ? <ArrowDown/> : <ArrowUp/>}
							</th>
						<th onClick={ () => {sortData('phone')} }>
							Phone {directionSort ? <ArrowDown/> : <ArrowUp/>}
							</th>
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
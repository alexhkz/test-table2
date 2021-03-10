import React, {useState} from 'react';
import ArrowUp from '../svg/ArrowUp';
import ArrowDown from '../svg/ArrowDown';

const Table = ({sortData, contactData, directionSort}) => {

	const [fieldData, setFieldData] = useState('');
	const Arrow = () => {
		return (
			directionSort ? <ArrowDown/> : <ArrowUp/>
		)
	}

	const fieldSortData = (field) => {
		return (
			sortData(field),
			console.log(field),
			setFieldData(field)
		)
	}

	return (
		<table className="table">
				<thead>
					<tr>
						<th onClick={ () => {fieldSortData('id')} }>
							Id {fieldData === 'id' ? <Arrow/> : null}
							</th>
						<th onClick={ () => {fieldSortData('firstName')} }>
							FirstName {fieldData === 'firstName' ? <Arrow/> : null}
							</th>
						<th onClick={ () => {fieldSortData('lastName')} }>
							LastName {fieldData === 'lastName' ? <Arrow/> : null}
							</th>
						<th onClick={ () => {fieldSortData('email')} }>
							Email {fieldData === 'email' ? <Arrow/> : null}
							</th>
						<th onClick={ () => {fieldSortData('phone')} }>
							Phone {fieldData === 'phone' ? <Arrow/> : null}
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
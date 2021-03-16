import React, {useState} from 'react';
import ArrowUp from '../svg/ArrowUp';
import ArrowDown from '../svg/ArrowDown';
import DetailedItem from '../DetailItem/DetailItem';

const Table = ({sortData, contactData, directionSort, detailRow, detailItemData, rowIsClicked}) => {

	const [fieldData, setFieldData] = useState('');
	const Arrow = () => {
		return (
			directionSort 
				? <ArrowDown/> 
				: <ArrowUp/>
		)
	}

	const fieldSortData = (field) => {
		return (
			sortData(field),
			setFieldData(field)
		)
	}

	return (
		<div>
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
						<tr key={item.id + item.email} onClick={ () => detailRow(item)}>
							<td>{item.id}</td>
							<td>{item.firstName}</td>
							<td>{item.lastName}</td>
							<td>{item.email}</td>
							<td>{item.phone}</td>
						</tr>
				))}
			</tbody>
			</table>
			{
				rowIsClicked 
					? <DetailedItem detailItemData={detailItemData} />
					: null 
			}
		</div>
	);
};

export default Table;
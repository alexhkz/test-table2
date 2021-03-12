import React, {Fragment} from 'react';
import Table from '../Table/Table';
import Loader from '../Loader/Loader';
import DetailedItem from '../DetailItem/DetailItem';

const TableBody = ({contactData, sortData, detailItemData, directionSort, detailRow, isLoading}) => {
	return (
		
			isLoading 
				? <Loader /> 
				: <Fragment> 
					<Table 
					contactData={contactData} 
					sortData={sortData} 
					directionSort={directionSort} 
					detailRow={detailRow} />
				<DetailedItem 
					detailItemData={detailItemData} />
		</Fragment>
	)
}

export default TableBody;
import React, {Fragment} from 'react';
import Table from '../Table/Table';
import Loader from '../Loader/Loader';

const TableBody = ({contactData, sortData, detailItemData, directionSort, detailRow, isLoading, rowIsClicked}) => {
	return (
		
			isLoading 
				? <Loader /> 
				: <Fragment> 
					<Table 
					contactData={contactData} 
					sortData={sortData} 
					directionSort={directionSort} 
					detailRow={detailRow} 
					detailItemData={detailItemData} 
					rowIsClicked={rowIsClicked} />
		</Fragment>
	)
}

export default TableBody;
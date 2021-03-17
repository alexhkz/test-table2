import React, {Fragment} from 'react';
import Table from '../Table/Table';
import Loader from '../Loader/Loader';
import InputForm from '../svg/InputForm/InputForm';

const TableBody = ({
		contactData, 
		sortData, 
		detailItemData, 
		directionSort, 
		detailRow, 
		isLoading, 
		rowIsClicked, 
		onSearchSend, 
		getInputFormData}) => {
	return (
		isLoading 
			? <Loader /> 
			: <Fragment> 
				<InputForm getInputFormData={getInputFormData}/>
				<Table 
				contactData={contactData} 
				sortData={sortData} 
				directionSort={directionSort} 
				detailRow={detailRow} 
				detailItemData={detailItemData} 
				rowIsClicked={rowIsClicked}
				onSearchSend={onSearchSend} />
			</Fragment>
	)
}

export default TableBody;
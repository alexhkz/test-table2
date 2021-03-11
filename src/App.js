import './App.css';
import React, {useState} from 'react';
import Table from './Table/Table'
import Loader from './Loader/Loader';
import DetailedItem from './DetailItem/DetailItem';
import useServerData from './Hooks/UseServerData';

function App() {
  	
	// const [contactData, setContactData] = useState([]);
	// const [isLoading, setIsLoading] = useState(true);
	const [directionSort, setDirectionSort] = useState(true);
	const [rowItem, setRowItem] = useState('');
	const [{contactData, isLoading, setContactData}, getData] = useServerData('someUrl');

	const sortData = (field) => {

		const copyData = contactData.concat();

		let sortData;

		if (directionSort) {
			sortData = copyData.sort(
				(a, b) => a[field] > b[field] ? 1: -1
			);
		} else {
			sortData = copyData.reverse(
				(a, b) => a[field] > b[field] ? 1: -1
			);
		}
		
	setContactData(sortData);
	setDirectionSort(!directionSort);
	console.log(directionSort)
	}

	const detailRow = (row) => {
		return (
			setRowItem(row)
		)
	}

	return (
    	<div className="container">
			{isLoading 
				? <Loader /> 
				: <Table 
				contactData={contactData} 
				sortData={sortData} 
				directionSort={directionSort} 
				detailRow={detailRow} />}
				<DetailedItem detailItemData={rowItem} />
    	</div>
  	);
}

export default App;

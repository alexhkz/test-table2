import './App.css';
import React, {useState} from 'react';
import useServerData from './Hooks/UseServerData';
import Switcher from './Switcher/Switcher';
import TableBody from './TableBody/TableBody';

function App() {
  	
	// const [contactData, setContactData] = useState([]);
	// const [isLoading, setIsLoading] = useState(true);

	// const url = 'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';
	const [isButtonClick, setIsButtonClick] = useState(false)
	const [directionSort, setDirectionSort] = useState(true);
	const [rowItem, setRowItem] = useState('');
	const [url, setUrl] = useState('');
	const [rowIsClicked, setRowIsClicked] = useState(false);
	const [{contactData, isLoading, setContactData}, ] = useServerData({url, isButtonClick});

	const buttonHandler = (url) => {
		setUrl(url);
		setIsButtonClick(true);
		console.log(url);
	}

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
		setRowIsClicked(true);
		setRowItem(row);
	}

	return (
    	<div className="container">
			{
				!isButtonClick 
				? <Switcher buttonHandler={buttonHandler}/>
				: <TableBody 
					contactData={contactData}
					sortData={sortData}
					directionSort={directionSort}
					detailItemData={rowItem} 
					detailRow={detailRow}
					isLoading={isLoading} 
					rowIsClicked={rowIsClicked} />
			}
    	</div>
  	);
}

export default App;

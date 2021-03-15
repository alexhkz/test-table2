import './App.css';
import React, { useState, useEffect } from 'react';
import useServerData from './Hooks/UseServerData';
import Switcher from './Switcher/Switcher';
import TableBody from './TableBody/TableBody';
import Pagination from './Pagination/Pagination';

function App() {
  	
	// const [contactData, setContactData] = useState([]);
	// const [isLoading, setIsLoading] = useState(true);

	// const url = 'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}';
	const [isButtonClick, setIsButtonClick] = useState(false)
	const [directionSort, setDirectionSort] = useState(true);
	const [rowItem, setRowItem] = useState('');
	const [url, setUrl] = useState('');
	const [totalCountRow, setTotalCountRow] = useState(0);
	const [totalCountPage, setTotalCountPage] = useState(0);
	const [rowIsClicked, setRowIsClicked] = useState(false);

	const limitCountPage = 50;

	const [currentPageNumber, setCurrentPageNumber] = useState(null);

	const [{contactData, isLoading, setContactData, isLoaded }, ] = useServerData({url, isButtonClick});

	const buttonHandler = (url) => {
		setUrl(url);
		setIsButtonClick(true);
	}

	const lastBlockRow = currentPageNumber * limitCountPage;
	const firstBlockRow = lastBlockRow - limitCountPage + 1;
	const currentBlockRows = contactData.slice(firstBlockRow, lastBlockRow);

	const currentPage = (pg) => {
		setCurrentPageNumber(pg)
	}

	useEffect( () => {
		if(!isLoaded) {
		return
	}

		setTotalCountRow(contactData.length)
		const getTotalCountPage = totalCountRow/limitCountPage
		setTotalCountPage(getTotalCountPage)

		currentPage()
	}, [isLoaded, setTotalCountRow, contactData.length, totalCountRow])

	
	let pages = []
	for ( let i = 1; i <= totalCountPage; i++ ) {
		pages.push(i)
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
	}

	const detailRow = (row) => {
		setRowIsClicked(true);
		setRowItem(row);
	}

	const onNextClick = () => {
		setCurrentPageNumber(currentPageNumber + 1)
	}
	const onPreviousClick = () => {
		setCurrentPageNumber(currentPageNumber - 1)
	}

	return (
    	<div className="container">
			{
				!isButtonClick 
				? <Switcher buttonHandler={buttonHandler}/>
				: <TableBody 
					contactData={currentBlockRows}
					sortData={sortData}
					rowItem={rowItem}
					directionSort={directionSort}
					detailItemData={rowItem} 
					detailRow={detailRow}
					isLoading={isLoading} 
					rowIsClicked={rowIsClicked} />
			}
			<Pagination 
				pages={pages}
				currentPage={currentPage}
				onNextClick={onNextClick} 
				onPreviousClick= {onPreviousClick} />
    	</div>
  	);
}

export default App;

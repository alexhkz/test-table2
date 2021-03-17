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
	const [currentPageNumber, setCurrentPageNumber] = useState(1);
	const [buttonNextDisabled, setButtonNextDisabled] = useState('page-item');
	const [buttonPreviousDisabled, setButtonPreviousDisabled] = useState('page-item');
	const [currentPageActive, setCurrentPageActive] = useState('page-item');
	const [searchText, setSearchText] = useState('');

	const [{contactData, isLoading, setContactData, isLoaded }, ] = useServerData({url, isButtonClick});

	const buttonHandler = (url) => {
		setUrl(url);
		setIsButtonClick(true);
	}

	const getFilteredData = () => {
		if(!searchText) {
			return contactData
		}
			return contactData.filter(
				el => {
					return el['firstName'].toLowerCase().includes(searchText.toLowerCase())
					|| el['lastName'].toLowerCase().includes(searchText.toLowerCase())
					|| el['email'].toLowerCase().includes(searchText.toLowerCase())
				}
			)
	}

	const filteredData = getFilteredData()
	console.log('contactData', contactData)
	console.log('filteredData', filteredData)

	const lastBlockRow = currentPageNumber * limitCountPage;
	const firstBlockRow = lastBlockRow - limitCountPage + 1;
	const currentBlockRows = filteredData.slice(firstBlockRow, lastBlockRow);

	const currentPage = (pg) => {
		setCurrentPageNumber(pg)
		setButtonNextDisabled('')
		setButtonPreviousDisabled('')
		setCurrentPageActive('active')
	}

	useEffect( () => {
		if(!isLoaded) {
		return
	}
		setTotalCountRow(filteredData.length)
		const getTotalCountPage = Math.ceil(totalCountRow/limitCountPage)
		setTotalCountPage(getTotalCountPage)

	}, [isLoaded, setTotalCountRow, filteredData.length, totalCountRow])

	
	let pages = []
	for ( let i = 1; i <= totalCountPage; i++ ) {
		pages.push(i)
	}

	const onSearchSend = (text) => {
		setSearchText(text)
		console.log(searchText)
	}

	const sortData = (field) => {

	const copyData = contactData.concat();

	let sortData;

	if (directionSort) {
		sortData = copyData.sort(
			(a, b) => {return a[field] > b[field] ? 1 : -1}
		)
	} 	sortData = copyData.reverse(
			(a, b) => {return a[field] > b[field] ? 1 : -1}
		)
		
	setContactData(sortData);
	setDirectionSort(!directionSort);
	}

	const detailRow = (row) => {
		setRowIsClicked(true);
		setRowItem(row);
	}

	const onNextClick = () => {
		if(currentPageNumber > totalCountPage -1) {
			setButtonNextDisabled('disabled')
			console.log(buttonNextDisabled)
			return
		}
		setCurrentPageNumber(currentPageNumber + 1)
	}
	const onPreviousClick = () => {
		if(currentPageNumber < 2) {
			setButtonPreviousDisabled('disabled')
			return
		}
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
						rowIsClicked={rowIsClicked}
						onSearchSend={onSearchSend} />
			}
				{
					isLoaded && (totalCountRow > limitCountPage) &&
					<Pagination 
					pages={pages}
					currentPage={currentPage}
					onNextClick={onNextClick} 
					onPreviousClick={onPreviousClick}
					buttonNextDisabled={buttonNextDisabled}
					buttonPreviousDisabled={buttonPreviousDisabled}
					currentPageActive={currentPageActive}
					currentPageNumber={currentPageNumber} />
				}
    	</div>
  	);
}

export default App;

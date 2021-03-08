import './App.css';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Table from './Table/Table'
import Loader from './Loader/Loader';

function App() {

	const baseUrl = 'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}'
  	
	const [smallData, setSmallData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		axios(baseUrl)
			.then((response) => {
				setSmallData(response.data);
				setIsLoading(false);
				});
	}, []);

	return (
    	<div className="container">
			{isLoading 
				? <Loader /> 
				: <Table smallData={smallData}/>}
    	</div>
  	);
}

export default App;

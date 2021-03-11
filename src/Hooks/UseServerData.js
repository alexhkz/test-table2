import {useState, useEffect} from 'react';
import axios from 'axios';
 
const useServerData = (url) => {

	const baseUrl = 'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}'

	const [contactData, setContactData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const getData = () => {

	}

	useEffect(() => {
		axios(baseUrl)
			.then((response) => {
				setContactData(response.data);
				setIsLoading(false);
				});
	}, []);

	return [{contactData, isLoading, setContactData, setIsLoading}, getData]
}

export default useServerData;
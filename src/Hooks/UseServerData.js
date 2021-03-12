import {useState, useEffect} from 'react';
import axios from 'axios';
 
const useServerData = ({url, isButtonClick}) => {

	
	const [contactData, setContactData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const getData = () => {

	}

	useEffect(() => {
		if(!isButtonClick) {
			return
		}
		axios.get(url)
			.then((response) => {
				setContactData(response.data);
				setIsLoading(false);
				});
	}, [url, isButtonClick]);

	return [{contactData, isLoading, setContactData, setIsLoading}, getData]
}

export default useServerData;
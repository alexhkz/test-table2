import {useState, useEffect} from 'react';
import axios from 'axios';
 
const useServerData = ({url, isButtonClick}) => {

	
	const [contactData, setContactData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [isLoaded, setIsLoaded] = useState(false);

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
				setIsLoaded(true);
				});
	}, [url, isButtonClick]);

	return [{contactData, isLoading, isLoaded, setContactData, setIsLoading}, getData]
}

export default useServerData;
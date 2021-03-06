import './App.css';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

function App() {

	const baseUrl = 'http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}'
  	
	const [smallData, setSmallData] = useState([]);
	useEffect(() => {
		axios(baseUrl)
			.then((response) => {
				console.log(response)
				setSmallData(response.data);
				});
	}, []);

	return (
    	<div className="container">
			<table className="table">
				<thead>
					<tr>
						<th>Id</th>
						<th>FirstName</th>
						<th>LastName</th>
						<th>Email</th>
						<th>Phone</th>
					</tr>
				</thead>
			
			<tbody>
				{smallData.map(
					item => (
						<tr key={item.id}>
							<td>{item.id}</td>
							<td>{item.firstName}</td>
							<td>{item.lastName}</td>
							<td>{item.email}</td>
							<td>{item.phone}</td>
						</tr>
				))}
			</tbody>
			</table>
    	</div>
  	);
}

export default App;

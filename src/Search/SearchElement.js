import React, {useState} from 'react';

const SearchElement = ({onSearchSend}) => {

	const [searchValue, setSearchValue] = useState('');

	return (
		<div className="input-group mb-3 mt-3">
			<input 
				type="text" 
				className="form-control" 
				placeholder="Recipient's username" 
				aria-label="Recipient's username" 
				aria-describedby="basic-addon2"
				value={searchValue}
				onChange={(event) => {setSearchValue(event.target.value)}}
			/>
			<div className="input-group-append">
				<button 
					className="btn btn-outline-secondary" 
					type="button"
					onClick={() => onSearchSend(searchValue)}>
						Button
				</button>
			</div>
		</div>
	)
}

export default SearchElement;

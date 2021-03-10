import React from 'react';

const DetailedItem = ({detailItemData}) => {

	const AddressCity = detailItemData && detailItemData.address ? detailItemData.address.city : null;
	const AddressStreet = detailItemData && detailItemData.address ? detailItemData.address.streetAddress : null;
	const AddressState = detailItemData && detailItemData.address ? detailItemData.address.state : null;
	const AddressZip = detailItemData && detailItemData.address ? detailItemData.address.zip : null;

	return (
		<div>
			<div>
				id: <b>{detailItemData.id}</b>
			</div>
			<div>
				firstName: <b>{detailItemData.firstName}</b>
			</div>
			<div>
				lastName: <b>{detailItemData.lastName}</b>
			</div>
			<div>
				email: <b>{detailItemData.email}</b>
			</div>
			<div>
				phone: <b>{detailItemData.phone}</b>
			</div>
			<div>
				streetAddress: <b>{AddressStreet}</b>
			</div>
			<div>
				city: <b>{AddressCity}</b>
			</div>
			<div>
				state: <b>{AddressState}</b>
			</div>
			<div>
				zip: <b>{AddressZip}</b>
			</div>
			<div>
				description: <b>{detailItemData.description}</b>
			</div>
		</div>
	)
}

export default DetailedItem;
import React, { useEffect } from 'react';

const CustomerPhoneDisplay = ({ data }) => {
	useEffect(() => console.log( 'CustomerPhoneDisplay component rendered.....' ));
	return `Phone: ${ data.phone ?? 'n.a.' }`;
};
CustomerPhoneDisplay.displayName = 'CustomerPhoneDisplay';

export default CustomerPhoneDisplay;

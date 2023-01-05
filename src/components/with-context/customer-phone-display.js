import React, { useEffect } from 'react';

import { useObservableContext } from '../../context';

const CustomerPhoneDisplay = () => {
	const { data } = useObservableContext({ phone: 'customer.phone' });
	useEffect(() => console.log( 'CustomerPhoneDisplay component rendered.....' ));
	return `Phone: ${ data.phone ?? 'n.a.' }`;

};
CustomerPhoneDisplay.displayName = 'CustomerPhoneDisplay';

export default CustomerPhoneDisplay;

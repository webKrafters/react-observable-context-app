import { useEffect } from 'react';

import { useDemoStream } from '../../context';

const CustomerPhoneDisplay = () => {
	const { data } = useDemoStream({ phone: 'customer.phone' });
	useEffect(() => console.log( 'CustomerPhoneDisplay component rendered.....' ));
	return `Phone: ${ data.phone ?? 'n.a.' }`;

};
CustomerPhoneDisplay.displayName = 'CustomerPhoneDisplay';

export default CustomerPhoneDisplay;

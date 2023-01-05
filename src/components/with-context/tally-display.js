import React, { memo, useEffect } from 'react';

import isEmpty from 'lodash.isempty';

import { useObservableContext } from '../../context';

import CapitalizedDisplay from '../capitalized-display';

import CustomerPhoneDisplay from './customer-phone-display';

import Reset from './reset';

const TallyDisplay = ({
	PhoneDisplay = CustomerPhoneDisplay,
	Resetter = Reset
}) => {

	const { data: { color, name, price, type } } = useObservableContext({
		color: 'color',
		name: 'customer.name',
		price: 'price',
		type: 'type'
	});

	useEffect(() => console.log( 'TallyDisplay component rendered.....' ));

	return (
		<div style={{ margin: '20px 0 10px' }}>
			<div style={{ float: 'left', fontSize: '1.75rem' }}>
				Customer:
				{ ' ' }
				{ isEmpty( name.first ) && isEmpty( name.last )
					? 'n.a.'
					: (
						<>
							<CapitalizedDisplay text={ name.first } />
							{ ' ' }
							<CapitalizedDisplay text={ name.last } />
						</>
					)
				}
			</div>
			<div style={{ clear: 'both', paddingLeft: 3 }}>
				<PhoneDisplay />
			</div>
			<table>
				<tbody>
					<tr><td><label>Type:</label></td><td>
						<CapitalizedDisplay text={ type } />
					</td></tr>
					<tr><td><label>Color:</label></td><td>
						<CapitalizedDisplay text={ color } />
					</td></tr>
					<tr><td><label>Price:</label></td><td>{ price.toFixed( 2 ) }</td></tr>
				</tbody>
			</table>
			<div style={{ textAlign: 'right' }}>
				<Resetter />
			</div>
		</div>
	);

};

TallyDisplay.displayName = 'TallyDisplay';

export default TallyDisplay;

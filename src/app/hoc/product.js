import React, { memo, useCallback, useEffect, useState } from 'react';

import { connect } from '@webkrafters/react-observable-context';

import ObservableContext, { getDemoInitState } from '../../context';

import CustomerPhoneDisplayComponent from '../../components/customer-phone-display';
import EditorComponent from '../../components/editor';
import PriceStickerComponent from '../../components/price-sticker';
import ProductDescriptionComponent from '../../components/product-description';
import ResetComponent from '../../components/reset';
import TallyDisplayComponent from '../../components/tally-display';

const CustomerPhoneDisplay = connect( ObservableContext, { phone: 'customer.phone' } )( CustomerPhoneDisplayComponent );
const Editor = connect( ObservableContext )( EditorComponent );
const PriceSticker = connect( ObservableContext, { p: 'price' } )( PriceStickerComponent );
const ProductDescription = connect( ObservableContext, { c: 'color', t: 'type' } )( ProductDescriptionComponent );
const Reset = connect( ObservableContext )( ResetComponent );
const TallyDisplay = connect( ObservableContext, {
	color: 'color',
	name: 'customer.name',
	price: 'price',
	type: 'type'
} )( TallyDisplayComponent );

const Product = ({ prehooks = undefined, type }) => {

	const [ state, setState ] = useState(() => getDemoInitState( type ));

	useEffect(() => {
		setState({ type }); // use this to update only the changed state
		// setState({ ...state, type }); // this will override the context internal state for these values 
	}, [ type ]);

	const overridePricing = useCallback( e => setState({ price: Number( e.target.value ) }), [] );

	return (
		<div>
			<div style={{ marginBottom: 10 }}>
				<label>$ <input onKeyUp={ overridePricing } placeholder="override price here..." /></label>
			</div>
			<ObservableContext.Provider prehooks={ prehooks } value={ state }>
				<div style={{
					borderBottom: '1px solid #333',
					marginBottom: 10,
					paddingBottom: 5
				}}>
					<Editor />
					<TallyDisplay PhoneDisplay={ CustomerPhoneDisplay } Resetter={ Reset } />
				</div>
				<ProductDescription />
				<PriceSticker />
			</ObservableContext.Provider>
		</div>
	);

};

Product.displayName = 'Product';

export default Product;

import React, { useCallback, useEffect, useRef, useState } from 'react';

import DemoContext from '../../context';

import { useExternalObserver } from '../ext-observer';

import CustomerPhoneDisplayComponent from '../../components/customer-phone-display';
import EditorComponent from '../../components/editor';
import PriceStickerComponent from '../../components/price-sticker';
import ProductDescriptionComponent from '../../components/product-description';
import ResetComponent from '../../components/reset';
import TallyDisplayComponent from '../../components/tally-display';

const CustomerPhoneDisplay = DemoContext.connect({ phone: 'customer.phone' })( CustomerPhoneDisplayComponent );
const Editor = DemoContext.connect()( EditorComponent );
const PriceSticker = DemoContext.connect({ p: 'price' } )( PriceStickerComponent );
const ProductDescription = DemoContext.connect({ c: 'color', t: 'type' } )( ProductDescriptionComponent );
const Reset = DemoContext.connect()( ResetComponent );
const TallyDisplay = DemoContext.connect({
	color: 'color',
	name: 'customer.name',
	price: 'price',
	type: 'type'
})( TallyDisplayComponent );

const Product = ({ prehooks = undefined, type }) => {

	useEffect(() => { DemoContext.prehooks = prehooks }, [ prehooks ]);
	useEffect(() => DemoContext.store.setState({ type }), [ type ]);
	const overridePricing = useCallback( e => {
		DemoContext.store.setState({
			price: Number( e.target.value )
		})
	}, [] );

	useExternalObserver( DemoContext );

	return (
		<div>
			<div style={{ marginBottom: 10 }}>
				<label>$ <input onKeyUp={ overridePricing } placeholder="override price here..." /></label>
			</div>
			<div style={{
				borderBottom: '1px solid #333',
				marginBottom: 10,
				paddingBottom: 5
			}}>
				<Editor />
				<TallyDisplay
					PhoneDisplay={ CustomerPhoneDisplay }
					Resetter={ Reset }
				/>
			</div>
			<ProductDescription />
			<PriceSticker />
		</div>
	);

};

Product.displayName = 'Product';

export default Product;

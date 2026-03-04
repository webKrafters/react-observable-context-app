import React, { memo, useCallback, useEffect, useState } from 'react';

import DemoContext from '../../context';

import { useExternalObserver } from '../ext-observer';

import CustomerPhoneDisplayComponent from '../../components/with-context/customer-phone-display';
import EditorComponent from '../../components/with-context/editor';
import PriceStickerComponent from '../../components/with-context/price-sticker';
import ProductDescriptionComponent from '../../components/with-context/product-description';
import ResetComponent from '../../components/with-context/reset';
import TallyDisplayComponent from '../../components/with-context/tally-display';

const CustomerPhoneDisplay = memo( CustomerPhoneDisplayComponent );
const Editor = memo( EditorComponent );
const PriceSticker  = memo( PriceStickerComponent );
const ProductDescription = memo( ProductDescriptionComponent );
const Reset = memo( ResetComponent );
const TallyDisplay = memo( TallyDisplayComponent );

const Product = ({ prehooks = undefined, type }) => {

	useEffect(() => DemoContext.store.setState({ type }), [ type ]);

	useEffect(() => { DemoContext.prehooks = prehooks }, [ prehooks ]);

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

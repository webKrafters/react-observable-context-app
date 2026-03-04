import React, { useCallback, useEffect, useState } from 'react';

import DemoContext from '../../context';

import { useExternalObserver } from '../ext-observer';

import Editor from '../../components/with-context/editor';
import PriceSticker from '../../components/with-context/price-sticker';
import ProductDescription from '../../components/with-context/product-description';
import TallyDisplay from '../../components/with-context/tally-display';

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
				<TallyDisplay />
			</div>
			<ProductDescription />
			<PriceSticker />
		</div>
	);

};

Product.displayName = 'Product';

export default Product;

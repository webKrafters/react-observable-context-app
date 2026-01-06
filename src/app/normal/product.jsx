import React, { useCallback, useEffect, useState } from 'react';

import ObservableContext, { getDemoInitState } from '../../context';

import Editor from '../../components/with-context/editor';
import PriceSticker from '../../components/with-context/price-sticker';
import ProductDescription from '../../components/with-context/product-description';
import TallyDisplay from '../../components/with-context/tally-display';

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
					<TallyDisplay />
				</div>
				<ProductDescription />
				<PriceSticker />
			</ObservableContext.Provider>
		</div>
	);

};

Product.displayName = 'Product';

export default Product;

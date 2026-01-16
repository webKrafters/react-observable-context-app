import React, { memo, useCallback, useEffect, useState } from 'react';

import ObservableContext, { getDemoInitState } from '../../context';

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

	const [ state, setState ] = useState(() => getDemoInitState( type ));

	useEffect(() => {
		setState({ type }); // use this to update only the changed state
		// setState({ ...state, type }); // this will override the context internal state for these values 
	}, [ type ]);

	// Again notice! not creating a new state object - only a payload for that which has changed.
	const overridePricing = useCallback( e => setState({ price: Number( e.target.value ) }), [] );

	const ctxRef = useExternalObserver();

	return (
		<div>
			<div style={{ marginBottom: 10 }}>
				<label>$ <input onKeyUp={ overridePricing } placeholder="override price here..." /></label>
			</div>
			<ObservableContext.Provider prehooks={ prehooks } ref={ ctxRef } value={ state }>
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

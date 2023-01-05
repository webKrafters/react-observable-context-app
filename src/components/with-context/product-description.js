import React, { useEffect } from 'react';

import { useObservableContext } from '../../context';

const ProductDescription = () => {
	const { data: { c, t} } = useObservableContext({ c: 'color', t: 'type' });
	useEffect(() => console.log( 'ProductDescription component rendered.....' ));
	return (
		<div style={{ fontSize: 24 }}>
			<strong>Description:</strong> { c } { t }
		</div>
	);
};

ProductDescription.displayName = 'ProductDescription';

export default ProductDescription;

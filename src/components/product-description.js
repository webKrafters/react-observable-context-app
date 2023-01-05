import React, { useEffect } from 'react';

const ProductDescription = ({ data: { c, t } }) => {
	useEffect(() => console.log( 'ProductDescription component rendered.....' ));
	return (
		<div style={{ fontSize: 24 }}>
			<strong>Description:</strong> { c } { t }
		</div>
	);
};

ProductDescription.displayName = 'ProductDescription';

export default ProductDescription;

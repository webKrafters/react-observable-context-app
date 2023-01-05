import React, { memo, useEffect } from 'react';

const CapitalizedDisplay = memo(({ text }) => {
	useEffect(() => console.log( `CapitalizedDisplay( ${ text } ) component rendered.....` ));
	return text && `${ text[ 0 ].toUpperCase() }${ text.length > 1 ? text.slice( 1 ) : '' }`;
});
CapitalizedDisplay.displayName = 'CapitalizedDisplay';

export default CapitalizedDisplay

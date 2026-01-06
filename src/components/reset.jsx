import React, { useCallback, useEffect } from 'react';

const Reset = ({ resetState }) => {
	useEffect(() => console.log( 'Reset component rendered.....' ));
	const reset = useCallback(() => resetState([ '@@STATE' ]), [ resetState ]);
	return ( <button onClick={ reset }>reset context</button> );
};

Reset.displayName = 'Reset';

export default Reset;

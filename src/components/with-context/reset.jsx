import React, { useCallback, useEffect } from 'react'

import { DemoContext } from '../../context';

const Reset = () => {
	const reset = useCallback(() => {
		DemoContext.store.resetState([ '@@STATE' ]), []
	);
	return ( <button onClick={ reset }>reset context</button> );
};

Reset.displayName = 'Reset';

export default Reset;

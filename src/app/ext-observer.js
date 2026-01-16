import { useEffect, useRef } from 'react';

import { getDemoInitState } from '../context';

export function useExternalObserver() {
	
	/** @type {React.MutableRefObj<StoreRef>} */
	const ctxRef = useRef( null );
	
	useEffect(() => {
		console.log( 'on context store mount >>> observer says: OUR CTX REF IS >>>>> ', ctxRef );
		return ctxRef.current.subscribe(( ...args ) => console.log(
			'on context state update >>> observer says: UPDATED STATE WITH THE FOLLWOING ARGS >>>>> ',
			...args
		));
	}, []);
	
	useEffect(() => {
		console.log( 'on context provider update >>> observer says: OUR CTX REF IS >>>>> ', ctxRef );
	});
	
	return ctxRef;
}

/** @typedef {import('@webkrafters/react-observable-context').StoreRef<ReturnType<typeof getDemoInitState>>} StoreRef */

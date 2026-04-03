import { useEffect, useRef } from 'react';

import DemoContext from '../context';

/** @param {typeof DemoContext} ctx */
export function useExternalObserver( ctx ) {

	useEffect(() => {
		console.log( 'on context store mount >>> observer says: OUR CTX REF IS >>>>> ', ctx );
		return ctx.store.subscribe( 'data-updated', ( ...args ) => console.log(
			'on context state update >>> observer says: UPDATED STATE WITH THE FOLLOWING ARGS >>>>> ',
			...args
		) );
	}, []);
	
	useEffect(() => {
		console.log( 'on context provider update >>> observer says: OUR CTX REF IS >>>>> ', ctx );
	});
}

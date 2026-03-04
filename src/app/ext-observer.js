import { useEffect, useRef } from 'react';

import { createEagleEye, ObservableContext } from '@webkrafters/react-observable-context';

export function useExternalObserver( ctx ) {

	useEffect(() => {
		console.log( 'on context store mount >>> observer says: OUR CTX REF IS >>>>> ', ctxRef );
		return ctx.store.subscribe(( ...args ) => console.log(
			'on context state update >>> observer says: UPDATED STATE WITH THE FOLLOWING ARGS >>>>> ',
			...args
		));
	}, []);
	
	useEffect(() => {
		console.log( 'on context provider update >>> observer says: OUR CTX REF IS >>>>> ', ctx );
	});
}

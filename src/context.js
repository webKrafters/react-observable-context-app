import {
	createContext,
	useContext
} from '@webkrafters/react-observable-context';
// } from 'react-eagleeye';

const ObservableContext = createContext();

export const getDemoInitState = type => ({
	color: 'Burgundy',
	customer: {
		name: {
			first: null,
			last: null
		},
		phone: null
	},
	price: 22.5,
	type
});

export const useObservableContext = selectorMap => useContext( ObservableContext, selectorMap );

export default ObservableContext;

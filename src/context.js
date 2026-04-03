import { createEagleEye } from '@webkrafters/react-observable-context';

export const getDemoInitState = () => ({
	color: 'Burgundy',
	customer: {
		name: {
			first: null,
			last: null
		},
		phone: null
	},
	price: 22.5,
	type: ''
});

export const defaultDemoState = getDemoInitState();

const DemoContext = createEagleEye( defaultDemoState );

export const useDemoStream = DemoContext.useStream;

export default DemoContext;

import React, {
	useCallback,
	useLayoutEffect,
	useRef,
	useState
} from 'react';

import Hoc from './hoc';
import Memo from './memo';
import Normal from './normal';

import Logo from '../wklogo-outline.png';

import './style.css';

const getNavItemProps = isCurrent => ({
	...isCurrent ? { className: 'current' } : {},
	rel: 'nofollow noreferrer',
	target: 'blank'
});

let demoType = new URLSearchParams( location.search ).get( 't' );
let Demo;
if( demoType === 'hoc' ) {
	Demo = Hoc;
} else if( demoType === 'memo' ) {
	Demo = Memo;
} else {
	Demo = Normal;
	demoType = '';
}

const prehooks = {
	resetState: ( ...args ) => {
		console.log( 'resetting state with >>>> ', JSON.stringify( args ) );
		return true;
	},
	setState: ( ...args ) => {
		console.log( 'merging following into state >>>> ', JSON.stringify( args ) );
		return true;
	}
};

const year = new Date().getFullYear();

const App = () => {

	const app = useRef();

	const [ productType, setProductType ] = useState( 'Calculator' );

	const updateType = useCallback( e => setProductType( e.target.value ), [] );

	useLayoutEffect(() => {
		for( const button of app.current.querySelectorAll( ':scope button' ) ) {
			button.innerText === 'reset context' && button.classList.add( 'reset' );
		}
	}, []);

	return (
		<div className="App" ref={ app }>
			<div>
				<h1>
					<img src={ Logo } alt="wk logo" />
					<p>
						<span>@webkrafters/react-observable-context demo</span>
						<a
							href="https://www.npmjs.com/package/@webkrafters/react-observable-context"
							target="blank"
						>
							Eagle Eye
						</a>
					</p>
				</h1>
				<nav>
					<label>App types:</label>
					<a href='/' { ...getNavItemProps( demoType === '' ) }>usecontext</a>
					<a href='?t=memo' { ...getNavItemProps( demoType === 'memo' ) }>memo(usecontext)</a>
					<a href='?t=hoc' { ...getNavItemProps( demoType === 'hoc' ) }>connect <i>(recommended)</i></a>
				</nav>
				<main>
					<h1>{ demoType }{ demoType.length ? ' d' : 'D' }emo</h1>
					<h2>A contrived product app.</h2>
					<div style={{ marginBottom: 10 }}>
						<label>
							Type:{ ' ' }
							<input
								onKeyUp={ updateType }
								placeholder="override product type here..."
							/>
						</label>
					</div>
					<Demo prehooks={ prehooks } type={ productType } />
				</main>
			</div>
			<footer>
				&copy;2022{ year > 2022 ? `-${ year }` : '' } webKrafters. All rights reserved.
			</footer>
		</div>
	);

};

App.displayName = 'App';

export default App;

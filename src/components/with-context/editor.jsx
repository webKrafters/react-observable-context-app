import React, { useCallback, useEffect, useRef } from 'react';

import DemoContext from '../../context';

const Editor = () => {

	const fNameInputRef = useRef( null );
	const lNameInputRef = useRef( null );
	const phoneInputRef = useRef( null );
	const priceInputRef = useRef( null );
	const colorInputRef = useRef( null );
	const typeInputRef = useRef( null );

	const updateColor = useCallback(() => {
		DemoContext.store.setState({
			color: colorInputRef.current.value
		});
	}, []);
	const updateName = useCallback(() => {
		DemoContext.store.setState({
			customer: {
				name: {
					first: fNameInputRef.current.value,
					last: lNameInputRef.current.value
				}
			}
		});
	}, []);
	const updatePhone = useCallback(() => {
		let phone = phoneInputRef.current.value;
		if( phone.length && !/[0-9]{10}/.test( phone ) ) { return }
		phone = phone.replace( /(.{3})/, '$1-' ).replace( /(.{7})/, '$1-' );
		DemoContext.store.setState({ customer: { phone } });
	}, []);
	const updatePrice = useCallback(() => {
		DemoContext.store.setState({
			price: Number( priceInputRef.current.value )
		});
	}, []);
	const updateType = useCallback(() => {
		DemoContext.store.setState({
			type: typeInputRef.current.value
		});
	}, []);

	useEffect(() => console.log( 'Editor component rendered.....' ));

	return (
		<fieldset style={{ margin: '10px 0' }}>
			<legend>Editor</legend>
			<h3 style={{ margin: '0.5rem 0' }}>Customer:</h3>
			<div style={{ float: 'left', margin: '10px 0' }}>
				<label htmlFor='firstName'><input ref={ fNameInputRef } placeholder="First name" /></label>
				{ ' ' }
				<label htmlFor='lastName'><input ref={ lNameInputRef } placeholder="Last name" /></label>
				{ ' ' }
				<button onClick={ updateName }>update customer</button>
			</div>
			<div style={{ clear: 'both', margin: '10px 0' }}>
				<label>New Phone: <input
					maxLength={ 10 }
					placeholder="Empty or 10-digit integer"
					ref={ phoneInputRef }
				/></label>
				{ ' ' }
				<button onClick={ updatePhone }>update phone</button>
			</div>
			<hr style={{ margin: '1.5rem 0' }} />
			<div style={{ margin: '10px 0' }}>
				<label>New Price: <input ref={ priceInputRef } /></label>
				{ ' ' }
				<button onClick={ updatePrice }>update price</button>
			</div>
			<div style={{ margin: '10px 0' }}>
				<label>New Color: <input ref={ colorInputRef } /></label>
				{ ' ' }
				<button onClick={ updateColor }>update color</button>
			</div>
			<div style={{ margin: '10px 0' }}>
				<label>New Type: <input ref={ typeInputRef } /></label>
				{ ' ' }
				<button onClick={ updateType }>update type</button>
			</div>
		</fieldset>
	);

};

Editor.displayName = 'Editor';

export default Editor;

/**
 * External dependencies
 */
import React from 'react';
import ReactDOM from 'react-dom';
import get from 'lodash/get';

/**
 * Internal dependencies
 */
import Demo2 from './demo2';
import Demo3 from './demo3';
import Demo4 from './demo4';

const demoNum = get( window, 'jbwca19.demoNum' );
const element = document.querySelector( 'article .entry-content' );

/**
 * This is meant to be illustrative. In a real site, you'd want to split the app into separately bundled chunks.
 */
switch ( demoNum ) {
	case '2':
		ReactDOM.render( <Demo2 />, element );
		break;
	case '3':
		ReactDOM.render( <Demo3 />, element );
		break;
	case '4':
		ReactDOM.render( <Demo4 />, element );
		break;
	default:
		ReactDOM.render(
			<div>
				Error: Demo not found
				<hr />
				{ `demoNum: ${ demoNum }` }
			</div>,
			element
		);
}

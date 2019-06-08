import React from 'react';
import ReactDOM from 'react-dom';
import Demo2 from './demo2';
import Demo3 from './demo3';
import get from 'lodash/get';

const demoNum = get( window, 'jbwca19.demoNum' );
const element = document.querySelector( 'article .entry-content' );

/**
 * This is meant to be illustrative. In a real site, you'd want to split the app into bundled chunks.
 */
switch ( demoNum ) {
	case '2':
		ReactDOM.render( <Demo2 />, element );
		break;
	case '3':
		ReactDOM.render( <Demo3 />, element );
		break;
	default:
		ReactDOM.render(
			<div>
				Demo not found
				<hr />
				{ `demoNum: ${ demoNum }` }
			</div>,
			element
		);
}

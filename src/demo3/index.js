import React from 'react';
import apiFetch from '@wordpress/api-fetch';
import get from 'lodash/get';

const fetchPost = () =>
	apiFetch( { path: '/wp-json/wp/v2/pages/1244' } ).then( post => {
		const title = get( post, 'title.rendered', '' );
		const link = get( post, 'link' );
		const titleLink = link ? `<a href="${ link }">${ title }</a>` : title;

		document.querySelector( '.demo3-title' ).innerHTML = titleLink;
		document.querySelector( '.demo3-content' ).innerHTML = get( post, 'content.rendered', '' );
	} );

const Demo3 = ( props = {} ) => {
	return (
		<div>
			<button onClick={ fetchPost }>Click me :)</button>
			<h3 className="demo3-title" />
			<div className="demo3-content" />
		</div>
	);
};

export default Demo3;

/**
 * External dependencies
 */
import React from 'react';
import get from 'lodash/get';

/**
 * WordPress dependencies
 */
import apiFetch from '@wordpress/api-fetch';
import { escapeAttribute, escapeHTML } from '@wordpress/escape-html';
import { __ } from '@wordpress/i18n';

const fetchPost = () =>
	apiFetch( { path: '/wp-json/wp/v2/pages/1244' } ).then( post => {
		const title = get( post, 'title.rendered', '' );
		const link = get( post, 'link' );
		const titleLink = link
			? `<a href="${ escapeAttribute( link ) }">${ escapeHTML( title ) }</a>`
			: escapeHTML( title );

		document.querySelector( '.demo3-title' ).innerHTML = titleLink;
		document.querySelector( '.demo3-content' ).innerHTML = get( post, 'content.rendered', '' );
	} );

const Demo3 = () => (
	<div>
		<button onClick={ fetchPost }>{ __( 'Click me' ) }</button>
		<h3 className="demo3-title" />
		<div className="demo3-content" />
	</div>
);

export default Demo3;

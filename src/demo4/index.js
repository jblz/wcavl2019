/**
 * External dependencies
 */
import React from 'react';

/**
 * WordPress dependencies
 */
import apiFetch from '@wordpress/api-fetch';
import { compose } from '@wordpress/compose';
import { withDispatch, withSelect } from '@wordpress/data';
import { escapeHTML } from '@wordpress/escape-html';
import { __ } from '@wordpress/i18n';

// Load our Data module
require( './store' );

const POST_ID = 1254;

const Demo4 = ( { content, error, fetchJambalayas, isFetching, title, link } ) => (
	<div>
		<button onClick={ fetchJambalayas }>{ __( 'Click me' ) }</button>
		{ error ? (
			<div>Error: { JSON.stringify( error ) }</div>
		) : (
			<>
				{ isFetching && <p>{ __( 'Fetching!' ) }</p> }
				{ title && (
					<a href={ link }>
						<h3>{ escapeHTML( title ) }</h3>
					</a>
				) }
				{ content && <div dangerouslySetInnerHTML={ { __html: content } } /> }
			</>
		) }
	</div>
);

export default compose( [
	withSelect( select => {
		const { isFetching, getError, getPostData } = select( 'jbwca19-demo4' );
		const { content, title, link } = getPostData();

		return {
			content,
			title,
			link,
			error: getError(),
			isFetching: isFetching(),
		};
	} ),
	withDispatch( dispatch => {
		const { fetchPost, receivePost, receivePostError } = dispatch( 'jbwca19-demo4' );

		return {
			fetchJambalayas: () => {
				fetchPost( POST_ID );
				apiFetch( { path: `/wp-json/wp/v2/pages/${ POST_ID }` } )
					.then( receivePost )
					.catch( receivePostError );
			},
		};
	} ),
] )( Demo4 );

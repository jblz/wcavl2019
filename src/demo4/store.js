/**
 * External dependencies
 */
import get from 'lodash/get';

/**
 * WordPress dependencies
 */
import { combineReducers, registerStore } from '@wordpress/data';

const error = ( state = null, action ) => {
	switch ( action.type ) {
		case 'DEMO4_POST_RECEIVE_ERROR':
			return action.error;
		case 'DEMO4_POST_FETCH':
		case 'DEMO4_POST_RECEIVE':
			return null;
		default:
			return state;
	}
};

const fetching = ( state = false, { type } ) => {
	switch ( type ) {
		case 'DEMO4_POST_FETCH':
			return true;
		case 'DEMO4_POST_RECEIVE_ERROR':
		case 'DEMO4_POST_RECEIVE':
			return false;
		default:
			return state;
	}
};

const postData = ( state = {}, { type, post } ) => {
	switch ( type ) {
		case 'DEMO4_POST_FETCH':
		case 'DEMO4_POST_RECEIVE_ERROR':
			return {};
		case 'DEMO4_POST_RECEIVE':
			const { content, id, link, title } = post;
			return {
				content: get( content, 'rendered', '' ),
				id,
				link,
				title: get( title, 'rendered', '' ),
			};
		default:
			return state;
	}
};

const actions = {
	fetchPost: postId => ( {
		type: 'DEMO4_POST_FETCH',
		postId,
	} ),

	receivePostError( error ) {
		console.error( 'Error fetching post', error );
		return {
			type: 'DEMO4_POST_RECEIVE_ERROR',
			error,
		};
	},

	receivePost( post ) {
		return {
			type: 'DEMO4_POST_RECEIVE',
			post,
		};
	},
};

export default registerStore( 'jbwca19-demo4', {
	actions,

	reducer: combineReducers( {
		error,
		fetching,
		postData,
	} ),

	selectors: {
		getError: state => get( state, 'error', null ),
		isFetching: state => !! get( state, 'fetching' ),
		getPostData: state => get( state, 'postData', {} ),
	},
} );

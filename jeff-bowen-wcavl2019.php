<?php
/**
 * Plugin Name:     Jeff Bowen WordCamp Asheville 2019
 * Plugin URI:      https://2019.asheville.wordcamp.org/session/beyond-the-block-harnessing-gutenberg-packages-components/
 * Description:     Demo plugin for WordCamp Asheville 2019 talk: "Beyond the Block: Harnessing Gutenberg Packages & Components"
 * Author:          Jeff Bowen
 * Author URI:      https://jeff.blog
 * Text Domain:     jeff-bowen-wcavl2019
 * Domain Path:     /languages
 * Version:         0.1.0
 *
 * @package         Jeff_Bowen_Wcavl2019
 */

class JB_WordCamp_Asheville_2019 {
	static function wp() {
		if ( is_admin() || ! is_singular() ) {
			return;
		}

		$post_id = get_queried_object_id();

		if ( $post_id === 1235 ) {
			self::demo1();
			return;
		}

		if ( $post_id === 1237 ) {
			self::demo2();
			return;
		}
	}

	static function demo1() {
		wp_enqueue_script( 'wp-polyfill', includes_url( 'js/dist/wp-polyfill.js' ) );

		wp_enqueue_style( 'nux', includes_url( 'css/dist/nux/style.css' ) );
		wp_enqueue_style( 'components', includes_url( 'css/dist/components/style.css' ) );

		wp_enqueue_style( 'jbwca19_demo1', plugin_dir_url( __FILE__ ) . 'css/demo1.css' );

		wp_register_script( 'element', includes_url( 'js/dist/element.js' ), [ 'react', 'react-dom' ] );
		wp_register_script( 'compose', includes_url( 'js/dist/compose.js' ) );
		wp_register_script( 'data', includes_url( 'js/dist/data.js' ), [ 'lodash', 'element', 'priority-queue', 'compose', 'is-shallow-equal' ] );
		wp_register_script( 'core-data', includes_url( 'js/dist/core-data.js' ), [ 'data' ] );
		wp_register_script( 'i18n', includes_url( 'js/dist/i18n.js' ) );
		wp_register_script( 'is-shallow-equal', includes_url( 'js/dist/is-shallow-equal.js' ) );
		wp_register_script( 'keycodes', includes_url( 'js/dist/keycodes.js' ) );
		wp_register_script( 'components', includes_url( 'js/dist/components.js' ), [ 'moment', 'i18n', 'is-shallow-equal', 'keycodes' ] );
		wp_register_script( 'nux', includes_url( 'js/dist/nux.js' ), [ 'data', 'components' ] );
		wp_register_script( 'priority-queue', includes_url( 'js/dist/priority-queue.js' ) );
		wp_register_script( 'autop', includes_url( 'js/dist/autop.js' ) );
		wp_register_script( 'viewport', includes_url( 'js/dist/viewport.js' ) );

		wp_enqueue_script( 'jbwca19_demo1', plugin_dir_url( __FILE__ ) . 'js/demo1.js', [ 'nux', 'autop', 'element', 'i18n' ], null, true );
	}
	static function demo2() {
		wp_enqueue_script( 'jbwca19_demo2', plugin_dir_url( __FILE__ ) . 'js/demo2.js', null, 1, true );
	}
}
add_action( 'wp', [ 'JB_WordCamp_Asheville_2019', 'wp' ] );

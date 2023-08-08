<?php
/**
 * This handles requests relating to submitting/getting the data from the from creator on the add/edit pages
 * This includes functions hooked to the save function for form post type
 */

/**
 * Save the form's html representation and list of inputs with the post metadata
 */
function save_formdata($post_id) {
	if ( array_key_exists('form_html', $_POST) ) {
		update_post_meta(
			$post_id,
			'_form_html',
			$_POST['form_html']
		);
	}
    if ( array_key_exists('form_array', $_POST) ) {
		update_post_meta(
			$post_id,
			'_form_array',
			$_POST['form_array']
		);
	}
}
add_action( 'save_post', 'wporg_save_postdata' );
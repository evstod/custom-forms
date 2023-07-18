<?php
/**
 * Plugin Name: Custom Forms
 */

defined('ABSPATH') or die;

function register_form_post_type() {
    register_post_type('Form', array(
        'rewrite' => array('slug' => 'forms'),
        'public' => true,
        'labels' => array(
            'name' => 'Forms',
            'add_new_item' => 'Add New Form',
            'edit_item' => 'Edit Form',
            'singular_name' => 'Form'
        ),
        'menu_icon' => 'dashicons-clipboard',
        'supports' => array(
            'title',
            'editor',
            'author',
        ),
        'show_in_rest' => true,
        'show_in_menu' => true,
        'show_ui' => true
    )
    );
}

add_action('init', 'register_form_post_type');

class CustomFormsPlugin {
    function activate() {

    }

    function deactive() {

    }

    function uninstall() {

    }
}


?>
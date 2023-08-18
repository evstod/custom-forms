<?php
/**
 * Plugin Name: Custom Forms
 */

 //End if not accessed via wordpress handlers
 defined('ABSPATH') or die();

/**
 * Register Form post type
 */
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
         'show_in_rest' => false,
         'show_in_menu' => true,
         'show_ui' => true
     )
     );
 }
 add_action('init', 'register_form_post_type');
 
 require_once plugin_dir_path(__FILE__) . 'includes/add.php';


/**
 * Add Menu and pages
 */
 function add_menu_pages() {
     add_menu_page('Settings', 'Forms', 'manage_options', 'form_settings', 'admin_settings_page', 'dashicons-clipboard', 110);
 }
 add_action('admin_menu', 'add_menu_pages');
 
 function admin_settings_page() {
     require_once plugin_dir_path(__FILE__) . 'templates/admin.php';
 }
 
 function settings_link($links) {
     $setting_link_html = '<a href="options-general.php?page=form_settings">Settings</a>';
     array_push($links, $setting_link_html);
     return $links;
 }
 add_filter('plugin_action_links_' . plugin_basename(__FILE__), 'settings_link');

/**
 * Enqueue Assets to head
 */

/**
 * Enqueue stylesheets and scripts to admin panel
 */
 function enqueue_admin() {
     wp_enqueue_style('custom-forms_style', plugin_dir_url(__FILE__) . '/assets/css/admin.css');
 }
 add_action('admin_enqueue_scripts', 'enqueue_admin');

/**
 * Enaqueue stylesheets and scripts to front end
 */
 function enqueue() {
     wp_enqueue_style('custom-forms_style', plugin_dir_url(__FILE__) . '/assets/css/main.css');
 }
 add_action('wp_enqueue_scripts', 'enqueue');


/**
 * Print the form to the current page
 * 
 * Input html is wrapped in a form with a custom action handler
 */
function custom_form_shortcode_callback($args) {
    $id = $args['id'];
    $post = get_post($id);
    if (is_null($post)) {
        return "Form ID not found. Form " . $id;
    }
    $formHtml = get_post_meta($id, '_form_inputs_html_key');
    if (!$formHtml) {
        return "Error retrieving form metadata. Form " . $id;
    }
    
    return "<form action='submit-custom-form' id='form-$id' class='custom-form'>"
     . $formHtml[0]
     . "<input type='hidden' name='form_id' value=$id />"
     . "</form>";
}
add_shortcode('custom-form', 'custom_form_shortcode_callback');



/**
 * Plugin Meta Functions
 */

 //Activate
 function activate() {
    flush_rewrite_rules();
 }
 register_activation_hook(__FILE__, 'activate');
 
 //Deactivate
 function deactivate() {
     flush_rewrite_rules();
 }
 register_deactivation_hook(__FILE__, 'deactivate');
 
 //Something is crashing the entire site without throwing an error here
 // //Uninstall and wipe related data
 // require_once plugin_dir_path(__FILE__) . 'includes/uninstall.php';
 // register_uninstall_hook(__FILE__, 'uninstall');
?>
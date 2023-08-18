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
    
    return "<form method='POST' action='" . admin_url( 'admin-post.php' ) . "' id='form-$id' class='custom-form'>"
     . $formHtml[0]
     . "<input type='hidden' name='action' value='submit_custom_form' />"
     . "<input type='hidden' name='form_id' value=$id />"
     . "<input type='submit' />"
     . "</form>";
}
add_shortcode('custom-form', 'custom_form_shortcode_callback');



 /**
 * Collect the submission rules for sending and write emails for each specified.
 * Activates on form POST
 * Redirects back to global post and adds success state to url parameters
 */
function handle_form_submit($post_id) {
    echo 11111;
    //The email address to send from
    //TODO: Create option for this
    $from_email = "eds2083@rit.edu";

    //False if the submission failed
    $submitted = true;

    if (!(isset($_POST) && isset($_POST['form-id']))) {
        return;
    }
    $form = get_post($_POST['form-id']);
    $emails = json_decode(get_post_meta($post_id, '_form_emails_array_key'), true);


    apply_filters('wp_mail_from', $from_email);


    foreach ($emails as $email) {
        //Email headers (the sending information)
        $headers = [];
        
        //Set email to send from
        array_push($headers, `From: Test <$from_email>`);
        //Add CC addresses
        foreach ($email['cc'] as $cc) {
            array_push($headers, `Cc: ` . $cc);
        }
        //Add BCC Addresses
        foreach ($email['bcc'] as $bcc) {
            array_push($headers, `Bcc: ` . $bcc);
        }
        
        //Mail it
        $submitted = wp_mail($email['to'], $email['subject'], $email['body'], $headers);

        if (!$submitted) {
            wp_redirect(the_permalink() . "?submitted=0");
            exit();
        }
    }

    wp_redirect(the_permalink() . "?submitted=1");
    exit();
}

add_action("admin_post_submit_custom_form", "handle_form_submit");
add_action("admin_post_nopriv_submit_custom_form", "handle_form_submit");



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
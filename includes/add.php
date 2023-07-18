<?php
function custom_form_add_new_page() {
    ?>
    <div class="wrap">
        <h1><?php echo esc_html__('Add New Custom Form', 'text-domain'); ?></h1>
        <form id="custom-form-add-new-form" method="post" action="">
            <!-- Your custom form fields here -->
            <label for="form_title">Form Title:</label>
            <input type="text" name="form_title" id="form_title" value="">
            
            <!-- Additional custom fields can be added here -->
            
            <?php submit_button('Publish Form'); ?>
        </form>
    </div>
    <?php
}

function add_custom_form_submenu_page() {
    add_submenu_page(
        'edit.php?post_type=your_custom_post_type', // Parent menu (custom post type menu)
        'Add New Custom Form', // Page title
        'Add New', // Menu title
        'edit_posts', // Capability required to access the page
        'custom-form-add-new', // Unique menu slug
        'custom_form_add_new_page' // Callback function to render the content
    );
}
add_action('admin_menu', 'add_custom_form_submenu_page');

function handle_custom_form_submission() {
    if (isset($_POST['form_title'])) {
        // Sanitize and save the form data to the database (custom post type)
        $form_title = sanitize_text_field($_POST['form_title']);
        $post_args = array(
            'post_title'   => $form_title,
            'post_status'  => 'publish',
            'post_type'    => 'your_custom_post_type', // Replace with your custom post type slug
        );
        $post_id = wp_insert_post($post_args);
        
        // You can also save additional custom fields here if needed
        
        // Redirect the user to the custom post type list page after form submission
        wp_redirect(admin_url('edit.php?post_type=your_custom_post_type')); // Replace with your custom post type slug
        exit;
    }
}
add_action('admin_post_custom-form-add-new', 'handle_custom_form_submission');

?>
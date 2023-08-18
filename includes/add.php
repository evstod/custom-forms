<?php
/**
 * Add Metaboxes for the form post type edit/add screens:
 * - Form Builder
 * - Submission Rules
 */
function add_form_custom_metaboxes() {
    add_meta_box(
        'form_builder',
        'Form Builder',
        'form_builder_html',
        'form'
    );
    add_meta_box(
        'form_submission_rules',
        'Form Submission Rules',
        'form_submission_rules_html',
        'form'
    );
}

add_action('add_meta_boxes', 'add_form_custom_metaboxes');


/**
 * Form Builder Metabox HTML
*/
function form_builder_html($post) {
    wp_nonce_field('form_save_inputs_array', 'form_inputs_array_nonce');
    wp_nonce_field('form_save_inputs_html', 'form_inputs_html_nonce');

    $form_inputs_array = get_post_meta($post->ID, '_form_inputs_array_key', true);
    $form_inputs_html = get_post_meta($post->ID, '_form_inputs_html_key', true);
    ?>
    <input type="hidden" name="form_inputs_array_field" value="<?php echo esc_attr($form_inputs_array) ?>">
    <input type="hidden" name="form_inputs_html_field" value="<?php echo esc_attr($form_inputs_html) ?>">
    <div id="input-editor">

    </div>
    <div class="pane-container">
        <div class="left-pane" id="input-select-button-group">
            <button type="button" value="button"><span class="dashicons dashicons-button"></span><span class="button-text">Button</span></button>
            <button type="button" value="checkbox"><span class="dashicons dashicons-forms"></span><span class="button-text">Checkbox</span></button>
            <button type="button" value="radio"><span class="dashicons dashicons-editor-ul"></span><span class="button-text">Radio Button</span></button>
            <button type="button" value="select"><span class="dashicons dashicons-menu"></span><span class="button-text">Select</span></button>
            <button type="button" value="text"><span class="dashicons dashicons-editor-textcolor"></span><span class="button-text">Text</span></button>
            <button type="button" value="textarea"><span class="dashicons dashicons-editor-paragraph"></span><span class="button-text">Text Area</span></button>
            <button type="button" value="number"><span class="dashicons dashicons-info"></span><span class="button-text">Number</span></button>
            <button type="button" value="range"><span class="dashicons dashicons-admin-settings"></span><span class="button-text">Slider</span></button>
            <button type="button" value="color"><span class="dashicons dashicons-color-picker"></span><span class="button-text">Color Select</span></button>
            <button type="button" value="date"><span class="dashicons dashicons-calendar-alt"></span><span class="button-text">Date</span></button>
            <button type="button" value="datetime-local"><span class="dashicons dashicons-calendar-alt"></span><span class="button-text">Date & Time</span></button>
            <button type="button" value="month"><span class="dashicons dashicons-calendar"></span><span class="button-text">Month</span></button>
            <button type="button" value="week"><span class="dashicons dashicons-calendar"></span><span class="button-text">Week</span></button>
            <button type="button" value="time"><span class="dashicons dashicons-clock"></span><span class="button-text">Time</span></button>
            <button type="button" value="email"><span class="dashicons dashicons-email"></span><span class="button-text">Email</span></button>
            <button type="button" value="phone"><span class="dashicons dashicons-phone"></span><span class="button-text">Phone Number</span></button>
            <button type="button" value="file"><span class="dashicons dashicons-media-default"></span><span class="button-text">File Upload</span></button>
            <button type="button" value="url"><span class="dashicons dashicons-admin-links"></span><span class="button-text">URL</span></button>
            <button type="button" value="image"><span class="dashicons dashicons-format-image"></span><span class="button-text">Image Upload</span></button>
            <button type="button" value="hidden"><span class="dashicons dashicons-hidden"></span><span class="button-text">Hidden Value</span></button>
        </div>
        <div class="right-pane" id="form-preview">

        </div>
    </div>

    <script src="<?php echo plugin_dir_url('custom-forms.php') . 'custom-forms/assets/js/inputs.js' ?>"></script>
    <script src="<?php echo plugin_dir_url('custom-forms.php') . 'custom-forms/assets/js/inputs/button.js' ?>"></script>
    <script src="<?php echo plugin_dir_url('custom-forms.php') . 'custom-forms/assets/js/inputs/checkbox.js' ?>"></script>
    <script src="<?php echo plugin_dir_url('custom-forms.php') . 'custom-forms/assets/js/inputs/color.js' ?>"></script>
    <script src="<?php echo plugin_dir_url('custom-forms.php') . 'custom-forms/assets/js/inputs/date.js' ?>"></script>
    <script src="<?php echo plugin_dir_url('custom-forms.php') . 'custom-forms/assets/js/inputs/dateTimeLocal.js' ?>"></script>
    <script src="<?php echo plugin_dir_url('custom-forms.php') . 'custom-forms/assets/js/inputs/email.js' ?>"></script>
    <script src="<?php echo plugin_dir_url('custom-forms.php') . 'custom-forms/assets/js/inputs/file.js' ?>"></script>
    <script src="<?php echo plugin_dir_url('custom-forms.php') . 'custom-forms/assets/js/inputs/hidden.js' ?>"></script>
    <script src="<?php echo plugin_dir_url('custom-forms.php') . 'custom-forms/assets/js/inputs/image.js' ?>"></script>
    <script src="<?php echo plugin_dir_url('custom-forms.php') . 'custom-forms/assets/js/inputs/number.js' ?>"></script>
    <script src="<?php echo plugin_dir_url('custom-forms.php') . 'custom-forms/assets/js/inputs/phone.js' ?>"></script>
    <script src="<?php echo plugin_dir_url('custom-forms.php') . 'custom-forms/assets/js/inputs/radio.js' ?>"></script>
    <script src="<?php echo plugin_dir_url('custom-forms.php') . 'custom-forms/assets/js/inputs/range.js' ?>"></script>
    <script src="<?php echo plugin_dir_url('custom-forms.php') . 'custom-forms/assets/js/inputs/select.js' ?>"></script>
    <script src="<?php echo plugin_dir_url('custom-forms.php') . 'custom-forms/assets/js/inputs/text.js' ?>"></script>
    <script src="<?php echo plugin_dir_url('custom-forms.php') . 'custom-forms/assets/js/inputs/textArea.js' ?>"></script>
    <script src="<?php echo plugin_dir_url('custom-forms.php') . 'custom-forms/assets/js/inputs/url.js' ?>"></script>
    <script src="<?php echo plugin_dir_url('custom-forms.php') . 'custom-forms/assets/js/form-creator.js' ?>"></script>
    <?php
}

/**
 * Sumbission Rules Metabox HTML
 */
function form_submission_rules_html($post) {
    wp_nonce_field('form_save_emails_array', 'form_emails_array_nonce');
    $form_emails = get_post_meta($post->ID, '_form_emails_array_key', true);
    ?>
    <input type="hidden" name="form_emails_array_field" id="form_emails_array_field" value="<?php echo esc_attr($form_emails) ?>">
    <div id="email-container">
        <p><b>Note:</b> To include the submitted value of an input, represent the input using its name in curly brackets. Ex: {an_input_name}</p>
    </div>
    <button type="button" id="add-email">Add Email</button>

    <script src="<?php echo plugin_dir_url('custom-forms.php') . 'custom-forms/assets/js/submission-rules.js' ?>"></script>
    <script src="<?php echo plugin_dir_url('custom-forms.php') . 'custom-forms/assets/js/email-template.js' ?>"></script>
    <?php
}


/**
 * Save the inputs JSON array sent via POST on Edit Form submission
 */
function form_save_inputs_array($post_id) {
    if (!isset($_POST['form_inputs_array_nonce'])) {
        return;
    }

    if (!wp_verify_nonce($_POST['form_inputs_array_nonce'], 'form_save_inputs_array')) {
        return;
    }

    if (!current_user_can('edit_post', $post_id)) {
        return;
    }

    if (!isset($_POST['form_inputs_array_field'])) {
        return;
    }

    $inputs_data = $_POST['form_inputs_array_field'];

    update_post_meta($post_id, '_form_inputs_array_key', $inputs_data);
}

add_action('save_post', 'form_save_inputs_array', 10);

/**
 * Save the inputs html string sent via POST on Edit Form submission
 */
function form_save_inputs_html($post_id) {
    if (!isset($_POST['form_inputs_array_nonce'])) {
        return;
    }

    if (!wp_verify_nonce($_POST['form_inputs_html_nonce'], 'form_save_inputs_html')) {
        return;
    }

    if (!current_user_can('edit_post', $post_id)) {
        return;
    }

    if (!isset($_POST['form_inputs_html_field'])) {
        return;
    }

    $inputs_data = $_POST['form_inputs_html_field'];

    update_post_meta($post_id, '_form_inputs_html_key', $inputs_data);
}

add_action('save_post', 'form_save_inputs_html', 11);

/**
 * Save the emails JSON array sent via POST on Edit Form submission
 */
function form_save_emails_array($post_id) {
    if (!isset($_POST['form_emails_array_nonce'])) {
        return;
    }

    if (!wp_verify_nonce($_POST['form_emails_array_nonce'], 'form_save_emails_array')) {
        return;
    }

    if (!current_user_can('edit_post', $post_id)) {
        return;
    }

    if (!isset($_POST['form_emails_array'])) {
        return;
    }

    $emails_array = $_POST['form_emails_array_field'];

    update_post_meta($post_id, '_form_emails_array_key', $emails_array);
}
add_action('save_post', 'form_save_emails_array', 12);

/**
 * Add column 'shortcode' to Forms listings
 */
function form_add_custom_columns($columns) {
    $columns['shortcode'] = 'shortcode';
    return $columns;
}
add_filter('manage_form_posts_columns','form_add_custom_columns');

/**
 * Generate content of shortcode column
 * Populate with the expected shortcode for each form
 */
function form_shortcode_custom_column($column, $post_id) {
    if ($column == 'shortcode') {
        echo "[custom-form id=$post_id]";
    }
}
add_action( 'manage_posts_custom_column','form_shortcode_custom_column', 10, 2 );
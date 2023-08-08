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
    ?>
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

    <input type="hidden" name="form_array">
    <input type="hidden" name="form_html">

    <script src="<?php echo plugin_dir_url('custom-forms.php') . 'custom-forms/assets/js/inputs.js' ?>"></script>
    <script src="<?php echo plugin_dir_url('custom-forms.php') . 'custom-forms/assets/js/form-creator.js' ?>"></script>
    <?php
}
?>